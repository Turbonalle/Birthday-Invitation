function lightningFlash() {
    const flash = document.getElementById("lightning-flash");

    // Random chance of lightning */
    if (Math.random() < 0.07) { 
        const intensity = Math.random() * 0.6 + 0.4; // 0.4–1.0
        flash.style.opacity = intensity;

        // Fade out quickly
        setTimeout(() => {
            flash.style.opacity = 0;
        }, 80 + Math.random() * 150);
    }
}

function ambientFlicker() {
    const body = document.getElementById("fullpage-container");

    // Smooth subtle light variation
    const brightness = 0.95 + Math.random() * 0.1; // 0.95 to 1.05
    body.style.filter = `brightness(${brightness})`;
}

setInterval(() => {
    lightningFlash();
    ambientFlicker();
}, 200); // Run 5 times a second