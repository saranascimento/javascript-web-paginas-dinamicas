function playPomSound() {
  document.querySelector("#sound_key_pom").play();
}

const keyList = document.querySelectorAll(".key");

keyList[0].onclick = playPomSound;