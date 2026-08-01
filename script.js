function openLetter() {
    const letter = document.getElementById("letter");

    if (letter.style.display === "block") {
        letter.style.display = "none";
    } else {
        letter.style.display = "block";

        setTimeout(() => {
            letter.scrollIntoView({
                behavior: "smooth"
            });
        }, 200);
    }
}

let attempts = 0;

function checkAnswer() {

    const answer = document.getElementById("answer").value.trim().toLowerCase();
    const secret = document.getElementById("secret");

    if (answer === "janvii" || answer === "janvi") {

        secret.style.display = "block";

        heartRain();

        setTimeout(() => {
            alert("🏆 Achievement Unlocked!\n\nOfficially My Favourite Friend ❤️");
        }, 500);

        // Memory Box tak auto scroll
        setTimeout(() => {
            const memory = document.querySelector(".memory");
            if (memory) {
                memory.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }, 1200);

    } else {

        attempts++;

        if (attempts === 1) {
            alert("❌ Oops! Galat answer.\n\n💡 Hint: Naam 'J' se start hota hai. 😜");
        } else if (attempts === 2) {
            alert("😂 Arre yaar... Itna bhi mushkil nahi hai!\n\n💡 Hint: 7 letters ka naam hai. 😉");
        } else {
            alert("🤣 Last Hint!\n\nApna naam try karo. ❤️");
        }

    }

}

function heartRain() {

    for (let i = 0; i < 50; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-40px";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.zIndex = "9999";
        heart.style.pointerEvents = "none";
        heart.style.transition = "transform 5s linear, opacity 5s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = "translateY(110vh)";
            heart.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 5000);

    }

}

/* ===========================
   MEMORY BOX
=========================== */

const memoryImages = [
    "cat1.jpg.JPG",
    "cat2.jpg.JPG",
    "cat3.jpg.JPG",
    "cat4.jpg.JPG"
];
const memoryTexts = [
    "🥹 Me waiting for your reply be like...",
    "😭 Finally notification aayi!!",
    "😂 POV: Jab tum sirf 'hmm' reply karti ho.",
    "🏆 Official Best Friend Detected ❤️"
];

let currentMemory = 0;

function openMemoryBox() {

    const box = document.getElementById("memoryBox");

    box.style.display = "block";

    currentMemory = 0;

    document.getElementById("catImg").src = memoryImages[0];
    document.getElementById("catText").innerHTML = memoryTexts[0];

}

function nextMemory() {

    currentMemory++;

    if (currentMemory < memoryImages.length) {

        document.getElementById("catImg").src = memoryImages[currentMemory];
        document.getElementById("catText").innerHTML = memoryTexts[currentMemory];

    } else {

        document.getElementById("memoryBox").innerHTML = `
            <h2>🏆 Friendship Verified ❤️</h2>

            <h3>██████████ 100%</h3>

            <p>
                🎉 Congratulations Janvii!<br><br>

                You are officially promoted to<br>
                <b>Best Friend Forever ❤️</b><br><br>

                🍫 Unlimited Virtual Chocolates<br>
                🤗 Unlimited Hugs<br>
                😂 Lifetime Permission To Irritate Me
            </p>

            <button onclick="heartRain()">
                💖 Celebrate Again
            </button>
        `;

        heartRain();

    }

}
