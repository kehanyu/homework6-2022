var video = document.querySelector("#player1");
var videoVolume = document.querySelector("#volume");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down Video");
	video.playbackRate *= 0.95;
	console.log("Speed is", video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed up video");
	video.playbackRate /= 0.95;
	console.log("Speed is", video.playbackRate);

});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip Ahead");
	video.currentTime += 15
	if (video.currentTime >= video.duration)
	    video.currentTime = 0;
	console.log("Video current time is", video.currentTime)
});


document.querySelector("#mute").addEventListener("click", function(){
	console.log("mute");
	if (video.muted){
		video.muted = false;
		mute.innerHTML = "Mute";
		console.log("Video is unmuted");
		
		}
	else {
       video.muted = true;
	   mute.innerHTML = "Unmute";
	   console.log("Video is muted");
	}
});

document.querySelector("#slider").addEventListener("click", function (){
	console.log(video.volume);
	video.volume = document.querySelector("input").value / 100;
	videoVolume.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function (){
	video.className = "oldSchool";
});

document.querySelector("#orig").addEventListener("click", function(){
	video.className = "video";
});








