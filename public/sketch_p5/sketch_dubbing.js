var playing = false;
var fingers;
var button;


function setup() {
  // specify multiple formats for different browsers
  createCanvas(400,100);
  fingers = createVideo('video/zootopia.mp4');
  button = createButton('play');
  button.mousePressed(toggleVid); // attach button listener
}

// plays or pauses the video depending on current state
function toggleVid() {
  if (playing) {
    fingers.pause();
    button.html('play');
  } else {
    fingers.loop();
    button.html('pause');
  }
  playing = !playing;
}
