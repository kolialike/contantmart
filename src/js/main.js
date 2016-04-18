jQuery(function($){
  var menuBurger = $(".menu-burger");
  var body = $("body");
  menuBurger.on('click', function(event) {
  	event.preventDefault();
  	body.toggleClass('mobile-menu-open');
  });
  var mobileMenu = $(".mobile-menu");
  mobileMenu.on('click', function(event) {
  	event.preventDefault();
  	body.removeClass("mobile-menu-open");
  });
  var mobileMenuItem = $(".mobile-menu-item");
  mobileMenuItem.on('click', function(event) {
  	event.stopPropagation();
  });
});
