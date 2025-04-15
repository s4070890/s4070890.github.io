//link audio
const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);

//play audio
const playButton = document.querySelector("#play-button");
console.log(playButton);
playButton.addEventListener("click", playAudio);

// my play logic
function playAudio() {
  airportAudio.play();
}
//-------------------------------

//pause audio

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);
//play sound while click
pauseButton.addEventListener("click", pauseAudio);

// my play logic
function pauseAudio() {
  airportAudio.pause();
}
//-------------------------------

//link audio
const popSound = document.querySelector("#pop-sound");
console.log(popSound);

//play audio
const popButton = document.querySelector("#pop-button");
console.log(popButton);
popSound.addEventListener("click", playAudio);

// my play logic
function playAudio() {
  popSound.play();
}
