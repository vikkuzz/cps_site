var modalChat = document.querySelector('.btn-round--chat-modal');
var buttonOpenMenu = document.querySelector('.btn-round--chat');
var modal = document.querySelector('.wrap-menu');
var buttonCloseMenu = document.querySelector('.menu-right__close-button');
var menu = document.querySelector('.menu-right');
var heightBody = document.querySelector('.dekstop');
var modalLeft = document.querySelector('.sidebar');

var closeMenu = function(className) {
    modal.style.display = 'none';
}

buttonOpenMenu.onclick = function() {
    modal.style.display = "flex";
    heightBody.classList.add('body-height-hidden');
    modal.classList.remove('closed-menu');
}
modalChat.onclick = function() {
    modal.style.display = "flex";
    heightBody.classList.add('body-height-hidden');
    modal.classList.remove('closed-menu');
    modalLeft.classList.add('left-side-menu-hide');
    modalLeft.classList.remove('left-side-menu-open');
}

buttonCloseMenu.onclick = function() {
    heightBody.classList.remove('body-height-hidden');
    modal.classList.add('closed-menu');
    setTimeout(closeMenu, 300);
}
modal.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !buttonCloseMenu.contains(e.target)) {
        heightBody.classList.remove('body-height-hidden');
        modal.classList.add('closed-menu');
        setTimeout(closeMenu, 300);
    }
});