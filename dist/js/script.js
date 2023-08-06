$(document).ready(function(){
    $('.awesome__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: false
    });
    $('.people__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="11"><path fill="#dee1e6" d="M.2 4.8C0 5 0 5.8.2 6.1l3.9 4.6c1 1 1.3-1 1-1.3l-2.5-3h13.6c1 0 1-1.8 0-1.8H2.6l2.6-3c.3-.4.1-2.3-1-1.3l-4 4.5Z"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="11"><path fill="#dee1e6" d="M.2 4.8C0 5 0 5.8.2 6.1l3.9 4.6c1 1 1.3-1 1-1.3l-2.5-3h13.6c1 0 1-1.8 0-1.8H2.6l2.6-3c.3-.4.1-2.3-1-1.3l-4 4.5Z"/></svg></button>'    
    });
});

'use strict';
let spoiler = document.getElementsByClassName('ask__item');
[].forEach.call(spoiler, function(elem) {
    let split = elem.querySelector('.ask__plus');
    if (split) {
        let drop = document.createElement('div');
        drop.className = 'ask__minus';
        drop.style.display = 'none';
        elem.insertBefore(drop, split);
        let targ = elem.lastElementChild;
        while (targ != split) {
            drop.insertBefore(targ,drop.children[0]);
            targ = elem.lastElementChild;
        }
        split.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 13 13"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 7h10M7 2v10"/></svg>'
        split.addEventListener('click', function() {
            if (drop.style.display == 'none') {
                drop.style.display = 'block';
                this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 13 13"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 7h10"/></svg>'
            } else {
                drop.style.display = 'none';
                this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 13 13"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 7h10M7 2v10"/></svg>'
            }
        })
    }
})

// Hamburger menu
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');
    overlayClose = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlayClose.addEventListener('click', () => {
    menu.classList.remove('active');
});

////////// MODAL //////////
 
// Get the button that opens the modal
let btn = document.getElementById("button");
let btn2 = document.getElementById("button-s");

// Get the modal
let modal = document.getElementById("modal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("modal__close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


