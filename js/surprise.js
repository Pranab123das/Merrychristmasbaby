
document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       CHRISTMAS BACKGROUND
    ========================= */

    const starContainer = document.querySelector(".stars");
    const snowContainer = document.querySelector(".snow-container");

    if (starContainer) {
        for (let i = 0; i < 85; i++) {
            const star = document.createElement("span");

            star.className = "star";
            star.style.left = Math.random() * 100 + "%";
            star.style.top = Math.random() * 100 + "%";
            star.style.animationDelay = Math.random() * 4 + "s";

            starContainer.appendChild(star);
        }
    }

    if (snowContainer) {
        for (let i = 0; i < 55; i++) {
            const snow = document.createElement("span");

            snow.className = "snowflake";
            snow.textContent = "❄";
            snow.style.left = Math.random() * 100 + "%";
            snow.style.animationDuration =
                (5 + Math.random() * 8) + "s";
            snow.style.animationDelay =
                Math.random() * 5 + "s";

            snowContainer.appendChild(snow);
        }
    }


    /* =========================
       GIFT MESSAGES
    ========================= */

    const gifts = {
        giftOne: {
            title: "A LITTLE MEMORY ❤️",
            message: "Some of my favourite moments are the little ones with you. The silly conversations, the random smiles, and all those tiny moments that somehow became so special to me. I hope we keep making countless more."
        },

        giftTwo: {
            title: "A LITTLE SURPRISE 🎀",
            message: "Your surprise comes with unlimited virtual hugs, forehead kisses, cuddles, and muwahhhhhssshshshs! Whenever you need a little extra love, your clingy Puchu is always ready."
        },

        giftThree: {
            title: "A LITTLE PROMISE ✨",
            message: "I promise to keep choosing kindness, effort, and little ways to make you smile. I want to celebrate your happiest days and stand beside you through the ordinary ones too."
        }
    };


    /* =========================
       GIFT ROOM ELEMENTS
    ========================= */

    const giftButtons = [
        document.getElementById("giftOne"),
        document.getElementById("giftTwo"),
        document.getElementById("giftThree")
    ];

    const giftReveal = document.getElementById("giftReveal");
    const revealTitle = document.getElementById("revealTitle");
    const revealMessage = document.getElementById("revealMessage");
    const closeReveal = document.getElementById("closeReveal");

    const openedGifts = new Set();

    const nextChapter = document.getElementById("nextChapter");
    const continueJourney = document.getElementById("continueJourney");


    /* =========================
       OPEN A GIFT
    ========================= */

    function openGift(giftId) {

        const gift = gifts[giftId];

        if (!gift || !giftReveal || !revealTitle || !revealMessage) {
            return;
        }

        revealTitle.textContent = gift.title;
        revealMessage.textContent = gift.message;

        // Show the gift reveal using its original hidden attribute.
        giftReveal.hidden = false;

        // Remember each different gift opened.
        openedGifts.add(giftId);


        /* =========================
           UNLOCK HIDDEN CHAPTER
        ========================= */

        if (
            openedGifts.size === 3 &&
            nextChapter &&
            nextChapter.hidden
        ) {

            nextChapter.hidden = false;

            setTimeout(() => {
                nextChapter.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }, 500);

        }

    }


    /* =========================
       GIFT BUTTON EVENTS
    ========================= */

    giftButtons.forEach(button => {

        if (!button) return;

        button.addEventListener("click", () => {
            openGift(button.id);
        });

    });


    /* =========================
       CLOSE GIFT REVEAL
    ========================= */

    if (closeReveal && giftReveal) {

        closeReveal.addEventListener("click", () => {
            giftReveal.hidden = true;
        });

    }


    /* =========================
       OPEN NEXT CHRISTMAS DOOR
    ========================= */

    if (continueJourney) {

        continueJourney.addEventListener("click", () => {

            continueJourney.disabled = true;
            continueJourney.textContent = "OPENING THE NEXT DOOR...";

            setTimeout(() => {
                window.location.href = "./christmas-wish.html";
            }, 700);

        });

    }

});
