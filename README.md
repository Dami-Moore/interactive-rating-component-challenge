# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot
<p>Desktop Designs</p>
<img src="design/desktop-design.jpg">

<img src="design/desktop-thank-you-state.jpg">

<p>Mobile Designs</p>

<img src="design/mobile-design.jpg">

<img src="design/mobile-thank-you-state.jpg">


### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Vanilla JavaScript


### What I learned

I learned about using localStorage to store data in the browser's memory, thereby making it available for use in another page.


```js
Line 9 (index.js) localStorage.setItem('value', rate.innerHTML);
Line 4 (thankyou.js) span.innerHTML = localStorage.getItem('value');
```

## Author

- Website - [Damilola Olanrewaju](https://dami-moore.github.io/portfolio-website/)
- Frontend Mentor - [@Dami-Moore](https://www.frontendmentor.io/profile/Dami-Moore)
- Twitter - [@Sam_damilola](https://www.twitter.com/Sam_damilola)


## Acknowledgments

 I'll love to thank [@timalex1](https://github.com/Timalex1) for helping me understand how to use localStorage.


