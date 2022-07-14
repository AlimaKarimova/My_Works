document.querySelector("#play").onclick = play;
document.querySelector("#pause").onclick = pause;
document.querySelector("#stop").onclick = stop;
document.querySelector("#speed-up").onclick = fast;
document.querySelector("#speed-down").onclick = slow;
document.querySelector("#speed-normal").onclick = normal;
document.querySelector("#volume").oninput = volume;

let controlsContainer = document.querySelector("#controls-container");
let video = document.querySelector("#video-player");
let progress = document.querySelector("#progress");
let volumePanel=document.querySelector('#volume-panel')
let playSpeed = 1;

video.ontimeupdate = progressUpdate;
progress.onclick = videoRewind;

function play() {
   video.play();
}
function pause() {
   video.pause();
}
function stop() {
   video.pause();
   video.currentTime = 0;
}
function fast() {
   playSpeed += 0.25;
   video.playbackRate = playSpeed;
}
function slow() {
   playSpeed -= 0.25;
   video.playbackRate = playSpeed;
}
function normal() {
   video.playbackRate = 1;
}
function volume() {
   let v = this.value;
   video.volume = v / 100; //in percent
}
function progressUpdate() {
   let c = video.currentTime;
   let d = video.duration;
   progress.value = (100 * c) / d;
}
function videoRewind(event) {
   let w = this.offsetWidth;
   let o = event.offsetX;
   this.value = (100 * o) / w;
   video.pause();
   video.currentTime = video.duration * (o / w);
   video.play();
}
