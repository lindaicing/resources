var darkmode;

$(document).ready(function(){
    $("#sandwich").click(function(){
        $("nav").toggleClass("showNav");
    });

    $("#keymoji").click(function(){
        $("#key div").toggleClass("keyClicked");
    });

    $(window).bind("resize", function () {
        if ($(this).width() > 600) {
            $("nav").removeClass("showNav");
            $("#key div").removeClass("keyClicked");
            $("#shrink span").css({"display":"block"});
        }else{
            $("#shrink span").css({"display":"none"});
        }
    }).trigger('resize');


    // Hide Nav ------------------------------------------------------------
    $("#shrink").click(function(){
        $("#page, nav").toggleClass("shrinkNav");
        $("#shrink span p").toggleClass("switchDirection");
    });
    

    // Scroll functions ------------------------------------------------------------
    $(window).bind('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta < 0) {
            $("nav").removeClass("showNav");
        }
    });
    (function () {
        var previousScroll = 0;
        $(window).scroll(function () {
           var currentScroll = $(this).scrollTop();
           if (currentScroll >= previousScroll){
               $("nav").removeClass("showNav");
           }
           previousScroll = currentScroll;
        });
    }());


    // Confetti --------------------------------------------------------------------
    // Code an altered version of the one from https://www.cssscript.com/confetti-falling-animation/
    $("#confetti").click(function(){
        confetti.start(2000, 50);
    });

    
    // Darkmode Let's Goooooo ------------------------------------------------------
    var dm = sessionStorage.getItem("DM");
    if (dm == "true"){ // If darkmode is true
        $("#switch").addClass("fa-moon");
        $("#switch").removeClass("fa-sun");
        $("body").addClass("darkmode");
        console.log("SSDM1 = "+sessionStorage.getItem("DM"));
    }
    if (dm == "false"){
        $("#switch").removeClass("fa-moon");
        $("#switch").addClass("fa-sun");
        $("body").removeClass("darkmode");
        console.log("SSDM2 = "+sessionStorage.getItem("DM"));
    }

    $("#darkmode").click(function(){
         $("#switch").toggleClass("fa-sun fa-moon");
         $("body").toggleClass("darkmode");
         sessionStorage.setItem("DM", $("body").hasClass("darkmode"));
    });
})