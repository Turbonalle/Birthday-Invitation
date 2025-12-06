function setTime() {
	const countDownTime = new Date("Dec 20, 2025 13:00:00").getTime();
	const now = new Date().getTime();
	const gap = countDownTime - now;

	if (gap < 0) {
		document.getElementById("days").innerText = "00";
		document.getElementById("hours").innerText = "00";
		document.getElementById("minutes").innerText = "00";
		document.getElementById("seconds").innerText = "00";
		return;
	}

	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	const textDay = Math.floor(gap / day);
	const textHour = Math.floor((gap % day) / hour);
	const textMinute = Math.floor((gap % hour) / minute);
	const textSecond = Math.floor((gap % minute) / second);

	document.getElementById("days").innerText = textDay;
	document.getElementById("hours").innerText = textHour;
	document.getElementById("minutes").innerText = textMinute;
	document.getElementById("seconds").innerText = textSecond;

	if (textDay <= 0) {
		document.querySelectorAll('.value').forEach(e => {
			e.style.color = 'var(--highlight-color)';
		})
	}
}

setInterval(function() {
	setTime();
}, 1000);

setTime();