class Game {
    constructor() {
      this.startScreen = document.getElementsById('game-intro');
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end");
      this.height = '';
      this.width = '';
      

    }

    start(){
      
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';

        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`
        this.gameLoop();
     
      }
      gameLoop(){
        this.Update();
        requestAnimationFrame(() =>   this.gameLoop())

      }

      Update(){

      }
    }
