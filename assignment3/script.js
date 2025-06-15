// Callout elements
const bgm = document.getElementById("bgm"); //Background music
const drawBtn = document.getElementById("draw-btn"); //Start button
const drum = document.getElementById("drum"); // The draw machine box
const handle = document.getElementById("handle"); // The machine handle layer
const popup = document.getElementById("popup"); //Result window
const popupImg = document.getElementById("popup-img"); // Result animal ball image
const popupName = document.getElementById("popup-name"); // Result animal name
const popupLuck = document.getElementById("popup-luck"); // Result luck level
const popupDesc = document.getElementById("popup-desc"); // Result text
const closeBtn = document.getElementById("close-popup"); // Close result window button

// Animal balls and Hint text
// I decide to give user a bit guide text rather than just the result of luck level. I was inspire by tarot and omikuji. Apart from the overall discripe I also write some hint for people asking guide in different occasion such as: work or love etc ...

// I know it is better to write these text in Html and I tried to write in there, but I encounter so problem to let them display in the result window. (They just keep display in the Home page, so I put them here and it work, but I don't know why??)

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

// Play sound of machine rolling
let rollingSound = null;
// Play sound after the result comeout
// I pick different sound based on the luck level. All the sound I choose is play by tradition Japanese instrument.
let charSound = null;

drawBtn.addEventListener("click", () => {
  // Stop playing background music after user click start button
  bgm.pause();
  bgm.currentTime = 0;

  // Play rolling machine sound
  rollingSound = new Audio("audio/start_sound.mp3");
  rollingSound.play();
  rollingSound.loop = true;
  rollingSound.volume = 1.0;

  // Play machine rolling animation
  drum.style.animation = "rotate360 1s linear infinite";
  handle.style.animation = "rotate360 1s linear infinite";

  setTimeout(() => {
    // Stop playing rolling sound after get result
    drum.style.animation = "none";
    handle.style.animation = "none";
    if (rollingSound) {
      rollingSound.pause();
      rollingSound.currentTime = 0;
    }

    // Random chance to pick out animals
    const keys = Object.keys(characters);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const character = characters[randomKey];

    // Play sound match with each animal character
    charSound = new Audio(character.sound);
    charSound.play();

    if (character.confetti) showConfetti();

    // Result window
    popupImg.src = character.image;
    popupName.innerText = character.name;
    popupLuck.innerText = character.luck;
    popupDesc.innerText = character.desc;
    popup.classList.remove("hidden");
  }, 2000);
});

// Play background music after user click on close button
closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");

  if (charSound) {
    charSound.pause();
    charSound.currentTime = 0;
  }

  bgm.play();
});
