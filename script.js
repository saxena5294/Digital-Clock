let clock = document.querySelector(".clock");
let digitalClock = document.querySelector("#digitalClock");


setInterval(function(){
    let date = new Date();
    // console.log(date.toLocalTimeString());
    digitalClock.innerHTML = date.toLocaleTimeString();
},1000)