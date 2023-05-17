let mediaData;
const mediaXhttp = new XMLHttpRequest();
mediaXhttp.onreadystatechange = function (event) {
  let req = event.target;
  if (req.readyState === XMLHttpRequest.DONE) {
    mediaData = JSON.parse(req.response);
    makeMediaSlide();
  }
};
mediaXhttp.open("GET", "mediadata.json");
mediaXhttp.send();
function makeMediaSlide() {
  let mediaHtml = ``;
  for (let i = 0; i < mediaData.media_count; i++) {
    let obj = mediaData[`media_${i}`];
    let temp = `
  <div class="swiper-slide">
    <div class="md-slide">
        <img src="img/${obj.pic}" alt="${obj.kind}" />
        <p>${obj.intro}</p>
    </div>
  </div>
  `;
    mediaHtml += temp;
  }
  let mediaWrapper = document.querySelector(".sw-media .swiper-wrapper");
  mediaWrapper.innerHTML = mediaHtml;
  let mediaSwiper = new Swiper(".sw-media", {
    slidesPerView: 3,
    spaceBetween: 5,
    pagination: {
      el: ".m-sw-pagi",
      type: "fraction",
    },
    navigation: {
      prevEl: ".m-sw-prev",
      nextEl: ".m-sw-next",
    },
  });
  let mediaList = document.querySelectorAll(".md-slide");
  mediaList[0].classList.add("md-slide-active");
  for (let i = 0; i < mediaList.length; i++) {
    mediaList[i].addEventListener("click", function (e) {
      e.preventDefault();
      for (let j = 0; j < mediaList.length; j++) {
        mediaList[j].classList.remove("md-slide-active");
      }
      mediaList[i].classList.add("md-slide-active");
    });
  }
  let videoImage = document.querySelector(".media-video img");
  let videoThumb = document.querySelectorAll(".md-slide img");
  let imageData;
  for (let i = 0; i < videoThumb.length; i++) {
    mediaList[i].addEventListener("click", function (e) {
      e.preventDefault();
      imageData = videoThumb[i].src;
      videoImage.src = imageData;
    });
  }
}
