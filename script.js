function showPage(pageId){

    document.querySelectorAll(".page").forEach(page=>{
        page.style.display="none";
    });

    document.getElementById(pageId).style.display="flex";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

let attempts=0;

function checkAnswer(){

    const ans=document.getElementById("answer").value.trim().toLowerCase();

    if(ans==="janvii" || ans==="janvi"){

        document.getElementById("secret").style.display="block";

        document.getElementById("memorySection").style.display="block";

        heartRain();

    }else{

        attempts++;

        if(attempts==1){

            alert("❌ Wrong!\n\nHint: Naam J se start hota hai 😜");

        }else if(attempts==2){

            alert("😂 Arre yaar...\n\nHint: Apna naam try karo ❤️");

        }else{

            alert("🤣 Last Hint!\n\nBest Friend = Janvii ❤️");

        }

    }

}

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

    document.getElementById("catImg").src=memoryImages[0];

    document.getElementById("catText").innerHTML=memoryTexts[0];

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

🍫 Unlimited Chocolates

<br>

🤗 Unlimited Hugs

<br>

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

function heartRain(){

    for(let i=0;i<40;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="-40px";

        heart.style.fontSize=(20+Math.random()*20)+"px";

        heart.style.zIndex="9999";

        heart.style.transition="5s linear";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.transform="translateY(110vh)";
            heart.style.opacity="0";

        },100);

        setTimeout(()=>{

            heart.remove();

        },5000);

    }

}
