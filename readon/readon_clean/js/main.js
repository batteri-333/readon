/* 헤더 스크롤 배경 */
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
        header.classList.add('on');
    } else {
        header.classList.remove('on');
    }
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


/* 좋아요 버튼 */
const likeButton = document.querySelector('.likebtn');

likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('on');
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

