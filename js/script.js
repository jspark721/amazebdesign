let close = document.querySelector('.navbar-icon');
let menu = document.querySelector('.navbar-main-menu')

close.addEventListener('click', function() {
  menu.classList.toggle('close');
});
