const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});
// counter 


$(document).ready(function() {

  $('.counter').each(function () {
$(this).prop('Counter',0).animate({
  Counter: $(this).text()
}, {
  duration: 4000,
  easing: 'swing',
  step: function (now) {
      $(this).text(Math.ceil(now));
  }
});
});

});  

$(document).ready(function() {

  showButtonText(1);


  $('#btn-1,#btn-2').click(function() {
    var btn = $(this).data("showbutton");
    showButtonText(btn);
  });
});

function showButtonText(btn) {

  $('.text').hide();
  $('[data-button]').hide();
  $('[data-showbutton]').removeClass('clicked');
  $('[data-showbutton=' + btn + ']').addClass('clicked');
  $('[data-button=' + btn + ']').show();
}
// country code 
$("#call-input").intlTelInput({
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js",
  initialCountry: "sa", 
  showSelectedDialCode:true,
});

$("#call-input-2").intlTelInput({
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js",
  initialCountry: "sa", 
  showSelectedDialCode: true,
});
$(document).ready(function() {
  $('#member ul li .nav-link').click(function() {
    $('#member ul li .nav-link').removeClass('active');
    $(this).addClass('active');
  });
});

// ====================
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.moreDetails').forEach(function(item) {
      item.style.display = 'none';
  });
}); 
// ==================

function openImg(imageUrl, event) {
  event.stopPropagation(); 
  var imageLayer = document.getElementById('imageLayer');
  var displayedImage = document.getElementById('displayedImage');

  displayedImage.src = imageUrl;
  imageLayer.style.display = 'block';
}

// Function to close image layer
function closeImg() {
  var imageLayer = document.getElementById('imageLayer');
  imageLayer.style.display = 'none';
}
// =========
// document.querySelectorAll('#video video').forEach(vid => {
//   vid.onclick = () => {
//     document.querySelector('.popup-video').style.display = 'block';
//     const src = vid.getAttribute('src');
//     document.querySelector('.popup-video video').src = src;
//   }
// });

// document.querySelector('.popup-video span').onclick = () => {
//   document.querySelector('.popup-video').style.display = 'none';
// }
