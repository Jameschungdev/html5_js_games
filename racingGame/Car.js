var carPic = document.createElement("img");
var carPicLoaded = false;

var carX = 75;
var carY = 75;
var carAng = 0;
var carSpeed = 0;

const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.03;

function carReset() {
	for(var i=0;i<TRACK_ROWS;i++){
		for(var j=0;j<TRACK_COLS;j++){

			var arrayIndex = rowColToArrayIndex(j,i);

			if(trackGrid[arrayIndex]==TRACK_PLAYERSTART) {
				trackGrid[arrayIndex] = TRACK_ROAD;
				carAng = -0.5*Math.PI;
				carX = j*TRACK_W+TRACK_W/2;
				carY = i*TRACK_H+TRACK_H/2;
			}
		}
	}
}

function carMove(){

	carSpeed*=GROUNDSPEED_DECAY_MULT;

	if(keyHeld_Gas){
		carSpeed+=DRIVE_POWER;
	}
	if(keyHeld_Reverse){
		carSpeed-=REVERSE_POWER;
	}
	if(keyHeld_TurnLeft){
		carAng-=TURN_RATE;
	}
	if(keyHeld_TurnRight){
		carAng+=TURN_RATE;
	}

	carX += Math.cos(carAng)*carSpeed;
	carY += Math.sin(carAng)*carSpeed;
	//carAng += 0.02;
}

function carDraw() {
	//colorCircle(carX,carY, 10, 'white'); // draw car
	if (carPicLoaded) {
		drawBitmapCenteredWithRotation(carPic, carX, carY, carAng);
	}
}