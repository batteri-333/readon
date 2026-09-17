/* 고탑 버튼 */
$(window).scroll(function () {

    if ($(this).scrollTop() > 300) {
        $('.gotopbtn').addClass('on');
    } else {
        $('.gotopbtn').removeClass('on');
    }

});


$('.gotopbtn').click(function () {

    $('html, body').stop(true).animate({
        scrollTop: 0
    }, 600);

});

/* 고탑 버튼 색상 변경 */
$(window).scroll(function () {

    let scrollTop = $(this).scrollTop();
    let windowHeight = $(window).height();

    let popupTop = $('#popup').offset().top;
    let popupBottom = popupTop + $('#popup').outerHeight();

    let booktalkTop = $('#booktalk').offset().top;
    let booktalkBottom = booktalkTop + $('#booktalk').outerHeight();

    let buttonPosition = scrollTop + windowHeight - 100;

    if (
        (buttonPosition >= popupTop && buttonPosition <= popupBottom) ||
        (buttonPosition >= booktalkTop && buttonPosition <= booktalkBottom)
    ) {
        $('.gotopbtn').addClass('white');
    } else {
        $('.gotopbtn').removeClass('white');
    }

});

/* 헤더 스크롤 */
let prevScroll = $(window).scrollTop();

$(window).on('scroll', function () {

    let currentScroll = $(this).scrollTop();

    if (currentScroll > 40) {
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }

    if (currentScroll > prevScroll && currentScroll > 100) {
        $('.headerinner').addClass('hide');
    } else if (currentScroll < prevScroll) {
        $('.headerinner').removeClass('hide');
    }

    prevScroll = currentScroll;
});

/* 언어 선택 표시 */
const languageButtons = document.querySelectorAll('.language p');

languageButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        languageButtons.forEach(function (item) {
            item.classList.remove('active');
        });

        button.classList.add('active');
    });
});


/* 북마크라이트 이미지 변경 */
const booklightImage = document.getElementById('booklightImage');
const giftDots = document.querySelectorAll('.gift_dots button');

giftDots.forEach(function (dot) {
    dot.addEventListener('click', function () {
        booklightImage.src = dot.dataset.image;

        giftDots.forEach(function (item) {
            item.classList.remove('active');
        });

        dot.classList.add('active');
    });
});





/* 공유 버튼 */
const shareButtons = document.querySelectorAll('.sharebtn, .dmsharebtn');
const shareToast = document.querySelector('.sharetoast');

function showToast() {
    shareToast.classList.add('on');

    setTimeout(function () {
        shareToast.classList.remove('on');
    }, 1800);
}

shareButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const currentUrl = window.location.href;

        if (navigator.clipboard) {
            navigator.clipboard.writeText(currentUrl).then(showToast);
        } else {
            showToast();
        }
    });
});


/* ESC 키로 팝업 닫기 */
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});
/* 스토리 슬라이드 */
const storyProgress = document.querySelectorAll('.story-progress span');

const storySwiper = new Swiper('.story-swiper', {

    loop: true,

    speed: 500,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    on: {
        init: function () {
            updateStoryProgress(this.realIndex);
        },

        slideChange: function () {
            updateStoryProgress(this.realIndex);
        }
    }

});


/* 스토리 진행바 */
function updateStoryProgress(index) {

    storyProgress.forEach(function (bar, barIndex) {

        bar.classList.remove('active', 'done');

        if (barIndex < index) {
            bar.classList.add('done');
        }

        if (barIndex === index) {
            void bar.offsetWidth;
            bar.classList.add('active');
        }

    });

}

