# PowerPack Adventure

The Game is an action-packed adventure where players join Blossom, Bubbles, and Buttercup to save Townsville from villains using their unique superpowers and teamwork.


![Logo](https://bilder.fernsehserien.de/sendung/hr/v0537-w-321.png.jpg)


## 🔗 Links
https://sanjanatu.github.io/Game_Project1_PowerpuffGirls_-2023/

## Main Functionalities

- Mojo Jojo move automatically and players change direction by clicking Letter A for left direction Letter D for right direction Letter W for up direction and Letter S for down direction.
- The player has to escape from the mojo.When the player escape from the mojo it earns a point.
- When the player hit the mojo it losses a live. And Mojo gets disappeared.
- A score is calculated based on the amount of Mojo destroyed.
- The game ends when 5 lives of the player losses.

## Backlog Functionalities

- Adding different types of creatures.
- Improving the UI and adding a visible fort wall at the bottom of the screen.
- Increasing the level of the game by adding new adventures.

## Technologies Used

- HTML
- CSS
- JAVASCRIPT
- DOM Manipulation
- JS Classes
- Local Storage
- JS Audio() and JS Image()

## Status

- Start Screen
- Game Screen
- Game End Screen

## Project Structure

### Game.js
- class Game
  - this.startScreen = document.getElementById('game-intro');
  - this.gameScreen = document.getElementById("game-screen");
  - this.gameEndScreen = document.getElementById("game-end");
  - this.height= 600;
  - this.width = 500;
  - this.player=new Player(this.gameScreen,0,0,160,100)
  - this.obstacles = []
  - this.animateId = 0
  - this.score = 0
  - this.lives = 5
  - this.gameOver = false
  - this.backgroundMusic = document.getElementById('music-button');
- start()
- gameLoop()
- stopBackgroundMusic()
- update()

### Obstacle.js

- class Obstacle
   - this.gameScreen = gameScreen
   - this.left = left
   - this.top = top
   - this.height = height
   - this.width = width
   - this.element = document.createElement('img')
   - this.element.src = 'images/mojo1.png'
   - this.element.style.position = 'absolute'
   - this.element.style.left = `${this.left}px`
   - this.element.style.top = `${this.top}px`
   - this.element.style.height = `${this.height}px`
   - this.element.style.width = `${this.width}px`
   - this.gameScreen.appendChild(this.element)
- move()
- updatePosition()
- vibrate()

### Player.js

- class Player()
- move()
- updatePosition()
- didCollide()

### Script.js

- the player's directionX and directionY properties based on the keys that the user presses on the keyboard. 
- This function listens for the keydown event using document.
- On keydown and checks if the pressed key matches any of the allowed keystrokes (arrow keys).
