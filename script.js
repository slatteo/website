var nav = document.getElementById('nav');
var navlinks = nav.getElementsByTagName('a');

function toggleNav() {
    (nav.classList.contains('active')) ? nav.classList.remove('active') : nav.classList.add('active');
  }

document.getElementById('nav-icon').addEventListener('click', function(e) {
    e.preventDefault();
    toggleNav();
});

for(var i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener('click', function() {
      toggleNav();
  });
}

// Bouncing arrow bottom of full screen
// Different arrow choices from Font Awesome
// Fades away as you scroll down

$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 500); 
  //250 is fade pixels
  });