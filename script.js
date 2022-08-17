const blackKeys = document.querySelectorAll(".black .key:not(.blank)");
const whiteKeys = document.querySelectorAll(".white .key");

const numberToKeyMap = {
  black: [ "C_sharp", "Eb", "F_sharp", "G_sharp", "Bb", "C_sharp", "Eb", "F_sharp", "G_sharp", "Bb", ],
  white: [ "C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G", "A", "B", ]
}

function playKey(filename) {
  const audio = new Audio(`sounds/${filename}`);
  audio.play();
}

function init() {
  blackKeys.forEach((key, i) => {
    const filename = `${numberToKeyMap.black[i]}.mp3`
    key.addEventListener("click", () => playKey(filename))
  });

  whiteKeys.forEach((key, i) => {
    const filename = `${numberToKeyMap.white[i]}.mp3`
    key.addEventListener("click", () => playKey(filename))
  });
}

init();