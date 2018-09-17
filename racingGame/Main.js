



var canvas, canvasContext;


window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);

	setupInput();
	carImageLoad();
	carReset();
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	carMove();
	carTrackHandling();
}

function clearScreen(){
	colorRect(0,0, canvas.width,canvas.height, 'black');

function drawAll() {
	clearScreen();
	carDraw();
	drawTracks();

	var mouseTrackCol = Math.floor(mouseX/TRACK_W);
	var mouseTrackRow = Math.floor(mouseY/TRACK_H);
	var trackIndexUnderMouse = rowColToArrayIndex(mouseTrackCol,mouseTrackRow);
	colorText("Col: "+mouseTrackCol+", Row: "+mouseTrackRow + ", Index: "+trackIndexUnderMouse, mouseX, mouseY, 'yellow');

	//trackGrid[trackIndexUnderMouse]=false; //mouse removes tracks
}
