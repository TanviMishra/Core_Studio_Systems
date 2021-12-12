//scrolling fade in, fade out
let didScroll = false;
window.onscroll = () => didScroll = true;
setInterval(() => {
  if (didScroll) {
    didScroll = false;
    document.querySelector(".allContent").style.animation = "fadeIn 1s";
    document.querySelector("#mossContent").style.animation = "mossOut 1s";
    //document.querySelector(".moss").style.opaciy = "0";
  }
  else {
    document.querySelector(".allContent").style.animation = "fadeBackground 30s";
    document.querySelector("#mossContent").style.animation = "mossIn 30s";
  }
}, 250);

//playing the music
playCheck = "false";
function play() {
  var audio = document.getElementById("audio");
  if (playCheck == "false") {
    audio.play();
    playCheck = "true";
  }
  else {
    audio.pause();
    playCheck = "false"
  }
}
//rotating the records
var record = document.getElementById("play");
window.addEventListener("scroll", function () {
  record.style.transform = "rotate(" + window.pageYOffset + "deg)";
});



// collect all the divs
var divs = document.getElementsByClassName('moss');
// get window width and height
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

// i stands for "index". you could also call this banana or haircut. it's a variable
for (var i = 0; i < divs.length; i++) {
  var thisDiv = divs[i];
  // get random numbers for each element
  randomTop = getRandomNumber(0, winHeight);
  randomLeft = getRandomNumber(0, winWidth);
  randomRadius = getRandomNumber(100, 200);
  // update top and left position
  thisDiv.style.top = randomTop + "px";
  thisDiv.style.left = randomLeft + "px";
  thisDiv.style.width = randomRadius + "px";
  thisDiv.style.height = randomRadius + "px";
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
