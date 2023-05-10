window.onload = function () {

    // 모바일 버튼
    let mobileDropdown = document.querySelector(".mobile-dropdown");
    let mobileCate = document.querySelector(".mobile-cate");
    mobileCate.addEventListener("click", function () {
      let hasActive =  mobileDropdown.classList.contains("mobile-dropdown-active");
      console.log(hasActive);
      if (hasActive === false) {
        mobileDropdown.classList.add("mobile-dropdown-active"); //add를 해라
      } else { //아니라면
        mobileDropdown.classList.remove("mobile-dropdown-active"); //remove를 해라
      }
    });
}