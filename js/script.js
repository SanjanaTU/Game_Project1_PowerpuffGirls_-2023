window.addEventListener('load',()=>{
    const startButton = document.getElementById('btn');
    const restartButton = document.getElementById('restart-button')

    function startGame(){
        console.log('Start Game')
        document.getElementById('game-intro').style.display='none';
        document.getElementById('game-container').style.display='block';
       

    }

    startButton.addEventListener('click',function(){
        startGame()
    })
   
})