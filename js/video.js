var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	video.load();
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay set to false");
	console.log("Loop set to false");
});


// play button
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	var vol = 100 * video.volume;
	document.querySelector("#volume").innerHTML = vol + "%";
	console.log("Current volume is: " + vol + "%");
});

// pause button
document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
});

// slow down
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = 0.9 * video.playbackRate;
	console.log("New Slower Speed: " + video.playbackRate);
});

// speed up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.9;
	console.log("New Faster Speed: " + video.playbackRate);
});

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
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
	var vol = document.querySelector("#slider").value;
	document.querySelector("#volume").innerHTML = vol + "%";
	video.volume = vol / 100;
});

// styled
document.querySelector("#vintage").addEventListener("click", function() {

	video.classList.add("oldSchool");
});

// original
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
