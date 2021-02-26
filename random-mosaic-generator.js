var chunkArray = function(array, chunk){
    var tempArray = [];
    for (var index = 0; index < array.length; index += chunk) {
        tempArray.push(array.slice(index, index+chunk));
    }
    return tempArray;
}

var nbTiles=5;
var nbTilesEven=Math.floor(nbTiles/2)*2;
var array = [];
for(var i=0; i<(nbTiles*(nbTilesEven/2)); i++){
	array.push(Math.random()>0.5);
}
var tilesToMirror = chunkArray(array, (nbTilesEven/2));

var tiles = [];
for(var i=0; i<tilesToMirror.length; i++){
	if (nbTiles%2){
		tiles.push(tilesToMirror[i].concat(Math.random()>0.5).concat(tilesToMirror[i].slice().reverse()));
	} else {
		tiles.push(tilesToMirror[i].concat(tilesToMirror[i].slice().reverse()));
	}
}

var tileSize = 50;

var logo = document.getElementById("my_logo");
if (!logo){
	logo = document.createElement('div');
	logo.id = "my_logo";
	logo.style.width = (tileSize*nbTiles)+"px";
	logo.style.height = (tileSize*nbTiles)+"px";
	logo.style.padding=(tileSize/2)+"px";
	logo.style.margin=(tileSize/2)+"px";
	logo.style.backgroundColor="#EEEEEE";
	document.body.appendChild(logo);
}

logo.innerHTML  = "";
tiles.forEach(function(tile){
	var row = document.createElement('div');
	
	tile.forEach(function(z){
		var tile = document.createElement('div');
		tile.style.width="50px";
		tile.style.height="50px";
		tile.style.float="left";
		tile.style.backgroundColor=z?"#2B92AB":"#EEEEEE";
		row.appendChild(tile);
	});
	logo.appendChild(row);
});