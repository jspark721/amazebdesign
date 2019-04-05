let close = document.querySelector('.nav-close-icon');
let open = document.querySelector('.navbar-open-icon')
let menu = document.querySelector('.nav-main');

close.addEventListener('click', function() {
  menu.classList.toggle('close');
  open.classList.toggle('nodisplay');
});

open.addEventListener('click', function() {
  menu.classList.toggle('close');
  open.classList.toggle('nodisplay');
});
