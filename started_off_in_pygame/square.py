import pygame
import util
from position import Position

class Square:
    def __init__(self, screen: pygame.Surface, length: float, position: Position, rotation:float):
        self.screen = screen
        self.length = length
        self.position = position
        self.rotation = rotation

    def getCenter(self):
        return Position(self.position.x,self.position.y)
    
    def generateCorners(self):
        # corners in drawing order
        corners = []

        x0, y0 = self.position.x-self.length/2, self.position.y-self.length/2

        # top left
        point = Position(x0, y0)
        corners.append(util.rotate_point(point, self.getCenter(), self.rotation))

        # top right
        point = Position(x0 + self.length, y0)
        corners.append(util.rotate_point(point, self.getCenter(), self.rotation))

        # bottom right
        point = Position(x0 + self.length, y0 + self.length)
        corners.append(util.rotate_point(point, self.getCenter(), self.rotation))
 
        # bottom left
        point = Position(x0, y0 + self.length)
        corners.append(util.rotate_point(point, self.getCenter(), self.rotation))

        return corners

    def draw(self):
        # draw 4 lines (border of square)
        color = 0
        width = 2
        corners = self.generateCorners()
        for i in range(len(corners)):
            corners[i] = corners[i].t()

        # sliding double pointer to draw each line connected by corners
        for i in range(len(corners)):
          if i == len(corners)-1:
              c1 = corners[len(corners)-1]
              c2 = corners[0]
          else:
            c1 = corners[i]
            c2 = corners[i+1]
          pygame.draw.line(self.screen, color, c1, c2, width)
        
    def generateSurroundingSquares(self):
        surrounding_squares = []
        #first = Square(self.length*2, origin_x, origin_y, 45)
        return surrounding_squares