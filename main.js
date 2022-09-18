function playSound(audioSelector) {
  const element = document.querySelector(audioSelector);

  if (element && element.localName === "audio") {
    element.play();
  } else {
    console.log("Elemento não encontrado ou seletor inválido");
  }
}

const keyList = document.querySelectorAll(".key");

for (let count = 0; count < keyList.length; count++) {
  const key = keyList[count];
  const instrument = key.classList[1];
  const audioId = `#sound_${instrument}`;

  key.onclick = function () {
    playSound(audioId);
  };

  key.onkeydown = function (event) {
    if (event.code === "Space" || event.code === "Enter") {
      key.classList.add("active");
    }
  };

  key.onkeyup = function (event) {
    if (event.code === "Space" || event.code === "Enter") {
      key.classList.remove("active");
    }
  };
}
