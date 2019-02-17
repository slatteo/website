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


$(window).on("scroll",function(){

let positionY = $(this).scrollTop();
console.log(positionY);


if(positionY < 530){
    $(".arrow").css("opacity", 1);
}
if(positionY > 550){
    $(".arrow").css("opacity", 0);
}

})
