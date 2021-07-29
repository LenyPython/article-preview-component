# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon


## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- React Styled components

### What I learned

```css
.proud-of-this-css {
  filter: brightness(0) invert(1);
}
```
```js
  const handleClick = () => {
    let contactArrow = document.querySelector('.contact');
    let shareDiv = document.querySelector('.share');
    contactArrow.classList.toggle('clicked');
    shareDiv.classList.toggle('visible');
  };
```

### Useful resources

- Stackoverflow
- MDN docs


## Author

- Website - 404
- Frontend Mentor - [@LenyPython](https://www.frontendmentor.io/profile/LenyPython)
