window.addEventListener('load',()=>{
    const startButton = document.getElementById('btn');
    const restartButton = document.getElementById('restart-button')
let game
    function startGame(){
        console.log('Start Game')
        document.getElementById('game-intro').style.display='none';
        document.getElementById('game-container').style.display='block';
      game = new Game()
      game.start()

    }

    startButton.addEventListener('click',function(){
        startGame()
    })

    restartButton.addEventListener('click', function () {
        game.player.element.remove()
        startGame()
      })

})
   
