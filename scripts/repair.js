'use strict';

const head = document.querySelector('head'),
    cardsBlock = document.querySelector('.repair-cards'),
    showBtn = document.querySelector('#repairShowBtn');

if (document.documentElement.clientWidth < 560) {
    //create link to slider style-shield
    let styleLink = document.createElement('link');
    styleLink.setAttribute('rel', 'stylesheet');
    styleLink.setAttribute('href', 'https://unpkg.com/swiper/swiper-bundle.css');

    head.appendChild(styleLink);

    //swiper init
    const swiper = new Swiper('.swiper-container', {
        loop: false,
        slidesPerView: 1,
    
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
        }
    });
}

showBtn.addEventListener('click', () => {
    cardsBlock.classList.toggle('repair-cards--show-all');
    showBtn.classList.toggle('services__readmore-button--active');

    if (cardsBlock.classList.contains('repair-cards--show-all')) {
        showBtn.textContent = 'Скрыть';
    }else{
        showBtn.textContent = 'Показать все';
    }

});

