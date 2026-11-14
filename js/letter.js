
/* =================================
   CHRISTMAS STORY - LETTER MAGIC
================================= */

document.addEventListener("DOMContentLoaded", () => {

    const starContainer = document.getElementById("storyStars");
    const snowContainer = document.getElementById("storySnow");
    const openLetterButton = document.getElementById("openLetter");

    const envelope = document.querySelector(".envelope");
    const envelopeFlap = document.querySelector(".envelope-flap");
    const envelopePaper = document.querySelector(".envelope-paper");

    // Random number generator
    function randomValue(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Create twinkling stars
    function createStars() {

        if (!starContainer) return;

        const symbols = ["✦", "✧", "⋆", "·"];

        for (let i = 0; i < 75; i++) {

            const star = document.createElement("span");

            star.className = "story-star";
            star.textContent =
                symbols[Math.floor(Math.random() * symbols.length)];

            star.style.left = randomValue(0, 100) + "%";
            star.style.top = randomValue(0, 100) + "%";
            star.style.fontSize = randomValue(6, 15) + "px";
            star.style.animationDelay = randomValue(0, 4) + "s";
            star.style.animationDuration = randomValue(2, 5) + "s";

            starContainer.appendChild(star);
        }
    }

    // Create falling snow
    function createSnow() {

        if (!snowContainer) return;

        for (let i = 0; i < 55; i++) {

            const snowflake = document.createElement("span");

            snowflake.className = "story-snowflake";
            snowflake.textContent = "❄";

            snowflake.style.left = randomValue(0, 100) + "%";
            snowflake.style.fontSize = randomValue(8, 17) + "px";
            snowflake.style.animationDuration = randomValue(7, 16) + "s";
            snowflake.style.animationDelay = randomValue(0, 12) + "s";

            snowContainer.appendChild(snowflake);
        }
    }

    // Open the magical envelope
    function setupLetter() {

        if (!openLetterButton || !envelope || !envelopeFlap || !envelopePaper) {
            return;
        }

        let isOpened = false;

        openLetterButton.addEventListener("click", () => {

            if (isOpened) return;

            isOpened = true;

            envelopeFlap.style.transition =
                "transform 1s ease, z-index 0s 0.5s";

            envelopeFlap.style.transform = "rotateX(180deg)";
            envelopeFlap.style.zIndex = "0";

            envelopePaper.style.transition =
                "transform 1.2s ease 0.7s";

            envelopePaper.style.transform =
                "translateY(-65px)";

            envelope.style.animation = "none";

            openLetterButton.textContent = "YOUR LETTER IS WAITING...";

            openLetterButton.disabled = true;
        });
    }

    // Initialize everything
    createStars();
    createSnow();
    setupLetter();

});
