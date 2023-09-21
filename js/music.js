const toggleMusicButton = document.getElementById('music-button');
  const volumeSlider = document.getElementById('volume-slider');
  let audioPlayer = new Audio('./audio/Theme_Song.mp3'); 
  let isPlaying = false;
  audioPlayer.loop = true;

  
  audioPlayer.volume = volumeSlider.value;

  toggleMusicButton.addEventListener('click', () => {
    if (!isPlaying) {
     
      audioPlayer.play();
      toggleMusicButton.textContent = 'Pause Music';
      volumeSlider.classList.remove('hidden');
      
      isPlaying = true;
    } else {
      
      audioPlayer.pause();
      toggleMusicButton.textContent = 'Play Music';
      volumeSlider.classList.add('hidden');
      isPlaying = false;
    }
  });

  volumeSlider.addEventListener('input', () => {
    
    audioPlayer.volume = volumeSlider.value;
  });