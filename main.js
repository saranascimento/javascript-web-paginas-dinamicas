function playSound(audioElementId) {
  document.querySelector(audioElementId).play();
}

const keyList = document.querySelectorAll(".key");

/* loop while
let count = 0;

while (count < keyList.length) {
  const key = keyList[count];

  const instrument = key.classList[1];

  const audioId = `#sound_${instrument}`;

  key.onclick = function () {
    playSound(audioId);
  };

  count = count + 1;
}
*/

// loop for
for (let count = 0; count < keyList.length; count++) {
  const key = keyList[count];
  const instrument = key.classList[1];
  const audioId = `#sound_${instrument}`;

  key.onclick = function () {
    playSound(audioId);
  };
}
