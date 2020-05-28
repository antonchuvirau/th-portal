'use strict';
//Removing disabled attribute from button
document.body.addEventListener('click', (event) => {
    let target = event.target;
    if (target.tagName.toLowerCase() === 'input' && target.classList.contains('privacy-checkbox__input')) {
        if (target.checked) {
            target.parentElement.nextElementSibling.removeAttribute('disabled');
        }
        else {
            target.parentElement.nextElementSibling.setAttribute('disabled', 'disabled');
        }
    }
});
//Opening notification's list
let notificationBtnElement = document.querySelector('.notification__btn');
notificationBtnElement.addEventListener('click', (event) => {
    notificationBtnElement.classList.toggle('notification__btn_state-active');
    notificationBtnElement.nextElementSibling.classList.toggle('notification__wrapper_state-opened');
});