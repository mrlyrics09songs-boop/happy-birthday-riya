function openLetter() {
    const letter = document.getElementById("letter");

    if (letter.style.display === "block") {
        letter.style.display = "none";
    } else {
        letter.style.display = "block";
        letter.scrollIntoView({
            behavior: "smooth"
        });
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

        let heart = document.createElement("div");

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
