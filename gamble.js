

function diceRoller(){

	const numOfDice = document.getElementById("numOfDice").value;
	const diceNum = document.getElementById("diceNum");
	const prediction = document.getElementById("prediction").value;
	const pred = document.getElementById("pred");
	const result = document.getElementById("result");
	const winresult = document.getElementById("winresult");
	const resultImages = document.getElementById("resultImages");
	
	const values = [];
	const images = [];


	diceNum.textContent = `You Picked: ${numOfDice}.`;
	pred.textContent = `You predicted: ${prediction}`;

	for(let i = 0; i < numOfDice; i++){
		const value = Math.floor(Math.random() * 6) + 1;
		values.push(value);
		images.push(`<img src='images/${value}.jpg' alt='dice ${value}'/>`);

	};

	result.textContent = `You rolled: ${values.join('-')}`;
	resultImages.innerHTML = images.join('');
}



function slotRoller(){
	const slotResult = document.getElementById("slotResult");
	const slotImages = document.getElementById("slotImages");
	const winner = document.getElementById("winner");
	const values = [];
	const images = [];

	const a = ['$', 'a', 'b', 'c', 'd', 'e'];
	
	for(let i = a.length - (a.length - 3); i > 0; i--){
		const i = Math.floor(Math.random() * a.length);
		let r = a[i];
		values.push(r);
		images.push(`<img src='images/${r}.jpg' alt='dice ${r}'/>`);
	};
	
	slotImages.innerHTML = images.join('');
	if(values[0] === values[1] && values[1] === values[2]){
		winner.textContent = "JACKPOT You Won";
	} else{
		winner.textContent = "Sorry Try Again";
	};
}