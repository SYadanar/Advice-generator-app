const adviceID = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const dice = document.getElementById("dice");
const main = document.getElementById("main-content");
const loadingSpinner = document.getElementById("loading-spinner");

const getAdvice = () => fetch('https://api.adviceslip.com/advice')
	.then(res => {
		return res.json();
	})
	.then(data => {
		// console.log(data);
		// adviceID.textContent = data.slip.id;
		adviceID.textContent = screen.width;
		adviceText.textContent = data.slip.advice;

		main.classList.remove("d-none");
		loadingSpinner.classList.add("d-none");
	})
	.catch(error => console.log("ERROR"))

const loadAPI = () => {
	main.classList.add("d-none");
	loadingSpinner.classList.remove("d-none");
	getAdvice();
}

dice.addEventListener("click", loadAPI);