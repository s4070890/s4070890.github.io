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
    name: "Deer ball",
    luck: "Good Luck",
    image: "img/deer_ball.png",
    sound: "audio/deer.mp3",
    desc: `Overall: If you wait for the right moment...`,
  },
  dog: {
    name: "Dog ball",
    luck: "Great Luck",
    image: "img/dog_ball.png",
    sound: "audio/dog.mp3",
    desc: `Overall: The road ahead is clear...`,
  },
  cat: {
    name: "Cat ball",
    luck: "Best Luck!",
    image: "img/cat_ball.png",
    sound: "audio/cat.mp3",
    confetti: true,
    desc: `Overall: Your wish will come true...`,
  },
  fox: {
    name: "Fox ball",
    luck: "Luck Coming!",
    image: "img/fox_ball.png",
    sound: "audio/fox.mp3",
    desc: `Overall: The situation is in the turning point...`,
  },
  blackcat: {
    name: "Black cat ball",
    luck: "Unlucky",
    image: "img/blackcat_ball.png",
    sound: "audio/blackcat.mp3",
    desc: `Overall: Now is not the time to go forward...`,
  },
};

function showConfetti() {
  const confetti = document.createElement("div");
  confetti.innerText = "🎉🎉🎉";
  confetti.style.position = "fixed";
  confetti.style.top = "20%";
  confetti.style.left = "50%";
  confetti.style.transform = "translateX(-50%)";
  confetti.style.fontSize = "40px";
  confetti.style.zIndex = 2000;
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 2000);
}

drawBtn.addEventListener("click", () => {
  bgm.pause();

  const rollingSound = new Audio("audio/machine_rolling.mp3");
  rollingSound.play();

  drum.style.animation = "rotate360 1s linear infinite";
  //handle.style.animation = "rotate360 1s linear infinite";

  setTimeout(() => {
    drum.style.animation = "none";
    handle.style.animation = "none";

    const keys = Object.keys(characters);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const character = characters[randomKey];

    const charSound = new Audio(character.sound);
    charSound.play();

    if (character.confetti) showConfetti();

    popupImg.src = character.image;
    popupName.innerText = character.name;
    popupLuck.innerText = character.luck;
    popupDesc.innerText = character.desc;
    popup.classList.remove("hidden");

    charSound.onended = () => {
      bgm.play();
    };
  }, 2000);
});

closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});
