
$(document).ready(function(){
    $(".answer").hide();
    $("#myImg").hide();
    $("#showimg").on('click',function(){
        $("#myImg").toggle();
    });

    $(".question").on('click', function(){
        $(".answer").slideToggle("slow");
    })
});