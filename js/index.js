window.addEventListener('load', function () {
    var $button = document.querySelector('.nav-btn');
    var $menu = document.querySelector('nav');
    $button.addEventListener('click', function () {
        if ($menu.classList.contains('is-show')) {
            $menu.classList.remove('is-show');
            $button.classList.remove('is-show');
        } else {
            $menu.classList.add('is-show');
            $button.classList.add('is-show');
        }
    });
    $('.slid').slick({
        autoplay: true, //自動再生
        arrows: false, //左右に出る矢印を非表示
        autoplaySpeed: 0, //自動再生時のスライド切り替えの時間
        speed: 5000, //スライドが流れるスピード

    });
});