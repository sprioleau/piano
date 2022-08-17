const blackKeys = document.querySelectorAll(".black .key:not(.blank)");
const whiteKeys = document.querySelectorAll(".white .key");

const pianoKeys = {
  black: blackKeys,
  white: whiteKeys
}

const numberToKeyMap = {
  black: [ "C_sharp", "Eb", "F_sharp", "G_sharp", "Bb", "C_sharp", "Eb", "F_sharp", "G_sharp", "Bb", ],
  white: [ "C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G", "A", "B", ]
}

function playKey(filename) {
  const audio = new Audio(`sounds/${filename}`);
  audio.play();
}

function addListeners() {
  Object.keys(pianoKeys).forEach((color) => {
    pianoKeys[color].forEach((key, i) => {
      const filename = `${numberToKeyMap[color][i]}.mp3`
      key.addEventListener("click", () => playKey(filename))
    })
  });
}

(function init() {
  addListeners();
})()