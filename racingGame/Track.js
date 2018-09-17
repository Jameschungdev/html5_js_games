var roadPic = document.createElement("img");
var wallPic = document.createElement("img");

const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_GAP = 2;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;
var trackGrid = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
				 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
				 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
				 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
				 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
				 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
				 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
				 1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,
				 1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
				 1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
				 1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
				 1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
				 1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
				 1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
				 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
				 ];

const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;

function loadTrackImage(){
    
}

function isWallAtColRow(col, row){
	if(col>=0 && col<TRACK_COLS && 
		row>=0 && row<TRACK_ROWS){	
			var trackIndexUnderCoord = rowColToArrayIndex(col,row);
			return (trackGrid[trackIndexUnderCoord]==TRACK_WALL);
		} else {
			return false;
		}
}

function carTrackHandling(){
	var carTrackCol = Math.floor(carX/TRACK_W);
	var carTrackRow = Math.floor(carY/TRACK_H);
	var trackIndexUnderCar = rowColToArrayIndex(carTrackCol,carTrackRow);
	
	//need boundary checker to prevent index overflow
	if(carTrackCol>=0 && carTrackCol<TRACK_COLS && 
		carTrackRow>=0 && carTrackRow<TRACK_ROWS){
			
			if(isWallAtColRow(carTrackCol,carTrackRow)){

				carX -= Math.cos(carAng)*carSpeed;
				carY -= Math.sin(carAng)*carSpeed;

				carSpeed*=-0.5;

			} // end of track found
	} // end of valid col and row
} // end of carTrackHandling()


function rowColToArrayIndex(col, row) {
	return TRACK_COLS * row + col;
}

function drawTracks() {

	for (var i = 0; i < TRACK_ROWS; i++) {
		for (var j = 0; j < TRACK_COLS; j++) {

			var arrayIndex = rowColToArrayIndex(j, i);

			if (trackGrid[arrayIndex] == TRACK_WALL) {
				colorRect(TRACK_W * j, TRACK_H * i, TRACK_W - TRACK_GAP, TRACK_H - TRACK_GAP, 'pink');
			} // end of is this track here
		} // end of for each col
	} // end of for each row
} // end of drawTracks func