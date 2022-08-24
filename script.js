let hueRotate = 300;
let mouseIsDown = false;
const handFadeOffset = 32;

const root = document.querySelector(":root");
const hand = document.querySelector(".hand");

const { innerWidth: width, innerHeight: height } = window;

const pianoKeys = {
  black: document.querySelectorAll(".black .key:not(.blank)"),
  white: document.querySelectorAll(".white .key"),
}

const numberToKeyMap = {
  black: [ "C_sharp", "Eb", "F_sharp", "G_sharp", "Bb", "C_sharp", "Eb", "F_sharp", "G_sharp", "Bb", ],
  white: [ "C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G", "A", "B", ]
}

const sounds = {
  black: {},
  white: {},
};

function playKey(color, i) {
  const sound = sounds[color][i];
  sound.currentTime = 0;
  sound.play();
}

function addListeners() {
  Object.keys(pianoKeys).forEach((color) => {
    pianoKeys[color].forEach((key, i) => {
      sounds[color][`${i}`] = new Audio(`sounds/${numberToKeyMap[color][i]}.mp3`);
        
      key.addEventListener("mousedown", () => {
        mouseIsDown = true;
        playKey(color, i);
      });

      key.addEventListener("mouseenter", () => {
        if (!mouseIsDown) return;
        playKey(color, i);
      });
      
      key.addEventListener("mouseup", () => {
        mouseIsDown = false;
      });

      window.addEventListener("mousemove", (event) => {
        const { clientX: x, clientY: y } = event;

        const isOutsideXBoundary = x < handFadeOffset || x > (width - handFadeOffset);
        const isOutsideYBoundary = y < handFadeOffset || y > (height - handFadeOffset);
        const shouldHideHand = isOutsideXBoundary || isOutsideYBoundary;
        
        shouldHideHand
          ? hand.classList.add("hide")
          : hand.classList.remove("hide");

        root.style.setProperty("--hand-x", `${x}px`);
        root.style.setProperty("--hand-y", `${y}px`);
      })
    })
  });
}

(() => addListeners())();