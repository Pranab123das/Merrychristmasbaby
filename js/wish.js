document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MAGICAL CHRISTMAS STARS
    ========================= */

    const starContainer = document.querySelector(".stars");

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


    /* =========================
       GENTLE CHRISTMAS SNOWFALL
    ========================= */

    const snowContainer = document.querySelector(".snow-container");

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
       THE FINAL CHRISTMAS SURPRISE
    ========================= */

    const wishButton = document.getElementById("wishButton");
    const wishMessage = document.getElementById("wishMessage");

    if (wishButton && wishMessage) {

        wishButton.addEventListener("click", () => {

            wishMessage.hidden = false;

            wishButton.disabled = true;
            wishButton.textContent = "A LITTLE HUG, JUST FOR YOU ❤️";

            wishButton.style.opacity = "0.75";
            wishButton.style.cursor = "default";

            setTimeout(() => {

                wishMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 150);

        });

    }

});
