let currentImage = 1;
const totalImages = 41;
const intervalTime = 1500;

function showNextImage() {
  const imgElement = document.getElementById("slideshow");
  currentImage = (currentImage % totalImages) + 1;
  imgElement.src = currentImage + ".png";
}

document.getElementById("start-button").addEventListener("click", function () {
  const startButton = this;

  const slideshowInterval = setInterval(showNextImage, intervalTime);

  const music = document.getElementById("background-music");
  music.play().catch((error) => {
    console.error("Error playing audio:", error);
  });

  startButton.style.display = "none";

  const totalDuration = totalImages * intervalTime;

  setTimeout(() => {
    clearInterval(slideshowInterval);
    startButton.style.display = "block";
    currentImage = 1;
    document.getElementById("slideshow").src = currentImage + ".png";
  }, totalDuration);
});
