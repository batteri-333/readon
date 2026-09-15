$(function(){
    $('.out').click(function(){
        $('.wrap').hide()
    })
    
    
})
$(function () {

    let currentIndex = 0;

    const $popupWrap = $('.popupwrap');

    const total = $popupWrap.children().length;


    // 오른쪽 화살표 = 다음 인물
    $('.next img:last-child').click(function () {

        currentIndex++;

        // 마지막 인물 다음 → 첫 번째 인물
        if (currentIndex >= total) {
            currentIndex = 0;
        }

        moveSlide();
    });


    // 왼쪽 화살표 = 이전 인물
    $('.next img:first-child').click(function () {

        currentIndex--;

        // 첫 번째에서 이전 → 마지막 인물
        if (currentIndex < 0) {
            currentIndex = total - 1;
        }

        moveSlide();
    });


    function moveSlide() {

        const slideWidth = $popupWrap.innerWidth();

        $popupWrap.stop().animate({
            scrollLeft: slideWidth * currentIndex
        }, 500);

    }

});
