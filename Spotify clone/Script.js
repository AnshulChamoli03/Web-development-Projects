// gifArray = ["https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif","https://thumbs.gfycat.com/AcclaimedHeartfeltGoat-size_restricted.gif","https://img1.picmix.com/output/stamp/normal/5/4/5/3/463545_fd2c9.gif","https://i.gifer.com/Nt6v.gif"]


// function gif(){
//     console.log(gifArray[(Math.floor(Math.random() * gifArray.length))])
//     document.getElementById("songInfogif").setAttribute('src', gifArray[(Math.floor(Math.random() * gifArray.length))])
// }

// gif()


// var audio = new Audio();
// audio.src = 'cad.mp3';
// var playedPromise = audio.play();
// console.log(playedPromise)

console.log('Welcome to js');
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 

playAudio()