document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.querySelector("#start-btn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      window.location.href = "http://127.0.0.1:3000/assignment%202/video.html";
    });
  }
});
const video = document.getElementById("craft-video");
const playPauseBtn = document.getElementById("play-pause-btn");
const playPauseImg = document.getElementById("play-pause-img");
const progressBarFill = document.getElementById("progress-bar-fill");
const stepTexts = document.querySelectorAll(".step-text h3, .step-text p");

// STEP 對應的時間（秒）
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

// 播放 / 暫停功能
function togglePlayPause() {
  if (video.paused) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

// 音量控制
function changeVolume(amount) {
  video.volume = Math.min(1, Math.max(0, video.volume + amount));
}

// 全螢幕
function toggleFullScreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  }
}

// 更新播放進度條
video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBarFill.style.width = percent + "%";
  updateStepText(video.currentTime);
});
document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector("video");
  const progressBar = document.getElementById("progressBar");
  const progressFill = document.getElementById("progressFill");

  // 更新進度條填充
  video.addEventListener("timeupdate", function () {
    const percent = (video.currentTime / video.duration) * 100;
    progressFill.style.width = `${percent}%`;
  });

  // 點擊進度條調整影片位置
  progressBar.addEventListener("click", function (e) {
    const rect = progressBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    video.currentTime = percent * video.duration;
  });

  // 拖動進度條
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

// 根據時間切換步驟顯示
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

// 每個 Step 按鈕導航時間
stepTimes.forEach((step, index) => {
  const btn = document.getElementById(`step-${index + 1}-btn`);
  if (btn) {
    btn.addEventListener("click", () => {
      video.currentTime = step.time;
    });
  }
});
