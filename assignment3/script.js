const bgm = document.getElementById("bgm");
const drawBtn = document.getElementById("draw-btn");
const drum = document.getElementById("drum");
const handle = document.getElementById("handle");

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupName = document.getElementById("popup-name");
const popupLuck = document.getElementById("popup-luck");
const popupDesc = document.getElementById("popup-desc");
const closeBtn = document.getElementById("close-popup");

const characters = {
  deer: {
    name: "Deer",
    luck: "Good Luck",
    image: "img/deer_ball.png",
    sound: "audio/deer_sound.mp3",
    desc: `Overall: If you wait for the right moment, the flower will surely bloom. Be patient and walk with a calm heart.
    💼 Business: You are in the intersection of a decision, look one thing in different perspective do not blind pursuit . The moon does not chase the sun.
    ❤️ Love: Be more patient, it is not time for love focusing more on self improvement.
    💊 Health: Getting better! Remember rest is important.
    ✈️ Travel: Good. A quiet journey may lead you to a new start.`,
  },

  dog: {
    name: "Shiba",
    luck: "Great Luck",
    image: "img/dog_ball.png",
    sound: "audio/dog_sound.mp3",
    desc: `Overall: The road ahead is clear, though not yet straight. You are being asked to move forward with care, not fear and it is near to light.
    💼 Business: Gradual improvement. Remember to listen other’s advises.
    ❤️ Love: A stable relationship will start to have some improvement. It might begin in silence or in glance. Eyes locked hands locked do it together.  
    💊 Health: You are being called back to yourself. Focus on your sleep, breath, smallest needs. You don’t have to do everything alone.
    ✈️ Travel: Not an advantage, a cozy hangout with close friends will be your guiding star. `,
  },

  cat: {
    name: "Maneki Cat",
    luck: "Best Luck!",
    image: "img/cat_ball.png",
    sound: "audio/cat_sound.mp3",
    confetti: true,
    desc: `Overall: Your wish will come true just as you hope. God will assign an angel to help you be brave and go forward!
    💼 Business: Strong profits ahead. Stay true to your path.
    ❤️ Love: Love is blooming like a flower. Follow your own heart.
    💊 Health: A joyful spirit is your best medicine.
    ✈️ Travel: Stay in south will be the best option.`,
  },

  fox: {
    name: "Fox",
    luck: "Luck Coming!",
    image: "img/fox_ball.png",
    sound: "audio/fox sound.mp3",
    desc: `Overall: The situation is in the turning point. You might feel fragile for the future but do not be despair. The river knows its course, even when you cannot see. What feels stalled is only gathering force beneath the surface.
    💼 Business: Doors may seem closed—but they are not locked. Knock with humility, and return when the time is right.
    ❤️ Love: Misunderstandings are possible. Speak not only with words, but with presence. Gentle truths will guide you through.
    💊 Health: Getting better! Remember rest is important.
    ✈️ Travel: Delay may happen. Check the weather report and prevent high risk activity.`,
  },

  blackcat: {
    name: "Black Cat",
    luck: "Unlucky",
    image: "img/blackcat_ball.png",
    sound: "audio/blackcat_sound.mp3",
    desc: `Overall: Now is not the time to go forward. Step back. Observe. The universe is asking you to retreat before it can lead you.
    💼 Business: The ground is unsteady. Act with caution or not at all. This is a season of reassessment, not ambition.
    ❤️ Love: Be careful to sweet lure. Having a very strange relationship, you break each other and hug with tear.
    💊 Health: Seek help early, not later. Healing cannot grow in haste. What you ignore today may demand you tomorrow.
    ✈️ Travel: Even birds wait for the wind to shift before they fly.`,
  },
};

function showConfetti() {
  const confetti = document.createElement("div");
  confetti.style.position = "fixed";
  confetti.style.top = "20%";
  confetti.style.left = "50%";
  confetti.style.transform = "translateX(-50%)";
  confetti.style.fontSize = "40px";
  confetti.style.zIndex = 2000;
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 2000);
}

let rollingSound = null;
let charSound = null;

drawBtn.addEventListener("click", () => {
  // 停止背景音樂
  bgm.pause();
  bgm.currentTime = 0;

  // 撥旋轉音效
  rollingSound = new Audio("audio/start_sound.mp3");
  rollingSound.play();
  rollingSound.loop = true; // 旋轉中持續播放
  rollingSound.volume = 1.0;

  // 播動畫
  drum.style.animation = "rotate360 1s linear infinite";
  //handle.style.animation = "rotate360 1s linear infinite";

  setTimeout(() => {
    // 停止旋轉動畫與旋轉音效
    drum.style.animation = "none";
    handle.style.animation = "none";
    if (rollingSound) {
      rollingSound.pause();
      rollingSound.currentTime = 0;
    }

    // 抽出角色
    const keys = Object.keys(characters);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const character = characters[randomKey];

    // 播角色音效
    charSound = new Audio(character.sound);
    charSound.play();

    // 如果是 confetti 角色就噴彩帶
    if (character.confetti) showConfetti();

    // 顯示結果彈窗
    popupImg.src = character.image;
    popupName.innerText = character.name;
    popupLuck.innerText = character.luck;
    popupDesc.innerText = character.desc;
    popup.classList.remove("hidden");

    // 音效播完後，不做任何事（等使用者關閉彈窗）
  }, 2000);
});

// 關閉彈窗後再播背景音樂
closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");

  if (charSound) {
    charSound.pause();
    charSound.currentTime = 0;
  }

  bgm.play();
});
