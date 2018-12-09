import $ from 'jquery';
import popperJs from 'popper.js';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min';
import 'webpack-jquery-ui/effects';
     // Smooth scrolling using jQuery easing
     $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
       if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         if (target.length) {
           $('html, body').animate({
             scrollTop: (target.offset().top)
           }, 1000, "easeInOutExpo");
           return false;
         }
       }
     });
     // Closes responsive menu when a scroll trigger link is clicked
     $('.js-scroll-trigger').click(function() {
       $('.navbar-collapse').collapse('hide');
     });
     
if(module.hot){
     console.log("hot started vvvv vvv")
}