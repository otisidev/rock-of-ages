(function($){"use strict";$(document).ready(function($){$(".embed-responsive iframe").addClass("embed-responsive-item");$(".carousel-inner .item:first-child").addClass("active");$('[data-toggle="tooltip"]').tooltip();$(document).on('scroll',function(e){var scrollTop=$(document).scrollTop();if(scrollTop>$('#navbar-1').height()){$('#navbar-1').addClass('fixed-top');$('#navbar-1').removeClass('navbar-1');$('#logo').attr('src','images/logo-2.png')}
else{$('#navbar-1').addClass('navbar-1');$('#navbar-1').removeClass('fixed-top');if($(window).width()<991){$('#logo').attr('src','images/logo-2.png')}else{$('#logo').attr('src','images/logo-1.png')}}});$(document).on('scroll',function(e){var scrollTop=$(document).scrollTop();if(scrollTop>$('#navbar-2').height()){$('#navbar-2').addClass('fixed-top');$('#navbar-2').removeClass('navbar-2')}
else{$('#navbar-2').addClass('navbar-2');$('#navbar-2').removeClass('fixed-top')}});$(document).on('scroll',function(e){var scrollTop=$(document).scrollTop();if(scrollTop>$('#navbar-4').height()){$('#navbar-4').addClass('fixed-top');$('#navbar-4').removeClass('navbar-4')}
else{$('#navbar-4').addClass('navbar-4');$('#navbar-4').removeClass('fixed-top')}});if($(window).width()<991){$('#logo').attr('src','images/logo-2.png')}else{$('#logo').attr('src','images/logo-1.png')}
new WOW().init();$('.popup-youtube').magnificPopup({type:'iframe'})});$(window).on('load',function(){$('.preloader').delay(500).fadeOut('slow');$('body').delay(500).css({'overflow':'visible'});$('.owl-carousel').owlCarousel({loop:!0,margin:30,responsiveClass:!0,responsive:{0:{items:1,nav:!0},600:{items:3,nav:!1},1000:{items:3,nav:!0,loop:!1,}}});var $container=$('.portfolioContainer .row');$container.isotope({filter:'*',animationOptions:{duration:750,easing:'linear',queue:!1}});$('.portfolioFilter a').on('click',function(){$('.portfolioFilter a').removeClass('current');$(this).addClass('current');var selector=$(this).attr('data-filter');$container.isotope({filter:selector,animationOptions:{duration:750,easing:'linear',queue:!1}});return!1})})}(jQuery))