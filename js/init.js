$(document).ready(function () {
    $(".box").hide();
    $("h4").click(function(){
        var index = $(this).index("h4");
        $(".box:eq("+index+")").stop().slideToggle();
        $(this).toggleClass("active")
        if ($(this).hasClass("active")){
            $(this).find("i").removeClass("far fa-arrow-alt-circle-down");
            $(this).find("i").addClass("far fa-arrow-alt-circle-up");
        }else{
            $(this).find("i").removeClass("far fa-arrow-alt-circle-up");
            $(this).find("i").addClass("far fa-arrow-alt-circle-down");


        }
    })
});



/*$(document).ready(function () {
    $(".box").hide();
    $("h4").click(f)
})*/