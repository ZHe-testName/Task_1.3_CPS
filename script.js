'use strict';

const slider = document.querySelector('.services-slider');

slider.addEventListener('touchstart', event => {
    console.log(event.changedTouches);
})