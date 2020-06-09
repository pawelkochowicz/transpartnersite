"use strict";

const navigationSwitcher = document.querySelector('.nav__switcher--js')
navigationSwitcher.addEventListener('click',(e) => {
    const navigationList = document.querySelector('.nav__list--js')
    navigationList.classList.toggle('nav__list--visible')
});


