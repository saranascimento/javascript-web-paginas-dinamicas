function validateAudioElement(audioSelector) {
  const audioElement = document.querySelector(audioSelector);

  if (!audioElement || audioElement.localName !== "audio") {
    console.log("Elemento não encontrado ou seletor inválido");
    return;
  }

  playSound(audioElement);
}

const keyList = document.querySelectorAll(".key");

for (let count = 0; count < keyList.length; count++) {
  const key = keyList[count];
  const instrument = key.classList[1];
  const audioId = `#sound_${instrument}`;

  key.onclick = function () {
    validateAudioElement(audioId);
  };

  addActiveClassByOnkeydown(key);
  removeActiveClassByOnkeyup(key);
}

function playSound(audioElement) {
  audioElement.play();
}

function addActiveClassByOnkeydown(key) {
  key.onkeydown = function (event) {
    if (event.code === "Space" || event.code === "Enter") {
      key.classList.add("active");
    }
  };
}

function removeActiveClassByOnkeyup(key) {
  key.onkeyup = function (event) {
    if (event.code === "Space" || event.code === "Enter") {
      key.classList.remove("active");
    }
  };
}
