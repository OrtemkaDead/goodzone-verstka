const container = document.getElementById("videos-group__content");
const videoCard = document.getElementById("video-card");

const videoCardMinWidth = 315

function handleResize(e) {
  container.style.gridTemplateColumns = `repeat(${Math.floor(container.clientWidth / videoCardMinWidth)}, 1fr)`
}
window.addEventListener('resize', handleResize)
window.addEventListener('load', handleResize)