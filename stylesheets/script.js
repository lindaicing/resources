$(document).ready(function(){
    $("#sandwich").click(function(){
        $("#page, nav, h1").toggleClass("showNav");
    });

    $("#keymoji").click(function(){
        $("#key div").toggleClass("keyClicked");
    });

    $('nav').on('swipe',function(){
        $("#key div").removeClass("keyClicked");
        alert("swiped");
    } );

    $(window).bind("resize", function () {
        if ($(this).width() > 600) {
            $("#page, nav, h1").removeClass("showNav");
            $("#key div").removeClass("keyClicked");
        }
    }).trigger('resize');
})

$(function(){
    // Bind the swipeleftHandler callback function to the swipe event on div.box
    $( "nav" ).on( "swipeleft", swipeleftHandler );
   
    // Callback function references the event target and adds the 'swipeleft' class to it
    function swipeleftHandler( event ){
      alert("yah");
    }
});