#!/usr/bin/python3
""" 
User class
"""

class User:
    def __init__(self):
        self.__email = None

    @property
    def email(self):
        """Getter for email"""
        return self.__email

    @email.setter
    def email(self, value):
        """Setter for email"""
        if not isinstance(value, str):
            raise TypeError("email must be a string")
        self.__email = value

if __name__ == "__main__":
    u = User()
    u.email = "john@snow.com"
    print(u.email)
