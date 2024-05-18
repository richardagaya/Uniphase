#!/usr/bin/python3
# User Reviews Model
from models.base_model import BaseModel


class Review(BaseModel):
    """
    Defines the Review class for Users
    """
    def __init__(self, **kwargs):
        super.__init__(**kwargs)
        self.place_id = ''
        self.user_id = kwargs.get("id")
        self.text = ''
