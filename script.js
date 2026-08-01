alert("Script Loaded");
// ================= PAGE CHANGE =================

function showPage(pageId){

    document.querySelectorAll(".page").forEach(page=>{
        page.classList.remove("active");
    });

    const page=document.getElementById(pageId);

    page.classList.add("active");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

    if(pageId==="page2"){
        startLetter();
    }

}

// ================= LETTER =================

const letter=`Dear Janvii ❤️

Happy Friendship Day 🌸

Thank you for always being such an amazing friend.

Your smile makes every day brighter.

Your kindness makes life beautiful.

And your friendship means a lot to me. ❤️

I hope we always stay like this...

Laughing...
Fighting...
Annoying each other...

Making beautiful memories forever. 🤍`;

let started=false;

function startLetter(){

    if(started) return;

    started=true;

    const box=document.getElementById("letterText");

    let i=0;

    box.innerHTML="";

    const typing=setInterval(()=>{

        if(i>=letter.length){

            clearInterval(typing);

            return;

        }

        if(letter.charAt(i)==="\n"){

            box.innerHTML+="<br>";

        }else{

            box.innerHTML+=letter.charAt(i);

        }

        i++;

    },25);

}

// ================= SECRET GAME =================

let attempts=0;

function checkAnswer(){

    const ans=document.getElementById("answer").value.trim().toLowerCase();

    if(ans==="janvii" || ans==="janvi"){

        document.getElementById("secret").style.display="block";

        document.getElementById("memorySection").style.display="block";

        heartRain();

    }else{

        attempts++;

        if(attempts===1){

            alert("❌ Hint: Naam J se start hota hai 😜");

        }else if(attempts===2){

            alert("😂 Hint: Apna naam try karo ❤️");

        }else{

            alert("🤣 Best Friend = Janvii ❤️");

        }

    }

}
// ================= MEMORY BOX =================

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

let current = 0;

function openMemoryBox(){

    document.getElementById("memoryBox").style.display = "block";

    current = 0;

    document.getElementById("catImg").src = memoryImages[current];
    document.getElementById("catText").innerHTML = memoryTexts[current];

}

function nextMemory(){

    current++;

    if(current < memoryImages.length){

        document.getElementById("catImg").src = memoryImages[current];
        document.getElementById("catText").innerHTML = memoryTexts[current];

    }else{

        showPage("page4");

        heartRain();

    }

}

// ================= HEART RAIN =================

function heartRain(){

    for(let i=0;i<40;i++){

        const heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";
        heart.style.left = Math.random()*100 + "vw";
        heart.style.top = "-40px";
        heart.style.fontSize = (18 + Math.random()*20) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";
        heart.style.transition = "transform 5s linear, opacity 5s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.transform = "translateY(110vh)";
            heart.style.opacity = "0";

        },50);

        setTimeout(()=>{

            heart.remove();

        },5000);

    }

}
// ===== WARNING POPUP =====

function showWarning(){

    document.getElementById("warningBox").style.display="flex";

}

function closeWarning(){

    document.getElementById("warningBox").style.display="none";

}

function playVoice(){

    closeWarning();

    const audio=document.getElementById("voice");

    audio.play();

 audio.onended=function(){

    showPage("page5");

};

}

function showEnding(){

    document.querySelector("#page4 .card").innerHTML=`

<h1>😂 Dekha...</h1>

<p>

Aaj bhi ye recording utni hi funny lagti hai.

<br><br>

Aur haan...

<br><br>

Setting ki responsibility aaj bhi tumne nahi li. 🤣

<br><br>

Lekin...

<br><br>

Tum jaisi ek achchi dost milna...

<br><br>

Ye meri life ki sabse achchi cheezon me se ek hai. ❤️🌸

<br><br>

Log milte bahut hain...

<br>

Par kuch hi log yaad ban jaate hain.

<br><br>

Thank you for being one of those people.

<br><br>

Happy Friendship Day, Janvii. 🤍

<br><br>

Aur haan...

<br><br>

Kabhi mujhe bhoolna mat...

<br><br>

Warna ye voice note lifetime evidence banke rahega. 😂💖

</p>

<button onclick="heartRain()">
💖 Celebrate Again
</button>

`;

    heartRain();

}
// ================= PAGE 5 =================

function deletePhoto(){

    document.getElementById("deleteMsg").innerHTML =
    "❌ Permission Denied!<br><br>Ye bhi meri favourite memory hai. 😂❤️";

    document.getElementById("nextBtn").style.display = "inline-block";

}

function nextPhoto(){

    // Funny photo ki jagah favourite photo
    document.getElementById("surprisePhoto").src = "favorite.jpg.jpg";

    // Text change
    document.getElementById("funnyText").innerHTML =
    "Bas mazaak kar raha tha... 😌<br><br>Sach kahun to... ye wali smile hi sabse dangerous hai. ❤️";

    // Purana message hatao
    document.getElementById("deleteMsg").innerHTML = "";

    // Button hide
    document.getElementById("nextBtn").style.display = "none";

    // Loading animation
    let percent = 0;

    document.getElementById("loadingBox").innerHTML =
    "🤖 Analyzing Beauty... 0%";

    let timer = setInterval(function(){

        percent += 10;

        document.getElementById("loadingBox").innerHTML =
        "🤖 Analyzing Beauty... " + percent + "%";

        if(percent >= 100){

            clearInterval(timer);

            document.getElementById("loadingBox").innerHTML = `
            ❌ <b>System Error</b><br><br>
            Itni cuteness measure hi nahi ho sakti. 😂❤️
            <br><br>
            💖 Happy Friendship Day Janvii 💖
            `;

            heartRain();

        }

    },250);

}
// ================= PAGE 5 =================

function deletePhoto(){

    document.getElementById("deleteMsg").innerHTML =
    "❌ Permission Denied!<br><br>Ye bhi meri favourite memory hai. 😂❤️";

    document.getElementById("nextBtn").style.display = "inline-block";

}

function nextPhoto(){

    // Funny photo hide
    document.getElementById("surprisePhoto").style.display = "none";

    // Funny text change
    document.getElementById("funnyText").innerHTML =
    "Bas mazaak kar raha tha... 😌<br><br>Sach kahun to... ye wali smile hi sabse dangerous hai. ❤️";

    // Show favourite section
    document.getElementById("beautySection").style.display = "block";

    // Hide buttons
    document.getElementById("deleteMsg").innerHTML = "";
    document.getElementById("nextBtn").style.display = "none";

    let percent = 0;

    document.getElementById("loadingBox").innerHTML =
    "🤖 Analyzing Beauty... 0%";

    let timer = setInterval(function(){

        percent += 10;

        document.getElementById("loadingBox").innerHTML =
        "🤖 Analyzing Beauty... " + percent + "%";

        if(percent >= 100){

            clearInterval(timer);

            document.getElementById("loadingBox").innerHTML =
            "❌ <b>System Error</b><br><br>Itni cuteness measure hi nahi ho sakti. 😂❤️<br><br>💖 Happy Friendship Day Janvii 💖";

            heartRain();

        }

    },250);

}
console.log("Script Loaded Successfully");
