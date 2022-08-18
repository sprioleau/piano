const piano = document.querySelector(".piano");
const blackKeys = document.querySelectorAll(".black .key:not(.blank)");
const whiteKeys = document.querySelectorAll(".white .key");

let hueRotate = 300;

const pianoKeys = {
  black: blackKeys,
  white: whiteKeys
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

      ["touchstart", "click"].forEach((event) => {
        key.addEventListener(event, () => playKey(color, i));
      })
    })
  });
}



(() => addListeners())()