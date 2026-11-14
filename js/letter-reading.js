/* =================================
   CHRISTMAS LETTER - READING MAGIC
================================= */

document.addEventListener("DOMContentLoaded", () => {

    const starContainer = document.getElementById("letterStars");
    const snowContainer = document.getElementById("letterSnow");

    const letterPage = document.getElementById("letterPage");
    const continueButton = document.getElementById("continueChristmas");

    function randomValue(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Create twinkling stars
    function createStars() {

        if (!starContainer) return;

        const symbols = ["✦", "✧", "⋆", "·"];

        for (let i = 0; i < 85; i++) {

            const star = document.createElement("span");

            star.className = "letter-star";
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

            snowflake.className = "letter-snowflake";
            snowflake.textContent = "❄";

            snowflake.style.left = randomValue(0, 100) + "%";
            snowflake.style.fontSize = randomValue(8, 17) + "px";
            snowflake.style.animationDuration = randomValue(7, 16) + "s";
            snowflake.style.animationDelay = randomValue(0, 12) + "s";

            snowContainer.appendChild(snowflake);
        }
    }

    // Continue to the next Christmas surprise
    function setupContinueButton() {

        if (!continueButton || !letterPage) return;

        continueButton.addEventListener("click", () => {

            continueButton.disabled = true;
            continueButton.textContent = "FOLLOWING THE MAGIC...";

            letterPage.style.transition = "opacity 1s ease";
            letterPage.style.opacity = "0";

            setTimeout(() => {

                window.location.href = "christmas-surprise.html";

            }, 1100);

        });
    }

    createStars();
    createSnow();
    setupContinueButton();

});
