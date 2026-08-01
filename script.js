// ---------- PAGE CHANGE ----------

function showPage(pageId){

    document.querySelectorAll(".page").forEach(page=>{
        page.style.display="none";
    });

    const next=document.getElementById(pageId);

    next.style.display="flex";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

    if(pageId==="page2"){
        typeLetter();
    }

}

// ---------- LETTER TYPING ----------

const letterMessage=`Dear Janvii ❤️

Happy Friendship Day 🌸

Thank you for always being such an amazing friend.

Your smile makes every day brighter.

Your kindness makes life beautiful.

And your friendship means a lot to me. ❤️

I hope we always stay like this...

Laughing...
Fighting...
Annoying each other...

and making beautiful memories forever. 🤍`;

function typeLetter(){

    const box = document.getElementById("letterText");

    if(!box) return;

    box.innerHTML = "";
    let i = 0;

    const timer = setInterval(() => {

        if(i >= letterMessage.length){
            clearInterval(timer);
            return;
        }

        box.textContent += letterMessage.charAt(i);
        i++;

    },30);

}

    },30);

}

// ---------- SECRET CHALLENGE ----------

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

            alert("❌ Wrong!\n\nHint: Naam J se start hota hai 😜");

        }else if(attempts===2){

            alert("😂 Arre yaar...\n\nHint: Apna naam try karo ❤️");

        }else{

            alert("🤣 Last Hint!\n\nBest Friend = Janvii ❤️");

        }

    }

}

// ---------- MEMORY BOX ----------

const memoryImages=[
"cat1.jpg.JPG",
"cat2.jpg.JPG",
"cat3.jpg.JPG",
"cat4.jpg.JPG"
];

const memoryTexts=[
"🥹 Me waiting for your reply be like...",
"😭 Finally notification aayi!!",
"😂 POV: Jab tum sirf 'hmm' reply karti ho.",
"🏆 Official Best Friend Detected ❤️"
];

let current=0;

function openMemoryBox(){

    document.getElementById("memoryBox").style.display="block";

    current=0;

    document.getElementById("catImg").src=memoryImages[current];

    document.getElementById("catText").innerHTML=memoryTexts[current];

}

function nextMemory(){

    current++;

    if(current<memoryImages.length){

        document.getElementById("catImg").src=memoryImages[current];

        document.getElementById("catText").innerHTML=memoryTexts[current];

    }else{

        document.querySelector(".card").innerHTML=`

<h1>🏆 Friendship Verified ❤️</h1>

<h2>Congratulations Janvii 🎉</h2>

<p>

You have successfully completed
the Friendship Challenge 💖

<br><br>

🍫 Unlimited Chocolates<br>
🤗 Unlimited Hugs<br>
😂 Lifetime Permission To Irritate Me

<br><br>

Thank You For Being The Best Friend Ever ❤️

</p>

<button onclick="heartRain()">
💖 Celebrate Again
</button>

`;

        heartRain();

    }

}

// ---------- HEART RAIN ----------

function heartRain(){

    for(let i=0;i<40;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top="-40px";
        heart.style.fontSize=(20+Math.random()*20)+"px";
        heart.style.zIndex="9999";
        heart.style.transition="transform 5s linear, opacity 5s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.transform="translateY(110vh)";
            heart.style.opacity="0";

        },50);

        setTimeout(()=>{

            heart.remove();

        },5000);

    }

}
