class Game {
    constructor() {
      this.startScreen = document.getElementById('game-intro');
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end");
      this.height= 600;
      this.width = 500;
      this.player=new Player(this.gameScreen,0,0,160,100)
      this.obstacles = []
      this.animateId = 0
      this.score = 0
      this.lives = 1
      this.gameOver = false
      this.backgroundMusic = document.getElementById('music-button');

    }

    start(){
      
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';

        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`
        this.gameLoop();
        
     
      }
     
      gameLoop() {
        this.update()
    
        if (this.animateId % 400 === 0) {
          this.obstacles.push(
            new Obstacle(
              this.gameScreen,
              Math.random() * (this.gameScreen.clientWidth - 40 - 100) + 50,-100, 150,120 )
          )
        }
    
        document.getElementById('score').innerText = this.score
        document.getElementById('lives').innerText = this.lives

        const finalScoreElement = document.getElementById('final-score');
        finalScoreElement.innerText = this.score;
    
        if (this.lives < 1) {
          this.gameOver = true
        }
    
        if (this.gameOver) {
          this.gameScreen.style.display = 'none'
          this.gameEndScreen.style.display = 'block'
          this.stopBackgroundMusic();
        } else {
          this.animateId = requestAnimationFrame(() => this.gameLoop())
        }
      }
      stopBackgroundMusic() {
        this.backgroundMusic.pause();
      }
      
      update() {
        this.player.move()
        console.log(this.obstacles)
        const nextObstacles = []
        this.obstacles.forEach(obstacle => {
          obstacle.move()
          if (this.player.didCollide(obstacle)) {
            this.lives -= 1
            obstacle.vibrate();
            obstacle.element.remove()
            const collisionSound = document.getElementById('collision-sound');
            collisionSound.play();
          } else if (obstacle.top > this.gameScreen.clientHeight) {
            this.score += 1
            obstacle.element.remove()
          } else {
            nextObstacles.push(obstacle)
          }
        });
        this.obstacles = nextObstacles
      }
    
      
}