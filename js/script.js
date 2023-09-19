window.addEventListener('load',()=>{
    const startButton = document.getElementById('btn');
    const restartButton = document.getElementById('restart-button')
let game
    function startGame(){
        console.log('Start Game')
      game = new Game()
      game.start()

    }

    startButton.addEventListener('click',function(){
        startGame()
    })

    restartButton.addEventListener('click', function () {
        location.reload()
      })

    document.addEventListener('keydown', event => {
        console.log('down', event)
        if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
          game.player.directionX = -1
        } else if (event.code === 'KeyD' || event.code === 'ArrowRight') {
          game.player.directionX = 1
        }
        if (event.code === 'KeyW') {
          game.player.directionY = -1
        } else if (event.code === 'KeyS') {
          game.player.directionY = 1
        }
      })
    

   
  document.addEventListener('keyup', event => {
    console.log('up', event)
    if (
      event.code === 'KeyA' || event.code === 'KeyD' || event.code === 'ArrowLeft' || event.code === 'ArrowRight' ) {
      game.player.directionX = 0
    }
    if (event.code === 'KeyW' || event.code === 'KeyS') {
      game.player.directionY = 0
    }
  })
})
