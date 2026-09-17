$(function () {

    let currentIndex = 0;

    const $popupWrap = $('.popupwrap');
    const total = $popupWrap.children().length;


    /* 팝업 바로 이동 */
    function moveSlideInstant() {

        const slideWidth = $popupWrap.innerWidth();

        $popupWrap.stop(true, true).scrollLeft(
            slideWidth * currentIndex
        );

    }


    /* 팝업 슬라이드 이동 */
    function moveSlide() {

        const slideWidth = $popupWrap.innerWidth();

        $popupWrap.stop().animate({
            scrollLeft: slideWidth * currentIndex
        }, 500);

    }


    /* 인물 클릭 */
    $('.speakerwrap figure').click(function () {

        currentIndex = $('.speakerwrap figure').index(this);

        $('.entirewrap').show();

        moveSlideInstant();

    });


    /* 다음 인물 */
    $('.next img:last-child').click(function () {

        currentIndex++;

        if (currentIndex >= total) {
            currentIndex = 0;
        }

        moveSlide();

    });


    /* 이전 인물 */
    $('.next img:first-child').click(function () {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = total - 1;
        }

        moveSlide();

    });


    /* 팝업 닫기 */
    $('.out img').click(function () {

        $('.entirewrap').fadeOut();

    });

});