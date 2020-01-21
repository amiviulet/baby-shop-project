var navbarLarge = document.getElementById("navbar-large");
var navbarMobile = document.getElementById("navbar-mobile");
var stickyLarge = navbarLarge.offsetTop;
var stickyMobile = navbarMobile.offsetTop;
var featuredItem = document.getElementsByClassName("featured-item") ;

addEventListener("mouseover", function(){
  // this.classList.add("featured-item-hover")

})


function becomeStickyLarge() {
    if (window.pageYOffset > stickyLarge) {
      navbarLarge.classList.add("sticky-navbar");
    } else {
      navbarLarge.classList.remove("sticky-navbar");
    }
  }

  function becomeStickyMobile() {
    if (window.pageYOffset > stickyMobile) {
      navbarMobile.classList.add("sticky-navbar");
    } else {
      navbarMobile.classList.remove("sticky-navbar");
    }
  }

  window.onscroll = function() {
    becomeStickyLarge();
    becomeStickyMobile();
  }

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 1,
      autoplay: true,
      loop: true
  });
  });
  
