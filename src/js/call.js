var modalCall = document.querySelector('.btn-round--call-modal');
var buttonOpenMenu = document.querySelector('.btn-round--call');
var modal = document.querySelector('.wrap-call');
var buttonCloseMenu = document.querySelector('.wrap-call__close-button');
var menu = document.querySelector('.call-menu');
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
modalCall.onclick = function() {
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