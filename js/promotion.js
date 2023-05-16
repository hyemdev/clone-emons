let promotionData;
const promotionXhttp = new XMLHttpRequest();
promotionXhttp.onreadystatechange = function (event) {
  let req = event.target;
  if (req.readyState === XMLHttpRequest.DONE) {
    promotionData = JSON.parse(req.response);
    makePromotionSlide();
  }
};
promotionXhttp.open("GET", "promotiondata.json");
promotionXhttp.send();
function makePromotionSlide() {
  let promotionHtml = ``;
  for (let i = 0; i < promotionData.promotion_count; i++) {
    let obj = promotionData[`promotion_${i}`];
    let temp = `
      <div class="swiper-slide">
        <div class="pm-slide">
            <a href="${obj.link}">
            <div class="promotion-img">
                <img src="img/${obj.pic}" alt="${obj.kind}" />
            </div>
            <div class="promotion-info">
                <span>${obj.title}</span>
                <div class="viewbox">View</div>
            </div>
            </a>
        </div>
        </div>
      `;
    promotionHtml += temp;
  }
  let promotionWrapper = document.querySelector(
    ".sw-promotion .swiper-wrapper"
  );
  promotionWrapper.innerHTML = promotionHtml;
  let promotionSwiper = new Swiper(".sw-promotion", {
    slidesPerView: 1,
    speed: 500,
    loop: true,
    touchRatio: 0,
    breakpoints: {
      760: {
        slidesPerView: 2,
      },
      1260: {
        slidesPerView: 3,
      },
    },
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".p-sw-next",
      prevEl: ".p-sw-prev",
    },
  });
}
