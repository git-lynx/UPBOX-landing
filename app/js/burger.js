$(document).ready(function() {
    $('.burger-menu').click(function(event){
        $('.burger-menu').toggleClass('active');
        $('.burger-nav').toggleClass('active');
        $('body').toggleClass('fixed-page');
    });
});