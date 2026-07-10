/* ===========================
COUNTDOWN
=========================== */

const launchDate = new Date("Augest 10, 2026 23:59:59").getTime();

function updateCountdown(){

const now = new Date().getTime();

const distance = launchDate - now;

if(distance < 0){

document.getElementById("days").innerHTML="00";
document.getElementById("hours").innerHTML="00";
document.getElementById("minutes").innerHTML="00";
document.getElementById("seconds").innerHTML="00";

return;

}

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=String(days).padStart(2,"0");
document.getElementById("hours").innerHTML=String(hours).padStart(2,"0");
document.getElementById("minutes").innerHTML=String(minutes).padStart(2,"0");
document.getElementById("seconds").innerHTML=String(seconds).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);


/* ===========================
PAGE ANIMATION
=========================== */

window.onload=()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="1.2s";

document.body.style.opacity="1";

},100);

}


/* ===========================
FLOATING EMOJIS
=========================== */

const emojis=["🎁","✨","🎉","💜","🎈","🚀","⭐"];

function createEmoji(){

const emoji=document.createElement("div");

emoji.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

emoji.style.position="fixed";

emoji.style.left=Math.random()*100+"vw";

emoji.style.top="110vh";

emoji.style.fontSize=(18+Math.random()*18)+"px";

emoji.style.pointerEvents="none";

emoji.style.zIndex="999";

emoji.style.transition="linear";

document.body.appendChild(emoji);

const duration=7000+Math.random()*4000;

setTimeout(()=>{

emoji.style.transform=
`translateY(-130vh)
rotate(${Math.random()*720}deg)`;

emoji.style.opacity="0";

},100);

setTimeout(()=>{

emoji.remove();

},duration);

}

setInterval(createEmoji,800);


/* ===========================
CURSOR GLOW
=========================== */

const glow=document.createElement("div");

glow.style.position="fixed";

glow.style.width="250px";

glow.style.height="250px";

glow.style.borderRadius="50%";

glow.style.pointerEvents="none";

glow.style.background="radial-gradient(circle,rgba(0,212,255,.18),transparent 70%)";

glow.style.transform="translate(-50%,-50%)";

glow.style.zIndex="-1";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


/* ===========================
SHOOTING STARS
=========================== */

function shootingStar(){

const star=document.createElement("div");

star.style.position="fixed";

star.style.width="3px";

star.style.height="120px";

star.style.background="linear-gradient(white,transparent)";

star.style.transform="rotate(45deg)";

star.style.left=Math.random()*100+"vw";

star.style.top="-120px";

star.style.opacity=".8";

star.style.pointerEvents="none";

document.body.appendChild(star);

star.animate([

{

transform:"translate(0,0) rotate(45deg)"

},

{

transform:"translate(-500px,500px) rotate(45deg)"

}

],{

duration:1600

});

setTimeout(()=>{

star.remove();

},1700);

}

setInterval(shootingStar,2500);


/* ===========================
BUTTON RIPPLE
=========================== */

document.querySelectorAll("a").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});
