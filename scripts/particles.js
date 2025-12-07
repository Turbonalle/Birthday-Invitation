function initParticles() {
    if (tsParticles === "undefined") {
        setTimeout(initParticles, 50);
        return;
    }

    tsParticles.load("particles", {
		fpsLimit: 60,
		particles: {
			number: { value: 60 },
			size: { value: 2 },
			color: { value: "#ffffff" },
			move: {
				enable: true,
				speed: 5,
				direction: "bottom-left",
				random: false,
				straight: false,
				outModes: { default: "out" }
			},
			opacity: { value: 0.2 },
			shape: { type: "circle" }
		},
		interactivity: {
			detect_on: "canvas",
			events: {
				onhover: { enable: true, mode: "grab" },
				onclick: { enable: true, mode: "push" }
			},
			modes: {
				grab: { distance: 120, line_linked: { opacity: 0.5 } },
				push: { particles_nb: 4 }
			}
		}
	});
}

initParticles();