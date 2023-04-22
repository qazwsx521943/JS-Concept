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

function skip(e) {
    video.currentTime += parseInt(this.dataset.skip);
    // console.log(video.currentTime);
    // console.log(this.dataset);
}

function progressShift(e) {
    console.log(video.duration);
    // video.currentTime = progressBar.style.flexBasis * video.duration;
    progressBar.style.flexBasis = `${(this.currentTime / this.offsetWidth) * 100}%`;
    console.log(progressBar.style);
    // video.currentTime =
}

function range(e) {
    video[this.name] = this.value;
    // console.log(this.value);
    // console.log(this.name);
}
function skipTo(e) {
    console.log(e);
    const percentage = `${(e.offsetX / 640) * 100}%`;
    progressBar.style.flexBasis = percentage;
    video.currentTime = (e.offsetX / 640) * video.duration;
}
let mousedown = false;
progress.addEventListener("click", skipTo);
progress.addEventListener("mousemove", (e) => mousedown && skipTo(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mousedown", () => (mousedown = false));
video.addEventListener("timeupdate", progressShift);
ranges.forEach((r) => r.addEventListener("change", range));
skipBtns.forEach((sb) => sb.addEventListener("click", skip));
video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);
video.addEventListener("click", playVideo);
playBtn.addEventListener("click", playVideo);
