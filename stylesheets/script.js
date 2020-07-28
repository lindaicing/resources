var darkmode;

$(window).ready(function(){
    // Delay showing Transitions ------------------------------------------------------------
    var delay = ( function() {
        var timer = 0;
        return function(callback, ms) {
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();

    delay(function(){addTransition();}, 10 );
    function addTransition(){
        $("#page, body, nav, #shrink, #shrink span, #darkmode, #switch, #key div, #ethicli").css({
            "-webkit-transition":"all 500ms cubic-bezier(0.515, 0, 0.425, 1)",
            "-webkit-transition":"all 500ms cubic-bezier(0.515, -0.005, 0.425, 1.020)",
            "-moz-transition":"all 500ms cubic-bezier(0.515, -0.005, 0.425, 1.020)",
            "-o-transition":"all 500ms cubic-bezier(0.515, -0.005, 0.425, 1.020)",
            "transition":"all 500ms cubic-bezier(0.515, -0.005, 0.425, 1.020)",
            "-webkit-transition-timing-function":"cubic-bezier(0.515, 0, 0.425, 1)",
            "-webkit-transition-timing-function":"cubic-bezier(0.515, -0.005, 0.425, 1.020)",
            "-moz-transition-timing-function":"cubic-bezier(0.515, -0.005, 0.425, 1.020)",
            "-o-transition-timing-function":"cubic-bezier(0.515, -0.005, 0.425, 1.020)",
            "transition-timing-function":"cubic-bezier(0.515, -0.005, 0.425, 1.020)",
        })
    }

    
    // Resizing ------------------------------------------------------------
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
    }
    if (dm == "false"){
        $("#switch").removeClass("fa-moon");
        $("#switch").addClass("fa-sun");
        $("body").removeClass("darkmode");
    }

    $("#darkmode").click(function(){
         $("#switch").toggleClass("fa-sun fa-moon");
         $("body").toggleClass("darkmode");
         sessionStorage.setItem("DM", $("body").hasClass("darkmode"));
    });
})