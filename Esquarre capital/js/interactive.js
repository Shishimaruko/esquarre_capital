$(document).ready(function(){

    // Nav 高亮標示當前頁面
    var currentURL = window.location.href;
    $('.nav-right li a').each(function() {
        var linkURL = $(this).attr('href');
        if (currentURL.indexOf(linkURL) !== -1) {
            $(this).addClass('menu_active');
        }
    });

    // Side-Nav slide in & out
    $('.nav_burger').click(function(){
        $('#side-nav').toggleClass('side_nav_show');
        event.stopPropagation();
    })

    // Nav 滑動後產生白底
    $(window).scroll(function() {
        var scrollHeight = $(window).scrollTop();
        var nav = $('nav');

        if (scrollHeight > 400) {
           nav.css('background-color', 'white');
        } else {
           nav.css('background-color', 'transparent');
        }
    });

    // Side nav slide in & out
    $(document).click(function (event) {
        if (!$(event.target).closest('#side-nav').length) {
            $('#side-nav').removeClass('side_nav_show');
        }
    });

    // Insight card 字數上限
    $(function(){
        var len = 110; // 字元數設定
        $(".text").each(function(i){
            if($(this).text().length>len){
                $(this).attr("title",$(this).text());
                var text=$(this).text().substring(0,len-1)+"...";
                $(this).text(text);
            }
        });
    });
})

