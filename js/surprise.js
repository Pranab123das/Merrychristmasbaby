/* =================================
   CHRISTMAS GIFT ROOM - MAGIC
================================= */

document.addEventListener("DOMContentLoaded", () => {

    const starContainer = document.getElementById("surpriseStars");
    const snowContainer = document.getElementById("surpriseSnow");

    const giftReveal = document.getElementById("giftReveal");
    const revealTitle = document.getElementById("revealTitle");
    const revealMessage = document.getElementById("revealMessage");

    const closeReveal = document.getElementById("closeReveal");

    const giftButtons = [
        document.getElementById("giftOne"),
        document.getElementById("giftTwo"),
        document.getElementById("giftThree")
    ];

    function randomValue(min, max) {
        return Math.random() * (max - min) + min;
    }

    // =================================
    // CREATE TWINKLING STARS
    // =================================

    function createStars() {

        if (!starContainer) return;

        const symbols = ["✦", "✧", "⋆", "·"];

        for (let i = 0; i < 85; i++) {

            const star = document.createElement("span");

            star.className = "surprise-star";

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

    // =================================
    // CREATE FALLING SNOW
    // =================================

    function createSnow() {

        if (!snowContainer) return;

        for (let i = 0; i < 55; i++) {

            const snowflake = document.createElement("span");

            snowflake.className = "surprise-snowflake";
            snowflake.textContent = "❄";

            snowflake.style.left = randomValue(0, 100) + "%";
            snowflake.style.fontSize = randomValue(8, 17) + "px";
            snowflake.style.animationDuration = randomValue(7, 16) + "s";
            snowflake.style.animationDelay = randomValue(0, 12) + "s";

            snowContainer.appendChild(snowflake);
        }
    }

    // =================================
    // GIFT CONTENT
    // =================================

    const gifts = {

        giftOne: {
            title: "A Little Memory 💗",
            message:
                "If I could wrap one thing and place it under your Christmas tree, it would be every little moment we've shared.\n\nThe silly conversations, the random smiles, the tiny arguments, the laughter and all those ordinary moments that somehow became special.\n\nI don't know which memory is your favourite, but I hope we keep making many more together. ♡"
        },

        giftTwo: {
            title: "A Little Surprise 🎀",
            message:
                "SURPRIIIIISEEEE! 🫣\n\nConsider this your official Christmas permission slip to receive unlimited virtual hugs, forehead kisses, cuddles and muwahhhhhssshshshs!\n\nNo expiry date. No limits. No returns accepted.\n\nSigned,\nYour very clingy Puchu. 💋"
        },

        giftThree: {
            title: "A Little Promise ⭐",
            message:
                "I cannot promise that every day will be perfect.\n\nBut I can promise to keep choosing kindness, to keep making little efforts, to celebrate your happiness and to stand beside you through the ordinary days too.\n\nI want us to keep growing, laughing and making beautiful memories.\n\nOne little day at a time. ❤️"
        }

    };

    // =================================
    // OPEN A GIFT
    // =================================

    function openGift(giftId) {

        const gift = gifts[giftId];

        if (!gift || !giftReveal) return;

        revealTitle.textContent = gift.title;
        revealMessage.textContent = gift.message;

        giftReveal.hidden = false;

        giftReveal.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    }

    // =================================
    // CLOSE THE GIFT REVEAL
    // =================================

    function setupCloseButton() {

        if (!closeReveal || !giftReveal) return;

        closeReveal.addEventListener("click", () => {

            giftReveal.hidden = true;

        });
    }

    // =================================
    // CONNECT ALL THREE GIFTS
    // =================================

    function setupGiftButtons() {

        giftButtons.forEach((button) => {

            if (!button) return;

            button.addEventListener("click", () => {

                openGift(button.id);

            });

        });
    }

    // =================================
    // INITIALIZE
    // =================================

    createStars();
    createSnow();

    setupGiftButtons();
    setupCloseButton();

});
