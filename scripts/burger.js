let burger = document.querySelector('.header__burger');
let nav = document.querySelector('.header__nav__list');
let body = document.querySelector('body');
let burgerList = document.querySelector('.burger__nav__list');

burger.addEventListener('click', function() {
  burger.classList.toggle('isActive');
  nav.classList.toggle('burger__on');
  body.classList.toggle('overflow')
})

burgerList.addEventListener('click', function() {
  burger.classList.remove('isActive');
  nav.classList.remove('burger__on');
  body.classList.remove('overflow')
})


//плавная прокрутка
// $(document).ready(function(){
// 	$(".header__nav__list").on("click","a", function (event) {
// 		event.preventDefault(); //опустошим стандартную обработку
// 		var id  = $(this).attr('href'), //заберем айдишник блока с параметром URL
// 			top = $(id).offset().top; //определим высоту от начала страницы до якоря
// 	$('body,html').animate({scrollTop: top}, 1000); //сделаем прокрутку за 1 с
// 	});
// });
