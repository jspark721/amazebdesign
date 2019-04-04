let close = document.querySelector('.navbar-close-icon');
let open = document.querySelector('.navbar-open-icon')
let menu = document.querySelector('.navbar-main-menu');

close.addEventListener('click', function() {
  menu.classList.toggle('close');
  open.classList.toggle('close');
});

open.addEventListener('click', function() {
  menu.classList.toggle('close');
  open.classList.toggle('close');
});
