'use strict';

const showBtn = document.querySelector('#repairShowBtn'),
    cardsBlock = document.querySelector('.repair-cards');

showBtn.addEventListener('click', () => {
    cardsBlock.classList.toggle('repair-cards--show-all');
    showBtn.classList.toggle('services__readmore-button--active');

    if (cardsBlock.classList.contains('repair-cards--show-all')) {
        showBtn.textContent = 'Скрыть';
    }else{
        showBtn.textContent = 'Показать все';
    }

})