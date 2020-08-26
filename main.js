$(document).ready(function () {
  const popupWrap = document.querySelector(".pop-hero")
  const popupBox = document.querySelector(".pop-box")
  const popupBtn = document.querySelector(".pop-exit")

  popupBtn.addEventListener("click", popClear)

  window.addEventListener("scroll", scrollCheck)

  function scrollCheck() {
    const scroller = window.scrollY

    if (scroller > 30 && !sessionStorage.getItem("exited")) {
      popupWrap.classList.add("pop-on")
      setTimeout(() => {
        popupWrap.classList.add("pop-opac")
      }, 200)

      setTimeout(() => {
        popupBox.classList.add("pop-up")
      }, 400)
    }
  }

  function popClear() {
    sessionStorage.setItem("exited", true)

    setTimeout(() => {
      popupBox.classList.remove("pop-up")
    }, 200)

    setTimeout(() => {
      popupWrap.classList.remove("pop-opac")
    }, 400)

    setTimeout(() => {
      popupWrap.classList.remove("pop-on")
    }, 1000)
  }
})
