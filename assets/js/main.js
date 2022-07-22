$(document).ready(function() {
    // header menu on the page scroll 
    'use strict';
    var c, currentScrollTop = 0,
        navbar = $('#site-header');
    $(window).scroll(function() {
        var a = $(window).scrollTop();
        var b = navbar.height();
        currentScrollTop = a;
        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("scrollUp");

        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;
    });

    // responsive header menu 
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.addEventListener("click", mobileMenu);
    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
    const navLink = document.querySelectorAll(".nav-link");
    navLink.forEach(n => n.addEventListener("click", closeMenu));
    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    $('.metaverse-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:2,
                nav:true,
                loop:true
            },
            600:{
                items:3,
                nav:true,
                loop:true
            },
            1000:{
                items:5,
                nav:true,
                loop:true
            }
        }
    })

});
