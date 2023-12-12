// popup
let popup = document.querySelector('.popup'),
  closeBtn = popup.querySelector('#close'),
  dayCheck = popup.querySelector('#day-check');

function setCookie(name, value, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);
  document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
}

function cookieCheck(name) {
  let cookieArr = document.cookie.split(';');
  let visited = false;

  for (let cookie of cookieArr) {
    if (cookie.search(name) > -1) {
      visited = true;
      break;
    }
  }

  if (!visited) {
    popup.setAttribute('open', '');
  }
};
cookieCheck('ABC');

closeBtn.addEventListener('click', () => {
  popup.removeAttribute('open');
  if (dayCheck.checked) {
    setCookie('ABC', 'home', 1);
  } else {
    setCookie('ABC', 'home', -1);
  }
});

//mobile menu
$('.m-header .menu').click((e)=>{
  e.preventDefault();
  $('.m-header .menu-section').toggleClass('open');
  $('.m-header .menu').toggleClass('active');
});

// <!-- Initialize Swiper  -->
var swiper = new Swiper(".mySwiper1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 40,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  },
  a11y: { // 웹접근성 
		enabled: true,
		prevSlideMessage: '이전 슬라이드',
		nextSlideMessage: '다음 슬라이드',   
		slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
	},
});

//<!- Swiper  2  ->
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  slidesPerView: "auto",
  grabCursor: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  },
  a11y: {
    prevSlideMessage: '이전 슬라이드',
    nextSlideMessage: '다음 슬라이드',
    slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
},
});

let url = "http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1328170229"
$(document).ready(()=>{
  $('.ftc_btn').click(()=>{
    window.open(url, "bizCommPop", "width=750, height=700;"); return false;
  });
});