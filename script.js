const adviceID = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const dice = document.getElementById("dice");

const getAdvice = () => fetch('https://api.adviceslip.com/advice')
	.then(res => {
		return res.json();
	})
	.then(data => {
		console.log(data);
		adviceID.textContent = data.slip.id;
		adviceText.textContent = data.slip.advice;
	})
	.catch(error => console.log("ERROR"))


dice.addEventListener("click", () => {
	getAdvice();
});