

$(document).ready(function() {
  $('.destianation-all').owlCarousel({
    items: 3,
    loop: true,
    autoplay: true, 
    autoplayTimeout: 3000, 
    nav: false,
    autoplayHoverPause: true,
    margin:30,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 1
      },
      992: {
        items: 3
      }
    }
  });

});

document.addEventListener("DOMContentLoaded", function() {
  const readElements = document.querySelectorAll(".read");
  const maxLength = 200;

  readElements.forEach(element => {
    if (element.innerText.length > maxLength) {
      element.innerText = element.innerText.slice(0, maxLength) + "...";
    }
  });
});

// animation

  new WOW().init();