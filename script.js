const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
	console.log("Hour: " + hr + " Minutes: " + min + " Seconds: " + sec);

let hrPosition = (hr * 360/12)+(min*(360/60)/12);
let minPosition = (min * 360/60)+(sec*(360/60)/60);
let secPosition = sec * 360/60; //calculation to determine how many degrees are covered by 1 second which is multiplied by the current time in seconds

function runTheClock() {
	
	hrPosition = hrPosition + (3/360); //arm moves the distance of on hour so 360/12 ==> 30/3600seconds
	minPosition = minPosition + (1/60)*6; //minute arm moves the distance of once second over 60 seconds
	secPosition = secPosition + 6; //6 degrees = 360degree/60seconds
	
	HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
	MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
	SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);


