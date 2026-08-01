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

        alert("🎉 Correct! Mujhe pata tha tum answer de dogi. ❤️");

    } else {

        attempts++;

        if (attempts == 1) {
            alert("❌ Oops! Galat answer.\n\n💡 Hint: Naam 'J' se start hota hai. 😜");
        }
        else if (attempts == 2) {
            alert("😂 Arre yaar... Itna bhi mushkil nahi hai!\n\n💡 Hint: 7 letters ka naam hai. 😉");
        }
        else if (attempts >= 3) {
            alert("🤣 Last Hint!\n\nApna naam try karo. ❤️");
        }

    }

}
