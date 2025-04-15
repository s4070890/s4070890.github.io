//link video
const myVideo = document.querySelector("#my-video");
console.log(myVideo);
//--------------------------------------

//play video button
const playButton = document.querySelector("#play-button");
console.log(playButton);
playButton.addEventListener("click", playvideo);

// play video
function playvideo() {
  myVideo.play();
}
//--------------------------------------

//pause video button
const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);
//play sound while click
pauseButton.addEventListener("click", pauseAudio);

// pause video
function pauseAudio() {
  myVideo.pause();
}

//play & pause in 1 button
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);
//use togglevideo to make it lay and pause in same button
pauseButton.addEventListener("click", toggleVideo);

// if else for pause and play
function toggleVideo() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
  } else {
    myVideo.pause();
  }
}
