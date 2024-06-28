const video = document.querySelector('video');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const restartBtn = document.getElementById('restart');
const forwardBtn = document.getElementById('skipForward');
let timestamp = document.getElementById('timestamp');

video.addEventListener(`timeupdate`, updateTimestamp);
playBtn.addEventListener(`click`, playVideo);
pauseBtn.addEventListener(`click`, pauseVideo);
restartBtn.addEventListener(`click`, restartVideo);
forwardBtn.addEventListener(`click`, skipForward);

function playVideo() {
  video.play();
}

function pauseVideo() {
  video.pause();
}

function restartVideo() {
  video.currentTime = 0;
}

function skipForward() {
  video.currentTime = video.currentTime + 10;
}

function updateTimestamp() {
  timestamp.innerHTML = parseInt(video.currentTime);
}
