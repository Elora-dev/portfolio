$(document).ready(function() {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
        $('.bar.half').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
        $('.top-nav').removeClass('open');
        $('.bar.half').removeClass('open');
    
    });

    // $('nav a[href*="#"]').on('click', function() {
    //     $('html,body').animate(keyframes: {
    //         scrollTop: $($(this).attr('href')).offset().top - 100
    //     }, options:2000);
    // });

//     $('#up').on('click', function() {
//         $('.top-nav').toggleClass('open');
        
    


 });
 AOS.init({
    duration: 1200,
  })
