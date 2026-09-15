$(function () {

    const $pages = $('.goods-page1, .goods-page2, .goods-page3');
    const $navItems = $('.side-nav li');
    const $menuButtons = $('.menu-toggle');


    /* 등장 애니메이션 */
    $('.main-img, .scent-intro h1, .reading-intro h1, .page-intro h1')
        .addClass('reveal');


    /* 페이지 메뉴 */
    $navItems.on('click', function () {

        const targetPage = $(this).data('page');

        // 모든 페이지 숨기기
        $pages.hide();

        // 선택한 페이지 보이기
        $('.' + targetPage).show();

        // active 변경
        $navItems.removeClass('active');
        $(this).addClass('active');

        // 모바일 메뉴 닫기
        $('.side-nav ul').removeClass('open');

        // 스크롤 맨 위
        $(window).scrollTop(0);

        // reveal 초기화
        $('.reveal').removeClass('show');

        // 현재 페이지 등장
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


    // 첫 페이지 등장
    $('.goods-page1 .reveal').each(function (index) {

        const $item = $(this);

        setTimeout(function () {
            $item.addClass('show');
        }, index * 150);

    });

});