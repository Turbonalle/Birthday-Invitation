const audio = document.getElementById("bg-music");
const audioBtn = document.getElementById("audio-btn");
const audioIcon = document.getElementById("audio-icon");
let isPlaying = false;

function updateIcon() {
	audioIcon.src = audio.muted
		? "assets/volume-off-white.svg"
		: "assets/volume-on-white.svg";
}

audioBtn.addEventListener('click', () => {
	if (!audio) {
		console.log("No music found...");
		return;
	}

	if (!isPlaying) {
		audio.muted = false;
		audio.play().catch(err => console.log(err));
		isPlaying = true;
		updateIcon();
		return;
	}
	
	audio.muted = !audio.muted;

	if (!audio.muted) {
		audio.play().catch(err => console.log(err))
	}

	updateIcon();
});