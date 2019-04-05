let close = document.querySelector('.nav-close-icon');
let open = document.querySelector('.navbar-open-icon')
let menu = document.querySelector('.nav-main');
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

close.addEventListener('click', function() {
  menu.classList.toggle('close');
  open.classList.toggle('nodisplay');
});

open.addEventListener('click', function() {
  menu.classList.toggle('close');
  open.classList.toggle('nodisplay');
});


window.onscroll = function() {
  stickyFunction();
};


function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
