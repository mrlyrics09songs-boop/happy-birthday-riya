// ---------------- PAGE CHANGE ----------------

const pages = document.querySelectorAll(".page");

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
// ---------------- LETTER ----------------

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

let typed=false;

function typeLetter(){

    if(typed) return;

    typed=true;

    const box=document.getElementById("letterText");

    let i=0;

    box.innerHTML="";

    const timer=setInterval(()=>{

        if(i>=letterMessage.length){
            clearInterval(timer);
            return;
        }

        if(letterMessage.charAt(i)==="\n"){
            box.innerHTML+="<br>";
        }else{
            box.innerHTML+=letterMessage.charAt(i);
        }

        i++;

    },30);

}

// ---------------- SECRET GAME ----------------

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
// ---------------- MEMORY BOX ----------------

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

let currentMemory=0;

function openMemoryBox(){

    document.getElementById("memoryBox").style.display="block";

    currentMemory=0;

    document.getElementById("catImg").src=memoryImages[currentMemory];
    document.getElementById("catText").innerHTML=memoryTexts[currentMemory];

}

function nextMemory(){

    currentMemory++;

    if(currentMemory < memoryImages.length){

        document.getElementById("catImg").src=memoryImages[currentMemory];
        document.getElementById("catText").innerHTML=memoryTexts[currentMemory];

    }else{

        showPage("page4");

        heartRain();

    }

}

// ---------------- HEART RAIN ----------------

function heartRain(){

    for(let i=0;i<40;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top="-40px";
        heart.style.fontSize=(18+Math.random()*20)+"px";
        heart.style.zIndex="9999";
        heart.style.pointerEvents="none";
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
