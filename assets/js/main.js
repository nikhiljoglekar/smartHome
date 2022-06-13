// header menu on the page scroll 
$(document).ready(function() {
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

    // header menu responsive
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

    // signup form 
    let userDetails = {
        name:'',
        password:'',
        email:'',
        contact:'',
    };
    let inputs = document.querySelectorAll('.form-item input');
    let submitBtn = document.querySelector('#submit')
    inputs.forEach((inputItem)=>{
        inputItem.addEventListener('change',function(){
            userDetails[`${this.id}`] = this.value;
        });
    });
    submitBtn.addEventListener('click',function(e){
        e.preventDefault();
        if(Object.values(userDetails).every((value) => value !== '')){
            console.log(userDetails);
            localStorage.setItem(`Details of ${userDetails.name}`,JSON.stringify(userDetails));
            location.reload();
        }else{
            alert('Please fill all the details');
        }
    });

    // faq accordion
    $(function() {
        var $radioButtons = $('input[type="radio"]');
        $radioButtons.click(function() {
            $radioButtons.each(function() {
                $(this).parent().toggleClass('active', this.checked);
            });
        });
    });

    // modal
    $(".btn-signup").click(function(){
        $('#signup-form-modal').show();
    });
    $(".close").click(function() {
        $("#signup-form-modal").hide();
    });

    $('.testimonial-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ["<img src='assets/images/arrow.png'>","<img src='assets/images/arrow.png'>"],
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

});