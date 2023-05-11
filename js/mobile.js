window.onload = function () {
    // 모바일 하단메뉴
    let mobileDropdown = document.querySelector(".mobile-dropdown");
    let mobileCate = document.querySelector(".mobile-cate");
    let mobileDropdownClose = document.querySelector(".mobile-dropdown-close");
    let body = document.querySelector("body");


    mobileCate.addEventListener("click", function () {
    let hasActive = mobileDropdown.classList.contains("mobile-dropdown-active");
        console.log(hasActive);
    if (hasActive === false) {
        mobileDropdown.classList.add("mobile-dropdown-active");
        body.classList.add("active-hide");
    } else {
        mobileDropdown.classList.remove("mobile-dropdown-active");
        body.classList.remove("active-hide");
        }
    });
    mobileDropdownClose.addEventListener("click", function () {
        mobileDropdown.classList.remove("mobile-dropdown-active");
    });

    // 상단로고 옆 팝업버튼
    let header1400pxDim = document.querySelector(".header-1400px-dim");
    let logo1400pxArr = document.querySelector(".logo-1400px-arr");

    logo1400pxArr.addEventListener("click", function () {
    let hasActive = header1400pxDim.classList.contains("header-1400px-dim-active");
        console.log(hasActive);
    if (hasActive === false) {
        header1400pxDim.classList.add("header-1400px-dim-active");
        body.classList.add("active-hide");
    } else {
        header1400pxDim.classList.remove("header-1400px-dim-active");
        body.classList.remove("active-hide");
    }
});

        header1400pxDim.addEventListener("click", function () {
        header1400pxDim.classList.remove("header-1400px-dim-active");
});


    // gotop 배너
    let goTop = document.querySelector(".gotop");
    goTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };