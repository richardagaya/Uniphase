#!/usr/bin/python3
# Data Model for Post
from models.base_model import BaseModel


class Post(BaseModel):
    """
    Defines the attributes for the Post class
    """
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.post_id = ''
        self.user_id = kwargs.get("id")
        self.content = ''
        self.timestamp = kwargs.get("created_at")
        self.upvotes = 0
        self.downvotes = 0
