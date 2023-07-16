#!/usr/bin/python3

class Square:
    """
    A class representing a square shape.
    
    Attributes:
    - width: The width of the square.
    - height: The height of the square.
    """

    def __init__(self, width=0, height=0):
        """
        Initializes a square with the given width and height.
        
        Args:
        - width: The width of the square.
        - height: The height of the square.
        """
        self.width = width
        self.height = height

    def area_of_my_square(self):
        """
        Calculates the area of the square.
        
        Returns:
        The area of the square.
        """
        return self.width * self.height

    def perimeter_of_my_square(self):
        """
        Calculates the perimeter of the square.
        
        Returns:
        The perimeter of the square.
        """
        return (self.width * 2) + (self.height * 2)

    def __str__(self):
        """
        Returns a string representation of the square.
        
        Returns:
        A string representation of the square in the format 'width/height'.
        """
        return "{}/{}".format(self.width, self.height)

if __name__ == "__main__":
    s = Square(width=12, height=9)
    print(s)
    print(s.area_of_my_square())
    print(s.perimeter_of_my_square())
