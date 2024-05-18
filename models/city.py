#!/usr/bin/python3
# Module for the City of User
from models.base_model import BaseModel


class City(BaseModel):
    """
    City Class
    """
    def __init__(self):
        self.state_id = ''
        self.name = ''
