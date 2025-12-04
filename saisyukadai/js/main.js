
jQuery(function ($) {
  $(".js-fade-link").on("click", function (e) {
    e.preventDefault();
    var href = $(this).attr("href");

    $("body").fadeOut(300, function () {
      window.location.href = href;
    });
  });
});

jQuery(function ($) {
  // ハンバーガーメニューの開閉
  $(".js-hamburger").on("click", function () {
    $(this).toggleClass("is-open");
    $(".c-sidemenu").toggleClass("is-open");
    $(".c-sidemenu__overlay").toggleClass("is-open");
    $("body").toggleClass("is-open");
  });

// オーバーレイをクリックしたときにメニューを閉じる
  $(".c-sidemenu__overlay").on("click", function() {
    $(".js-hamburger").removeClass("is-open");
    $(".c-sidemenu").removeClass("is-open");
    $(this).removeClass("is-open");
    $("body").removeClass("is-open");
  });
});