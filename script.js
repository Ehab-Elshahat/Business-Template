// Select Element
const closeBtn = document.querySelector(".close");
const containerMediaMobail = document.querySelector(".container-media-mobail");
const icon = document.querySelector(".close i");
const number = document.querySelectorAll(".counter .number");
const solutions = document.querySelector(".solutions");
const links = document.querySelectorAll(".links li a");
const scrollTopBtn = document.querySelector(".scrollup");

// Nav Toggler
closeBtn.addEventListener("click", function () {
  containerMediaMobail.classList.toggle("show");
  icon.classList.toggle("fa-window-close");
});

// Lisen For Windo Scroll
window.addEventListener("scroll", function () {
  let soulutionOffset = solutions.offsetTop;
  let winScroll = this.scrollY;
  if (winScroll >= soulutionOffset - 150) {

    //Init Counter
    number.forEach((item) => {
      let i = 0;
      let countDwon = setInterval(function () {
        i++;
        item.textContent = i;
        if (i == item.getAttribute("data-number")) {
          clearInterval(countDwon);
        }
      }, 10);
    });
  }

  // Show Scroll Up Btn
  if(winScroll > 200){
    scrollTopBtn.style.display = 'block'
  } else {
    scrollTopBtn.style.display = 'none'
  }
});

// Scroll To Top
scrollTopBtn.addEventListener("click", ()=>{
  window.scrollTo(0, 0)
})

// Syinc Links With Section
links.forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();
    let attrLink = link.getAttribute("data-section");
    let classSection = `.${attrLink}`;
    let offsetSection =  document.querySelector(classSection).offsetTop;
    window.scrollTo(0, offsetSection);

    // Handle Class Active
    links.forEach(item => {
      item.parentElement.classList.remove("active")
    })
    link.parentElement.classList.add("active")
  })
})
