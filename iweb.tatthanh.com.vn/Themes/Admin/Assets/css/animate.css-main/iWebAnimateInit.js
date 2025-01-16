$(window).scroll(function(){
    $("[class*='wait_a_']").each(function () {
        var animateName = GetAnimateName($(this).attr("class"));

        if ($(this).offset().top + $(this).height() < $(window).scrollTop() || $(this).offset().top > $(window).scrollTop() + $(window).height()) {            
            $(this).removeClass("animate__animated animate__" + animateName);
        }
        else {
            $(this).addClass("animate__animated animate__" + animateName);
        }
    });
});

function GetAnimateName(classes) {
    var s = "";
    classes.split(' ').forEach(function (item) {
        if (item.startsWith("wait_a_"))
            s = item.replace("wait_a_", "");
    });

    return s;
}