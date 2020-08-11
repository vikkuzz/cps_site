var wrapp = document.querySelector('.main-info__block');
var height = wrapp.style.height;
var buttonViewAll = document.querySelector('.main-info__btn');

var isTextShow = true;
buttonViewAll.addEventListener("click", function() {
    if (isTextShow)
{
    wrapp.style.height = 'auto';
    buttonViewAll.classList.add('arrowUp');
    buttonViewAll.textContent = 'Скрыть текст';
    isTextShow  = false;
}
else
{
    wrapp.style.height = height;
    buttonViewAll.classList.remove('arrowUp');
    buttonViewAll.textContent = 'Читать далее';
    isTextShow  = true;
}
});

var wrap = document.querySelector('.swiper-wrapper');
var buttonShowAll = document.querySelector('.body-slyder__read-more-button');
var isSlideView = true;

buttonShowAll.addEventListener("click", function() {
    if (isSlideView)
{
    wrap.classList.add('swiper-wrapper--height');
    buttonShowAll.classList.add('arrowUp');
    buttonShowAll.textContent = 'Скрыть';
    isSlideView  = false;
}
else
{
    wrap.classList.remove('swiper-wrapper--height');
    buttonShowAll.classList.remove('arrowUp');
    buttonShowAll.textContent = 'Показать всё';
    isSlideView  = true;
}
});

var wrap2 = document.querySelector('.swiper-wrapper2');
var buttonShowAll2 = document.querySelector('.body-slyder__read-more-button2');
var isSlideView2 = true;

buttonShowAll2.addEventListener("click", function() {
    if (isSlideView2)
{
    wrap2.classList.add('swiper-wrapper2__height');
    buttonShowAll2.classList.add('arrowUp');
    buttonShowAll2.textContent = 'Скрыть';
    isSlideView2  = false;
}
else
{
    wrap2.classList.remove('swiper-wrapper2__height');
    buttonShowAll2.classList.remove('arrowUp');
    buttonShowAll2.textContent = 'Показать всё';
    isSlideView2  = true;
}
});

