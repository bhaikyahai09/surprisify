// ===== Launch Date =====
// Change this date whenever you want.
const launchDate = new Date("December 31, 2026 23:59:59").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown(){

const now = new Date().getTime();

const distance = launchDate - now;

if(distance <= 0){

days.innerHTML="00";
hours.innerHTML="00";
minutes.innerHTML="00";
seconds.innerHTML="00";

document.querySelector(".tag").innerHTML =
"🚀 We Are Live!";

return;

}

const d = Math.floor(distance/(1000*60*60*24));

const h = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const m = Math.floor((distance%(1000*60*60))/(1000*60));

const s = Math.floor((distance%(1000*60))/1000);

days.innerHTML = String(d).padStart(2,"0");
hours.innerHTML = String(h).padStart(2,"0");
minutes.innerHTML = String(m).padStart(2,"0");
seconds.innerHTML = String(s).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);


// ===== Mouse Glow =====

document.addEventListener("mousemove",(e)=>{

let glow=document.querySelector(".mouseGlow");

if(!glow){

glow=document.createElement("div");

glow.className="mouseGlow";

document.body.appendChild(glow);

glow.style.cssText=`
position:fixed;
width:250px;
height:250px;
border-radius:50%;
background:radial-gradient(circle,
rgba(0,255,255,.25),
transparent 70%);
pointer-events:none;
transform:translate(-50%,-50%);
z-index:-1;
transition:.08s linear;
`;

}

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});


// ===== Fade Animation =====

const card=document.querySelector(".glass");

card.style.opacity="0";
card.style.transform="translateY(60px)";

setTimeout(()=>{

card.style.transition="1.2s";

card.style.opacity="1";

card.style.transform="translateY(0px)";

},300);


// ===== Floating Emojis =====

const emojis=["🎁","✨","🎉","💜","🎈","🚀"];

function createEmoji(){

const emoji=document.createElement("div");

emoji.innerHTML=
emojis[Math.floor(Math.random()*emojis.length)];

emoji.style.position="fixed";

emoji.style.left=Math.random()*100+"vw";

emoji.style.top="105vh";

emoji.style.fontSize=(20+Math.random()*25)+"px";

emoji.style.opacity=".8";

emoji.style.pointerEvents="none";

emoji.style.transition="linear";

document.body.appendChild(emoji);

const duration=6000+Math.random()*4000;

setTimeout(()=>{

emoji.style.transform=
`translateY(-120vh)
rotate(${Math.random()*720}deg)`;

emoji.style.opacity="0";

},100);

setTimeout(()=>{

emoji.remove();

},duration);

}

setInterval(createEmoji,900);
