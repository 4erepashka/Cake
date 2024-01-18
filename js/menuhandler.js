let burgermenu = document.querySelector('.header__nav__burger-btn');
let menu =document.querySelector('.header__nav__burger-menu');

[...document.querySelectorAll('.header__nav__burger-menu-element')].forEach(item => {
  item.addEventListener('click', function() {
    menu.classList.remove('header__nav__burger-menu_active');
    burgermenu.classList.remove('header__nav__burger-btn_active');
  });
});

burgermenu.addEventListener('click', function(){
    menu.classList.toggle('header__nav__burger-menu_active');
    burgermenu.classList.toggle('header__nav__burger-btn_active');
});
