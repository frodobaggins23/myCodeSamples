/* carousel zamestnani [jQuery]*/

var slide = 0;

function changeSlide(sld) {
  if (sld == 0) {
    $("[data-zamestnani='cvt']").removeClass("hidden");
    $("[data-zamestnani='bsh']").addClass("hidden");
    $("[data-zamestnani='avast']").addClass("hidden");
  } else if (sld == 1) {
    $("[data-zamestnani='cvt']").addClass("hidden");
    $("[data-zamestnani='bsh']").removeClass("hidden");
    $("[data-zamestnani='avast']").addClass("hidden");
  } else {
    $("[data-zamestnani='cvt']").addClass("hidden");
    $("[data-zamestnani='bsh']").addClass("hidden");
    $("[data-zamestnani='avast']").removeClass("hidden");
  }
}

$("#arrPrevious").click(function() {
  if (slide == 0) {
    slide = 2;
  } else {
    slide--;
  }
  console.log(slide);
  changeSlide(slide);
});

$("#arrNext").click(function() {
  if (slide == 2) {
    slide = 0;
  } else {
    slide++;
  }
  console.log(slide);
  changeSlide(slide);
});

/* carousel zamestnani - END */

/* dovednosti toggle box [jQuery]*/

$(".toggleCross").click(function() {
  var toggleId = $(this).attr("data-dovednost");
  console.log(toggleId);
  $('.dovednost-box[data-dovednost="' + toggleId + '"] .overlay').toggleClass(
    "show"
  );
});

/*vzdelani animace knih [jQuery]*/
$(".vzdelani-box").hover(function() {
  console.log("mouse");
  $(this).toggleClass("hover");
});

/*scrolling events [Vanilla JS]*/
var prevOffset = window.pageYOffset;
window.addEventListener("scroll", function() {
  /* hiding navigation on scroll*/
  if (window.pageYOffset >= 68) {
    if (window.pageYOffset > prevOffset) {
      document.querySelectorAll(".navigace")[0].style.top = "-68px";
    } else {
      document.querySelectorAll(".navigace")[0].style.top = "0";
    }
    prevOffset = window.pageYOffset;
  }

  /*show scrool to top button*/
  if (window.pageYOffset >= 1000) {
    document.querySelectorAll(".scrollTop")[0].classList.add("show");
  } else {
    document.querySelectorAll(".scrollTop")[0].classList.remove("show");
  }
});

document
  .querySelectorAll(".scrollTop")[0]
  .addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });

// Get the current year for the copyright
$("#year").text(new Date().getFullYear());
