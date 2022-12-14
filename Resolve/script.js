
$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Dizajna", " Osnovne Seo optimizacije","UX / UI ", "Web developinga", "Logo dizajna", "E-commerce resenja"],
        typeSpeed: 120,
        backSpeed: 20,
        loop: true
    });
    var typed = new Typed(".typing-1", {
        strings: ["Petar"],
        typeSpeed: 120,
        backSpeed: 20,
        loop: true
    });
    var typed = new Typed(".typing-4", {
        strings: ["svim posetiocima"],
        typeSpeed: 120,
        backSpeed: 20,
        loop: true
    });
  

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Web Dizajner", "Freelancer"],
        typeSpeed: 120,
        backSpeed: 20,
        loop: true
    });
});
//counter 


