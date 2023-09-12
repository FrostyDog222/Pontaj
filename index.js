const btn = document.getElementById("pontajBtn")
const name = document.getElementById("name")

let btnStatus = true

function startShift(){
    if(name.value){
        btnStatus = !btnStatus;
        btn.textContent = btnStatus ? "Start Shift" : "End Shift";
        name.value = btnStatus ? "" : name.value;
        toggleTimer();
    }else {
        alert('Introduceti un Nume valid');
    }
}

btn.addEventListener("click", startShift)

// Capitalize the first letter
function capitalizeFirstLetter() {
    const inputElement = document.getElementById('name');
    const inputValue = inputElement.value;
    const words = inputValue.split(' ');
  
    // Capitalize every the first letter of every word and keep the other small
    const capitalizedWords = words.map(word => {
      if (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return '';
    });
    const formattedValue = capitalizedWords.join(' ');

    // Modify the input text with the capitalized letter one
    inputElement.value = formattedValue;
  }

// Timer
let startTime;
let timerInterval;
let timerRunning = false;

function toggleTimer() {
  if (!timerRunning) {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTimer, 1000); // Update the timer at every second
    timerRunning = true;
  } else {
    // If the timer is running stop it and show the last time
    clearInterval(timerInterval);
    const endTime = new Date().getTime();
    const elapsedTime = (endTime - startTime) / 1000; // Time in seconds

    // Converting the time in hours, minutes and seconds
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = Math.floor(elapsedTime % 60);

    document.getElementById('timerDisplay').textContent = `Timer: ${hours} Hours, ${minutes} minutes, ${seconds} seconds`;
    timerRunning = false;
  }
}

function updateTimer() {
  const currentTime = new Date().getTime();
  const elapsedTime = (currentTime - startTime) / 1000; // Time in seconds

  // Converting the time in hours, minutes and seconds
  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = Math.floor(elapsedTime % 60);

  document.getElementById('timerDisplay').textContent = `Timer: ${hours} Hours, ${minutes} minutes, ${seconds} seconds`;
}