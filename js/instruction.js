document.addEventListener('DOMContentLoaded', function () {
    const showInstructionsButton = document.getElementById('btn_inst');
    const instructionsContainer = document.getElementById('info');

    function toggleInstructions() {
        if (instructionsContainer.style.display === 'none') {
          instructionsContainer.style.display = 'block';
        } else {
          instructionsContainer.style.display = 'none';
        }
      }
    
      // Add click event listener to the button
     showInstructionsButton.addEventListener('click', toggleInstructions);
    });
