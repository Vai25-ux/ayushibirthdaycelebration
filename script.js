// =========================================
// AYUSHI DIWAS
// Premium Script
// =========================================

// Event Date
const eventDate = new Date("July 8, 2026 21:00:00").getTime();

// Countdown Elements
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// Countdown Function
function updateCountdown(){

    const now = new Date().getTime();

    const distance = eventDate - now;

    if(distance < 0){

        document.querySelector(".timer").innerHTML = `
        <h2 style="
        color:#FFD369;
        font-size:42px;
        text-align:center;
        width:100%;">
        🎉 It's Ayushi Diwas! 🎉
        </h2>
        `;

        return;
    }

    days.innerHTML=Math.floor(distance/(1000*60*60*24));

    hours.innerHTML=Math.floor(
    (distance%(1000*60*60*24))/(1000*60*60));

    minutes.innerHTML=Math.floor(
    (distance%(1000*60*60))/(1000*60));

    seconds.innerHTML=Math.floor(
    (distance%(1000*60))/1000);

}

setInterval(updateCountdown,1000);

updateCountdown();


// =========================================
// Smooth Scroll Animation
// =========================================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="all .9s ease";

observer.observe(section);

});


// =========================================
// RSVP Button
// =========================================

const joinBtn=document.getElementById("joinBtn");

joinBtn.addEventListener("click",()=>{

joinBtn.innerHTML="🎉 See You There!";

joinBtn.style.background="#28a745";

alert("❤️ Thank you! Looking forward to celebrating Ayushi Diwas with you!");

});


// =========================================
// Floating Glow Particles
// =========================================

for(let i=0;i<35;i++){

let particle=document.createElement("div");

particle.className="particle";

particle.style.left=Math.random()*100+"vw";

particle.style.animationDuration=(6+Math.random()*8)+"s";

particle.style.animationDelay=(Math.random()*5)+"s";

particle.style.opacity=Math.random();

particle.style.width=(4+Math.random()*8)+"px";

particle.style.height=particle.style.width;

document.body.appendChild(particle);

}
