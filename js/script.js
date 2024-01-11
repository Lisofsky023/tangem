document.addEventListener("DOMContentLoaded", function () {
  const bannerTop = document.querySelector(".banner-top");
  const bannerBottom = document.querySelector(".banner-bottom");
  const closeButton = document.querySelector(".banner-bottom__btn_close");
  const closeButtonTop = document.querySelector(".banner-top__btn_close");

  closeButtonTop.addEventListener("click", () => {
    bannerTop.style.display = "none";
  });

  window.addEventListener("scroll", () => {
    const bannerTopRect = bannerTop.getBoundingClientRect();
    if (
      bannerTopRect.bottom < 0 &&
      bannerBottom.style.display !== "block" &&
      localStorage.getItem("bannerClosed") !== "true"
    ) {
      bannerBottom.style.display = "block";
      bannerBottom.style.opacity = 0;
      let opacity = 0;
      let fadeIn = setInterval(() => {
        if (opacity < 1) {
          opacity += 0.1;
          bannerBottom.style.opacity = opacity;
        } else {
          clearInterval(fadeIn);
        }
      }, 50);
    }
  });
  
  closeButton.addEventListener("click", () => {
    bannerBottom.style.display = "none";
    localStorage.setItem("bannerClosed", "true");
  });
  
});