const audio = document.getElementById("bg-music");
const muteBtn = document.getElementById("mute-btn");
const muteIcon = document.getElementById("mute-icon");

window.addEventListener('click', () => {
	if (!audio) {
		console.log("No music found...");
		return;
	}
	
	audio.play().catch(err => console.log(err));
}, { once: true });

muteBtn.addEventListener("click", () => {
	audio.muted = !audio.muted;
	muteIcon.src = audio.muted
		? "../assets/volume-off-white.svg"
		: "../assets/volume-on-white.svg";
});