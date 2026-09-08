$(document).ready(function() {
    $(".alternation-tab__item").click(function() {
        let imageClass = $(this).data("image");

        $(".alternation-tab__item").removeClass("active");
        $(".item-alternation-tab__descr").hide();
        $(".desktop-img").removeClass("active");
        $(".mobile-img").removeClass("mobile-active");

        $(this).addClass("active");
        $(this).find(".item-alternation-tab__descr").show();

        $(".desktop-img." + imageClass).addClass("active");
        $(".mobile-img." + imageClass).addClass("mobile-active");
    });
});