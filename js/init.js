$(document).ready(function () {
    $(".box").hide();
    $("h4").click(function(){
        var index = $(this).index("h4");
        $(".box:eq("+index+")").slideToggle();
        $(this).addClass("active");
    })
});