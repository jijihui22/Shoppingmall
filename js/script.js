// <!-- Initialize Swiper  -->
var swiper = new Swiper(".mySwiper1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween:40,
  slidesPerView: "auto",
  coverflowEffect: {
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: true,
  loop:true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
  autoplay: {
  delay: 3000,
  },
});
  
//<!- Swiper  2  ->
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  slidesPerView: "auto",
  grabCursor: true,
  loop:true,
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
});

$(document).ready(function(){
  $(".modalWrap a").colorbox({
      rel:"youtubes"
  });
  $(".youtubes").colorbox({
      slideshowAuto:true,  
      iframe:true,
      innerWidth:1000,
      innerHeight:562.5,
  });
});
    
var url = "http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1328170229"
  $(document).ready(function(){
  $('.ftc_btn').click(function(){window.open(url, "bizCommPop", "width=750, height=700;");return false;
  });
});