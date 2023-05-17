let reviewData;
const reviewXhttp = new XMLHttpRequest();
reviewXhttp.onreadystatechange = function (event) {
  let req = event.target;
  if (req.readyState === XMLHttpRequest.DONE) {
    reviewData = JSON.parse(req.response);
    makeReviewSlide();
  }
};
reviewXhttp.open("GET", "reviewdata.json");
reviewXhttp.send();
function makeReviewSlide() {
  let reviewHtml = ``;
  for (let i = 0; i < reviewData.review_count; i++) {
    let obj = reviewData[`review_${i}`];
    let temp = `
      <div class="swiper-slide">
        <div class="rv-slide">
            <div class="review-img">
            <img src="img/${obj.pic}" alt="${obj.kind}" />
            </div>
            <div class="review-info">
            <span>${obj.title}</span>
            <p class="review-subtitle">${obj.intro}</p>
            <p class="review-id">${obj.id}</p>
            </div>
            <div class="review-prod clearfix">
            <div class="review-prod-img">
                <a href="${obj.link}"
                ><img src="img/${obj.prodpic}" alt="${obj.kind}"
                /></a>
            </div>
            <div class="review-prod-info">
                <div class="review-heart">하트</div>
                <div class="review-price">
                <p>${obj.prodtitle}</p>
                <span ${
                  obj.price ? "style='display:block'" : "style='display:none'"
                }>${obj.price}</span>
                </div>
            </div>
            </div>
        </div>
        </div>
      `;
    reviewHtml += temp;
  }
  let reviewWrapper = document.querySelector(".sw-review .swiper-wrapper");
  reviewWrapper.innerHTML = reviewHtml;
}
let reviewSwiper = new Swiper(".sw-review", {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    740: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".r-sw-next",
    prevEl: ".r-sw-prev",
  },
});
