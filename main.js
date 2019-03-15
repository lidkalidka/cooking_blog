$(document).ready(function(){

    $("#burger").on("click", function(){
        $("#topnav ul").toggleClass("open");
    });

    let menu =$('#topnav').offset().top;
    console.log(menu);

    let checkMenu = function(){
        if (window.matchMedia("(min-device-width: 1024px)").matches) {
            let windowScroll = $(window).scrollTop();
            console.log(windowScroll);
            if (windowScroll > menu){
                $('#topnav').addClass('sticky');
            } else {
                $('#topnav').removeClass('sticky');
            }
        }  
    }
    checkMenu();
    $(window).scroll(checkMenu);
});