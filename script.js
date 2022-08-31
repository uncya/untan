// バーガーをクリックしたらメニューにis-activeがなければを付与する、あれば外す。
$('.burger').click(function(){
    $(".burger").toggleClass("is-active");
    $(".menu").toggleClass("is-active");
});
