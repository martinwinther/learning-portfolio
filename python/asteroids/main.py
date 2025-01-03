# this allows us to use code from
# the open-source pygame library
# throughout this file
import pygame
import sys
from constants import * 
from player import *
from asteroid import *
from asteroidfield import *
from shot import *


def main():
    pygame.init()

    clock = pygame.time.Clock()
    dt = 0 

    screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))

    updatable = pygame.sprite.Group()
    drawable = pygame.sprite.Group()
    asteroids = pygame.sprite.Group()
    shots = pygame.sprite.Group()

    Player.containers = (updatable, drawable)
    Asteroid.containers = (asteroids, updatable, drawable)
    AsteroidField.containers = (updatable)
    Shot.containers = (shots, updatable, drawable)

    asteroid_field = AsteroidField()
    player = Player(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2)


    # Game loop starts
    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                return
            
        screen.fill("black")
        for obj in updatable:
            obj.update(dt)
        
        for obj in asteroids:
            if obj.collides_with(player):
                print("Game over!")
                sys.exit()
            for bullet in shots:
                if bullet.collides_with(obj):
                    bullet.kill()
                    obj.split()

        for obj in drawable:
            obj.draw(screen)

        pygame.display.flip()

        dt = clock.tick(60) / 1000.0
if __name__ == "__main__":
    main()
