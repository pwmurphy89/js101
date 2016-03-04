


// getElementById("message").alert("There's a dragon!");

function throwDice() {


	var randomDie = Math.round(Math.random()*5) + 1;

	var imageName = "dice-img/d" + randomDie + ".gif";
	console.log(imageName);
	document.images['myDie1'].src = imageName;

	var randomDie2 = Math.round(Math.random() * 5) + 1;
	var imageName2 = "dice-img/d" + randomDie2 + ".gif";
	document.images['myDie2'].src = imageName2;
	console.dir(document.images);
var dieTotal = randomDie + randomDie2;
	if (dieTotal <= 9) {
		alert("You got burnt! You scored only " + dieTotal)
	 }
	

}


function run() {
	document.getElementById("dragon").style.visibility = "hidden";
	document.getElementById("fleeing").style.visibility = "visible";
	alert("You sceered!");
}


