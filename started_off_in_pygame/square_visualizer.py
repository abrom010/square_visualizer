import pygame
from position import Position
from square import Square

pygame.init()
SCREEN_WIDTH = 800.0
SCREEN_HEIGHT = 600.0
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))

running = True
squares = []

# base square at center of screen
base_square = Square(screen, length=100, position=Position(SCREEN_WIDTH/2, SCREEN_HEIGHT/2), rotation=45.0)
squares.append(base_square)

 # draws x and y axis
def draw_graph():
    pygame.draw.line(screen, (200, 200, 200), (0, SCREEN_HEIGHT/2), (SCREEN_WIDTH, SCREEN_HEIGHT/2))
    pygame.draw.line(screen, (200, 200, 200), (SCREEN_WIDTH/2, 0), (SCREEN_WIDTH/2, SCREEN_HEIGHT))

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    screen.fill((255,255,255))

    for square in squares:
        square.draw()

    draw_graph()
    pygame.display.flip()


pygame.quit()