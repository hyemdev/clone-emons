window.onload = function () {

    // 모바일 버튼
    let mobileDropdown = document.querySelector(".mobile-dropdown");
    let mobileCate = document.querySelector(".mobile-cate");
    
    mobileCate.addEventListener("click", function () {
        let hasActive =  mobileDropdown.classList.contains("mobile-dropdown-active");
        console.log(hasActive);
        if (hasActive === false) {
        mobileDropdown.classList.add("mobile-dropdown-active"); 
        } else { 
        mobileDropdown.classList.remove("mobile-dropdown-active");
        }
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