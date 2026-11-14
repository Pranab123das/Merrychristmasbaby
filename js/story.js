/* =========================================
   KUCHUU'S ENCHANTED CHRISTMAS
   ENCHANTED WORLD JAVASCRIPT
========================================= */


/* =========================================
   1. ELEMENT REFERENCES
========================================= */

const worldStars = document.getElementById("worldStars");

const worldSnow = document.getElementById("worldSnow");

const discoverButton =
    document.getElementById("discoverChristmas");


/* =========================================
   2. RANDOM NUMBER
========================================= */

function randomValue(min, max) {

    return Math.random() * (max - min) + min;

}


/* =========================================
   3. CREATE WORLD STARS
========================================= */

function createWorldStars() {

    if (!worldStars) return;

    const totalStars = 75;

    const symbols = ["✦", "✧", "⋆", "·"];

    for (let i = 0; i < totalStars; i++) {

        const star = document.createElement("span");

        star.className = "world-star";

        star.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        star.style.left = randomValue(0, 100) + "%";

        star.style.top = randomValue(0, 100) + "%";

        star.style.fontSize = randomValue(5, 13) + "px";

        star.style.animationDuration =
            randomValue(2, 5) + "s";

        star.style.animationDelay =
            randomValue(0, 5) + "s";

        worldStars.appendChild(star);

    }

}


/* =========================================
   4. CREATE WORLD SNOW
========================================= */

function createWorldSnow() {

    if (!worldSnow) return;

    const totalSnowflakes = 55;

    for (let i = 0; i < totalSnowflakes; i++) {

        const snowflake = document.createElement("span");

        snowflake.className = "world-snowflake";

        snowflake.textContent =
            Math.random() > 0.5 ? "❄" : "·";

        snowflake.style.left =
            randomValue(0, 100) + "%";

        snowflake.style.fontSize =
            randomValue(5, 12) + "px";

        snowflake.style.opacity =
            randomValue(0.25, 0.8);

        snowflake.style.animationDuration =
            randomValue(9, 19) + "s";

        snowflake.style.animationDelay =
            randomValue(-19, 0) + "s";

        worldSnow.appendChild(snowflake);

    }

}


/* =========================================
   5. DISCOVER BUTTON
========================================= */

function discoverMagic() {

    if (!discoverButton) return;

    discoverButton.disabled = true;

    discoverButton.innerHTML =
        '<span>THE MAGIC IS CALLING...</span><span>✧</span>';

    discoverButton.style.opacity = "0.8";

    /*
       The next page will be created
       in our upcoming development step.
    */

    setTimeout(() => {

        window.location.href = "christmas-story.html";

    }, 900);

}


/* =========================================
   6. INITIALISE PAGE
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    createWorldStars();

    createWorldSnow();

    if (discoverButton) {

        discoverButton.addEventListener(
            "click",
            discoverMagic
        );

    }

});
