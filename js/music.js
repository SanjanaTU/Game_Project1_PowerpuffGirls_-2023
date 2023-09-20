const toggleMusicButton = document.getElementById('music-button');
  const volumeSlider = document.getElementById('volume-slider');
  let audioPlayer = new Audio('./audio/Theme_Song.mp3'); // Replace with your audio file path
  let isPlaying = false;
  audioPlayer.loop = true;

  // Initialize audio volume
  audioPlayer.volume = volumeSlider.value;

  toggleMusicButton.addEventListener('click', () => {
    if (!isPlaying) {
      // Play audio
      audioPlayer.play();
      toggleMusicButton.textContent = 'Pause Music';
      isPlaying = true;
    } else {
      // Pause audio
      audioPlayer.pause();
      toggleMusicButton.textContent = 'Play Music';
      isPlaying = false;
    }
  });

  volumeSlider.addEventListener('input', () => {
    // Adjust the volume when the slider is changed
    audioPlayer.volume = volumeSlider.value;
  });