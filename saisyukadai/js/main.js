
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
    $(".p-sidemenu").toggleClass("is-open");
    $(".p-sidemenu__overlay").toggleClass("is-open");
    $("body").toggleClass("is-open");
  });

// オーバーレイをクリックしたときにメニューを閉じる
  $(".p-sidemenu__overlay").on("click", function() {
    $(".js-hamburger").removeClass("is-open");
    $(".p-sidemenu").removeClass("is-open");
    $(this).removeClass("is-open");
    $("body").removeClass("is-open");
  });
});