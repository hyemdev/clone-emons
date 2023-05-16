  let galleryMenu = document.querySelectorAll(".btns a");
  let galleryContent = document.querySelectorAll(".gallery-content");
  galleryMenu[0].classList.add("gallery-active");
  galleryContent[0].style.display = "block";
  for (let i = 0; i < galleryMenu.length; i++) {
    galleryMenu[i].addEventListener("click", function (e) {
      e.preventDefault();
      for (let j = 0; j < galleryMenu.length; j++) {
        // 클릭 시 안보이게, 클래스 제거
        galleryContent[j].style.display = "none";
        galleryMenu[j].classList.remove("gallery-active");
      }
      galleryContent[i].style.display = "block";
      galleryMenu[i].classList.add("gallery-active");
    });
  }
