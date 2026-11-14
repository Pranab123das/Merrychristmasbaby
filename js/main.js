/* =========================================
   KUCHUU'S ENCHANTED CHRISTMAS
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   1. ELEMENT REFERENCES
========================================= */

const starContainer = document.getElementById("starContainer");

const snowContainer = document.getElementById("snowContainer");

const beginButton = document.getElementById("beginJourney");


/* =========================================
   2. RANDOM NUMBER GENERATOR
========================================= */

function randomNumber(min, max) {

    return Math.random() * (max - min) + min;

}


/* =========================================
   3. CREATE MAGICAL STARS
========================================= */

function createStars() {

    if (!starContainer) return;

    const totalStars = 65;

    const starSymbols = ["✦", "✧", "·", "⋆"];

    for (let i = 0; i < totalStars; i++) {

        const star = document.createElement("span");

        star.classList.add("star");

        star.textContent =
            starSymbols[
                Math.floor(Math.random() * starSymbols.length)
            ];

        star.style.left = randomNumber(2, 98) + "%";

        star.style.top = randomNumber(1, 98) + "%";

        star.style.fontSize = randomNumber(5, 13) + "px";

        star.style.animationDuration =
            randomNumber(2, 5) + "s";

        star.style.animationDelay =
            randomNumber(0, 5) + "s";

        starContainer.appendChild(star);

    }

}


/* =========================================
   4. CREATE FALLING SNOW
========================================= */

function createSnowfall() {

    if (!snowContainer) return;

    const totalSnowflakes = 45;

    for (let i = 0; i < totalSnowflakes; i++) {

        const snowflake = document.createElement("span");

        snowflake.classList.add("snowflake");

        snowflake.textContent =
            Math.random() > 0.5 ? "❄" : "·";

        snowflake.style.left =
            randomNumber(0, 100) + "%";

        snowflake.style.fontSize =
            randomNumber(5, 13) + "px";

        snowflake.style.opacity =
            randomNumber(0.25, 0.85);

        snowflake.style.animationDuration =
            randomNumber(8, 18) + "s";

        snowflake.style.animationDelay =
            randomNumber(-18, 0) + "s";

        snowContainer.appendChild(snowflake);

    }

}


/* =========================================
   5. ENTRANCE BUTTON
========================================= */

function enterChristmasWorld() {

    if (!beginButton) return;

    beginButton.disabled = true;

    beginButton.innerHTML =
        '<span>FOLLOW THE STARS...</span><span class="button-star">✧</span>';

    beginButton.classList.add("entering");

    /*
       Temporary navigation:
       We will create the next page in a later step.
    */

    setTimeout(() => {

        window.location.href = "christmas-world.html";

    }, 900);

}


/* =========================================
   6. INITIALISE THE ENTRANCE
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    createStars();

    createSnowfall();

    if (beginButton) {

        beginButton.addEventListener(
            "click",
            enterChristmasWorld
        );

    }

});
