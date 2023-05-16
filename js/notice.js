let noticeData;
const noticeXhttp = new XMLHttpRequest();
noticeXhttp.onreadystatechange = function (event) {
  let req = event.target;
  if (req.readyState === XMLHttpRequest.DONE) {
    noticeData = JSON.parse(req.response);
    makeNoticeSlide();
  }
};
noticeXhttp.open("GET", "noticedata.json");
noticeXhttp.send();
function makeNoticeSlide() {
  let noticeHtml = ``;
  for (let i = 0; i < noticeData.notice_count; i++) {
    let obj = noticeData[`notice_${i}`];
    let temp = `
      <li class="swiper-slide">
        <div class="nt-slide">
            <a href="${obj.link}">
            <em class="notice-title">${obj.title}</em>
            <span class="notice-date">${obj.date}</span>
            </a>
        </div>
      </li>
      `;
    noticeHtml += temp;
  }
  let noticeWrapper = document.querySelector(".sw-notice .swiper-wrapper");
  noticeWrapper.innerHTML = noticeHtml;
  let noticeSwiper = new Swiper(".sw-notice", {
    autoHeight: true,
    direction: "vertical",
    navigation: {
      nextEl: ".n-sw-next",
      prevEl: ".n-sw-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 500,
    loop: true,
  });
}
