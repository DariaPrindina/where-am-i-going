var menuBtn = document.querySelector('.header__burger');
var menu = document.querySelector('.header__menu');
var menuSpan = document.querySelector('.header__span');
var body = document.querySelector('.root');
if(menuBtn){
  menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    menuSpan.classList.toggle('active');
    body.classList.toggle('lock');
  });
}
