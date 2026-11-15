
/* =================================
   MERRY CHRISTMAS BABY - MUSIC
================================= */

const music = new Audio("./assets/music/angelika728-merry-xmas-270801.mp3");

music.loop = true;
music.preload = "auto";

const musicKey = "christmasMusicStarted";
const timeKey = "christmasMusicTime";

let musicButton;

// Create the floating music control
function createMusicButton() {
    musicButton = document.createElement("button");

    musicButton.id = "christmasMusicButton";
    musicButton.type = "button";
    musicButton.textContent = "♫ Music";

    Object.assign(musicButton.style, {
        position: "fixed",
        bottom: "18px",
        right: "16px",
        zIndex: "9999",
        padding: "11px 17px",
        border: "1px solid rgba(255,255,255,0.5)",
        borderRadius: "30px",
        background: "rgba(20, 30, 65, 0.88)",
        color: "#fff",
        fontSize: "14px",
        cursor: "pointer",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
    });

    musicButton.addEventListener("click", toggleMusic);

    document.body.appendChild(musicButton);
}

// Update music button
function updateMusicButton() {
    if (!musicButton) return;

    musicButton.textContent = music.paused
        ? "♫ Play music"
        : "♫ Pause music";
}

// Start music
function startMusic() {
    sessionStorage.setItem(musicKey, "yes");

    const savedTime = Number(sessionStorage.getItem(timeKey) || 0);

    if (Number.isFinite(savedTime) && savedTime > 0) {
        music.addEventListener("loadedmetadata", function restorePosition() {
            music.currentTime = savedTime;
        }, { once: true });
    }

    music.play()
        .then(updateMusicButton)
        .catch(updateMusicButton);
}

// Pause or resume
function toggleMusic() {
    if (music.paused) {
        music.play()
            .then(updateMusicButton)
            .catch(updateMusicButton);
    } else {
        music.pause();
        updateMusicButton();
    }
}

// Save playback position
music.addEventListener("timeupdate", () => {
    sessionStorage.setItem(timeKey, music.currentTime);
});

window.addEventListener("pagehide", () => {
    sessionStorage.setItem(timeKey, music.currentTime);
});

// Initialise
document.addEventListener("DOMContentLoaded", () => {

    createMusicButton();

    // Start music from the existing entrance button
    const entranceButton = document.getElementById("beginJourney");

    if (entranceButton) {
        entranceButton.addEventListener("click", startMusic, true);
    }

    // Attempt to resume music on subsequent pages
    if (sessionStorage.getItem(musicKey) === "yes") {
        startMusic();
    }

    updateMusicButton();
});
