var wrapp = document.querySelector('.main-info__block');
var height = wrapp.style.height;
var buttonViewAll = document.querySelector('.main-info__btn');

var isTextShow = true;
buttonViewAll.addEventListener("click", function() {
    if (isTextShow)
{
    wrapp.style.height = 'auto';
    buttonViewAll.textContent = 'Скрыть текст';
    isTextShow  = false;
}
else
{
    wrapp.style.height = height;
    buttonViewAll.textContent = 'Читать далее';
    isTextShow  = true;
}
});

var wrap = document.querySelector('.swiper-wrapper1');
var buttonShowAll = document.querySelector('.info-more__name1');
var isSlideView = true;

buttonShowAll.addEventListener("click", function() {
    if (isSlideView)
{
    wrap.classList.add('swiper-wrapper--height');
    buttonShowAll.textContent = 'Скрыть';
    isSlideView  = false;
}
else
{
    wrap.classList.remove('swiper-wrapper--height');
    buttonShowAll.textContent = 'Показать всё';
    isSlideView  = true;
}
});

var wrap2 = document.querySelector('.swiper-wrapper2');
var buttonShowAll2 = document.querySelector('.info-more__name2');
var isSlideView2 = true;

buttonShowAll2.addEventListener("click", function() {
    if (isSlideView2)
{
    wrap2.classList.add('swiper-wrapper2--height');
    buttonShowAll2.textContent = 'Скрыть';
    isSlideView2  = false;
}
else
{
    wrap2.classList.remove('swiper-wrapper2--height');
    buttonShowAll2.textContent = 'Показать всё';
    isSlideView2  = true;
}
});

