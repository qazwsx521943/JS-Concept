const player = document.querySelector(".player");
const playBtn = player.querySelector(".toggle");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const skipBtns = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
function playVideo(e) {
    console.log("play video!!!");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateBtn(e) {
    const icon = this.paused ? "►" : "▷";
    playBtn.textContent = icon;
}
video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);
video.addEventListener("click", playVideo);
playBtn.addEventListener("click", playVideo);
