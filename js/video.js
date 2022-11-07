var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	// this.document.getElementsByClassName("video");
	video = document.querySelector('#player1');
	video.load();
	video.autoplay = false;
	video.loop = false;
	// optional console logs
	console.log("Autoplay set to false");
	console.log("Loop set to false");
});


// play button
document.querySelector("#play").addEventListener("click", function() {
	// console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume;
});

// pause button
document.querySelector("#pause").addEventListener("click", function() {
	// console.log("Play Video");
	video.pause()
});

// slow down
document.querySelector("#slower").addEventListener("click", function() {
	// console.log("Play Video");
	// video.playbackRate = 0.9 * video.playbackRate;
	video.playbackRate = video.playbackRate - (0.1 * video.defaultPlaybackRate);
	console.log("New Slower Speed: " + video.playbackRate);
});

// speed up
document.querySelector("#faster").addEventListener("click", function() {
	// console.log("Play Video");
	// video.playbackRate = 1.1 * video.playbackRate;
	video.playbackRate = video.playbackRate + (0.1 * video.defaultPlaybackRate);
	console.log("New Faster Speed: " + video.playbackRate);
});

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	// console.log("Play Video");
	var time_val = video.currentTime;
	time_val += 10;

	if (time_val > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = time_val;
	}

	console.log("Current Video Location: " + video.currentTime);
});

// mute
document.querySelector("#mute").addEventListener("click", function() {
	// console.log("Play Video");
	if (document.querySelector("#mute").innerHTML == "Mute") {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

// volume slider
document.querySelector("#slider").addEventListener("click", function() {
	// console.log("Play Video");
	var vol = document.querySelector("#slider").value;
	document.querySelector("#volume").innerHTML = vol;
});

// styled
document.querySelector("#vintage").addEventListener("click", function() {
	// console.log("Play Video");
	// var filter = document.querySelector("video");
	video.classList.add("oldSchool");
});

// original
document.querySelector("#orig").addEventListener("click", function() {
	// console.log("Play Video");
	video.classList.remove("oldSchool");
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

// when mute, do I have to change the volume is:
// is my current speed up and slow down correct?

