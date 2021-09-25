$(document).ready(function () {
  const body = $("body");
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("showpopup");

  if (myParam) {
    setTimeout(() => {
      $("#registerSuccessModal").modal("show");
    }, 250);
  }

  setTimeout(() => {
    $("#registerSuccessModal").on("hidden.bs.modal", function () {
      window.history.pushState({}, document.title, window.location.pathname);
    });
  }, 250);


  var script = {
    navbarToggle: function () {
      setTimeout(() => {
        const navbar = $("#navbar-toggle");
        navbar.click(function () {
          const scope = $(this).parents(".header-wrapper");
          const navbarContent = scope.find(".navbar-wrapper-mobile");
          body.toggleClass("hide-scroll");
          navbarContent.toggleClass("show");
        });
      }, 200);
    },
    init: function () {
      AOS.init({
        once: true,
      });
      this.navbarToggle();
    },
  };
  script.init();
});
