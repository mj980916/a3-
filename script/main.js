$(function(){

    $(".main > li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    }, function(){
        $(".main > li").find(".sub").stop().slideUp();
    })//hover

    // 슬라이드이미지 영역
    $(".fade li").eq(0).siblings().hide();

    var n = 0
    setInterval(function(){

        n = (n + 1) % 3;
        console.log("n :", n)

        $(".fade li").eq(n).fadeIn().siblings().fadeOut();

    }, 3000)

    $(".cont1 h2").click(function(){
        $(".cont1 h2").addClass("b_on")
        $(this).removeClass("b_on");

        $(".cont1 ul").hide();
        $(this).next().css({display : "flex"})
    })

    $(".popup").click(function(){
        $(".pop").show()
    })

    $(".close").click(function(){
        $(".pop").hide()
    })
})//jQ fin.
