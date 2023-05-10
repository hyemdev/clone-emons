window.onload = function () {

    // 모바일 버튼
    let mobileDropdown = document.querySelector(".mobile-dropdown");
    let mobileCate = document.querySelector(".mobile-cate");
    let mobileDropdownClose = document.querySelector(".mobile-dropdown-close");
    
    mobileCate.addEventListener("click", function () {
      let hasActive =  mobileDropdown.classList.contains("mobile-dropdown-active");
      console.log(hasActive);
      if (hasActive === false) {
        mobileDropdown.classList.add("mobile-dropdown-active"); 
      } else { //아니라면
        mobileDropdown.classList.remove("mobile-dropdown-active");
      }
    });
}