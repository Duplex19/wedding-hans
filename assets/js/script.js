simplyCountdown('.simply-countdown', {  
    year: 2023, // required
    month: 10, // required
    day: 22, // required
    words: { //words displayed into the countdown
        days: { singular: 'hari', plural: 'hari' },
        hours: { singular: 'jam', plural: 'jam' },
        minutes: { singular: 'menit', plural: 'menit' },
        seconds: { singular: 'detik', plural: 'detik' }
    },
});

const body = document.getElementById("body");
const hero = document.getElementById("hero");
const audioIcon = document.getElementById("audio-icon");
const audioIconI = document.querySelector(".audio-icon i");
const audio = document.getElementById("music");

let isPlay = false;

function enableScroll() {
    localStorage.setItem('open', "true");
   hero.style.display= "none";  
    body.classList.remove("noscroll");
    playAudio();
          
}

function playAudio() {
    audioIcon.style.display= "flex";
    audio.play();
    isPlay = true;
}

audioIcon.onclick = function () {
    if (isPlay==true) {
        audio.pause();
        audioIconI.classList.remove("bx-play-circle");
        audioIconI.classList.add("bx-pause-circle");
    }
    else {
        audio.play();
        audioIconI.classList.add("bx-play-circle");
        audioIconI.classList.remove("bx-pause-circle");
    }


    isPlay = !isPlay
}

if(localStorage.getItem("open")){
    body.classList.remove("noscroll");
   hero.style.display= "none"; 
   playAudio(); 

}

function myFunction() {
    var copyText = document.getElementById("myInput");
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }

  function myFunction2() {
    var copyText = document.getElementById("myInput2");
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.getElementById("myTooltip2");
    tooltip.innerHTML = "Copied: " + copyText.value;
  }
  
  function outFunc2() {
    var tooltip = document.getElementById("myTooltip2");
    tooltip.innerHTML = "Copy to clipboard";
  }
  const urlParam = new URLSearchParams(window.location.search);
  const name = urlParam.get('name') || "";
  const pronoun = urlParam.get('p') || "Bapak/Ibu/Saudara/i,";

  const nameContainer = document.querySelector(".hero h4 span");
  nameContainer.innerText = `${pronoun} ${name},`;

  document.querySelector("#rsvp-name").value = name;
