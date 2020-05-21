'use strict';
//Removing disabled attribute from button
document.body.addEventListener('click', function(event) {
    var target = event.target;
    if (target.tagName.toLowerCase() === 'input' && target.classList.contains('privacy-checkbox__input')) {
        if (target.checked) {
            target.parentElement.nextElementSibling.removeAttribute('disabled');
        }
        else {
            target.parentElement.nextElementSibling.setAttribute('disabled', 'disabled');
        }
    }
});