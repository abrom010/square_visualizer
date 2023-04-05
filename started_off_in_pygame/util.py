import math
from position import Position

def rotate_point(position: Position, pivot: Position, rotation: float):
  rotation = -rotation
  x0 = position.x - pivot.x
  y0 = position.y - pivot.y
  cos = math.cos(math.radians(rotation))
  sin = math.sin(math.radians(rotation))
  x1 = x0 * cos - y0 * sin
  y1 = x0 * sin + y0 * cos
  x1 += pivot.x
  y1 += pivot.y
  return Position(x1,y1)