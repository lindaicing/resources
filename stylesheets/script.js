$(document).ready(function(){
    $("#sandwich").click(function(){
        $("#page, nav, h1").toggleClass("showNav");
    });

    $("#keymoji").click(function(){
        $("#key div").toggleClass("keyClicked");
    });

    $(window).bind("resize", function () {
        if ($(this).width() > 600) {
            $("#page, nav, h1").removeClass("showNav");
            $("#key div").removeClass("keyClicked");
        }
    }).trigger('resize');

    //Swipeup function from http://jsfiddle.net/Q3d9H/1/
    !function(){var o=$.support.touch,e=o?"touchstart":"mousedown",i=o?"touchend":"mouseup",t=o?"touchmove":"mousemove";$.event.special.swipeupdown={setup:function(){var o=$(this);o.bind(e,function(e){var n,s=e.originalEvent.touches?e.originalEvent.touches[0]:e,u={time:(new Date).getTime(),coords:[s.pageX,s.pageY],origin:$(e.target)};function c(o){if(u){var e=o.originalEvent.touches?o.originalEvent.touches[0]:o;n={time:(new Date).getTime(),coords:[e.pageX,e.pageY]},Math.abs(u.coords[1]-n.coords[1])>10&&o.preventDefault()}}o.bind(t,c).one(i,function(e){o.unbind(t,c),u&&n&&n.time-u.time<1e3&&Math.abs(u.coords[1]-n.coords[1])>30&&Math.abs(u.coords[0]-n.coords[0])<75&&u.origin.trigger("swipeupdown").trigger(u.coords[1]>n.coords[1]?"swipeup":"swipedown"),u=n=void 0})})}},$.each({swipedown:"swipeupdown",swipeup:"swipeupdown"},function(o,e){$.event.special[o]={setup:function(){$(this).bind(e,$.noop)}}})}();

    $('nav').on('swipeup',function(){
        $("#page, nav, h1").removeClass("showNav");
    } );
})
