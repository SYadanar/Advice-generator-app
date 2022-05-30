# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](.design/screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- HTML5
- CSS custom properties
- Bootstrap V5.1.3
- Javascript

### What I learned

I haven't done any Javascript app with API before. This one is my first time using API. After this challenge, I learned how to fetch API in Javascript.

```js
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
```

### Continued development

I'll add prograss bar or loading page while the app is waiting for API response.

### Useful resources

- [Learn Fetch API In 6 Minutes](https://www.youtube.com/watch?v=cuEtnrL9-H0) - This helped me to understand how to fetch API in Javascript.

## Author

- GitHub - [SYadanar](https://github.com/SYadanar)
- Frontend Mentor - [@SYadanar](https://www.frontendmentor.io/profile/SYadanar)