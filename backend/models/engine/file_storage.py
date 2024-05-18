#!/usr/bin/python3
# Serializes and Deserializes JSON to a file for persistent storage
import os
import json


class FileStorage():
    """
    File storage for created objects
    """
    def __init__(self):
        """
        Initializes the file path and loads the file content
        """
        self.__file_path = 'p_storage.json'
        self.__objects = {}
        self.reload()

    def all(self):
        """
        Returns all the data in the json file
        """
        return self.__objects

    def new(self, obj):
        """
        Serializes the object before adding to the objects dictionary
        """
        serialized_obj = obj.to_dict()
        self.__objects['{}.{}'.format(obj.__class__.__name__,
                                      obj.id)] = serialized_obj

    def save(self):
        """
        Reads contents from json file and deserializes to dict 'objects'
        """
        with open(self.__file_path, mode='w', encoding='utf-8') as file1:
            json.dump(self.__objects, file1)

    def reload(self):
        if os.path.exists(self.__file_path):
            if os.path.getsize(self.__file_path) > 0:
                try:
                    with open(self.__file_path, mode='r', encoding='utf-8') as file2:
                        self.__objects = json.load(file2)
                except json.JSONDecodeError:
                    self.__objects = {}
            else:
                open(self.__file_path, 'w').close()
                self.__objects = {}
        else:
            pass
