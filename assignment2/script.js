// Navigation - Start Button
// I set that the interface will lead to the video tutorial page after click on "Start", Cause I reckon it is easier for kids (Just one button the the main area).
document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.querySelector("#start-btn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      window.location.href =
        "https://s4070890.github.io/assignment2/video.html";
    });
  }
});

//Getting Dom
const video = document.getElementById("craft-video");
const playPauseBtn = document.getElementById("play-pause-btn");
const playPauseImg = document.getElementById("play-pause-img");
const progressBarFill = document.getElementById("progress-bar-fill");
const stepTexts = document.querySelectorAll(".step-text h3, .step-text p");

// Setting the video time to each step's buttons. I think it is eariser for user to go back to the step they missed.
// Also I make the instrution below the video flip via video time.
// Design Concept : I make this flipping instructions below the video, which i was inspire by the caption.
const stepTimes = [
  { time: 14, text: "Step 1" },
  { time: 35, text: "Step 2" },
  { time: 42, text: "Step 3" },
  { time: 48, text: "Step 4" },
  { time: 50, text: "Step 5" },
  { time: 95, text: "Step 6" },
  { time: 128, text: "Step 7" },
  { time: 144, text: "Step 8" },
  { time: 169, text: "Step 9" },
  { time: 205, text: "Step 10" },
];

// Orginal play and pause button
function togglePlayPause() {
  if (video.paused) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

// Change volume. I set eash click +-0.2 in HTML file
function changeVolume(amount) {
  video.volume = Math.min(1, Math.max(0, video.volume + amount)); // Set the max as 1, min as 0.
}

// Full screen
function toggleFullScreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  }
}

// Timeline
video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100; // the whole video time = 100%, the video current time = ?% og the whole video
  progressBarFill.style.width = percent + "%"; //fill the timeline by the current video time percentage of the whole video.
  updateStepText(video.currentTime); //
});

document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector("video");
  const progressBar = document.getElementById("progressBar");
  const progressFill = document.getElementById("progressFill");

  // Fill the timeline by percentage.
  video.addEventListener("timeupdate", function () {
    const percent = (video.currentTime / video.duration) * 100;
    progressFill.style.width = `${percent}%`;
  });

  // Click on the "Step 1-10" buttons to change the video time.
  progressBar.addEventListener("click", function (e) {
    const rect = progressBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    video.currentTime = percent * video.duration;
  });

  let isDragging = false;

  progressBar.addEventListener("mousedown", function (e) {
    isDragging = true;
    updateVideoTime(e);
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      updateVideoTime(e);
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });

  function updateVideoTime(e) {
    const rect = progressBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.min(Math.max(x / rect.width, 0), 1);
    progressFill.style.width = `${percent * 100}%`;
    video.currentTime = percent * video.duration;
  }
});

// Click on the "Step 1-10" buttons to change the video time.
function updateStepText(currentTime) {
  stepTexts.forEach((el) => (el.style.display = "none"));
  for (let i = stepTimes.length - 1; i >= 0; i--) {
    if (currentTime >= stepTimes[i].time) {
      const stepTitle = document.querySelector(
        `.step-text h3:nth-of-type(${i + 1})`
      );
      const stepContent = document.querySelector(
        `.step-text p:nth-of-type(${i + 1})`
      );
      if (stepTitle && stepContent) {
        stepTitle.style.display = "block";
        stepContent.style.display = "block";
      }
      break;
    }
  }
}

// Click on the "Step 1-10" buttons to change the video time.
stepTimes.forEach((step, index) => {
  const btn = document.getElementById(`step-${index + 1}-btn`);
  if (btn) {
    btn.addEventListener("click", () => {
      video.currentTime = step.time;
    });
  }
});

// After trying Javascript I feel CSS and HTML are super friendly haha. But I think the W3 school that you recommand helps alot! I reckon I am more familiar with CSS and HTML right now , but Javascript still feel challange.
