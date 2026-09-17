$(function () {

    const $pages = $('.goods-page1, .goods-page2, .goods-page3');
    const $navItems = $('.side-nav li');
    const $menuButtons = $('.menu-toggle');


    /* 초기 페이지 설정 */
    const hash = window.location.hash;

    $pages.hide();

    let startPage = 'goods-page1';

    if (hash === '#reading') {
        startPage = 'goods-page2';
    } else if (hash === '#photozone') {
        startPage = 'goods-page3';
    } else if (hash === '#perfume') {
        startPage = 'goods-page1';
    }

    $('.' + startPage).show();


    /* 등장 애니메이션 */
    $('.main-img, .scent-intro h1, .reading-intro h1, .page-intro h1')
        .addClass('reveal');


    /* 페이지 메뉴 */
    $navItems.on('click', function () {

        const targetPage = $(this).data('page');

        $pages.hide();

        $('.' + targetPage).show();

        $navItems.removeClass('active');

        $('.side-nav li[data-page="' + targetPage + '"]')
            .addClass('active');

        $('.side-nav ul').removeClass('open');

        $(window).scrollTop(0);

        $('.reveal').removeClass('show');

        $('.' + targetPage + ' .reveal').each(function (index) {

            const $item = $(this);

            setTimeout(function () {
                $item.addClass('show');
            }, index * 150);

        });

    });


    /* 햄버거 메뉴 */
    $menuButtons.on('click', function () {

        $(this)
            .closest('.side-nav')
            .find('ul')
            .toggleClass('open');

    });


    /* 처음 페이지 등장 */
    $('.' + startPage + ' .reveal').each(function (index) {

        const $item = $(this);

        setTimeout(function () {
            $item.addClass('show');
        }, index * 150);

    });

});