#!/usr/bin/python3
# Creates a storage instance
from models.engine.file_storage import FileStorage

storage = FileStorage()
storage.reload()
