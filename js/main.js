$(document).ready(function () {
  const body = $("body");
  
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