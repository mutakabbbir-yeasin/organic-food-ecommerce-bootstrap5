
// menu open, close
const menuOpen = document.getElementById("menuOpen");
  const menuClose = document.getElementById("menuClose");
  const menu = document.querySelector(".menu_div_hidden");

  menuOpen.addEventListener("click", function (e) {
    e.preventDefault();
    menu.classList.add("active");
  });

  menuClose.addEventListener("click", function (e) {
    e.preventDefault();
    menu.classList.remove("active");
  });
  
  
  const categorySwiper = new Swiper(".categorySwiper", {
    slidesPerView: 6,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: false,

    navigation: {
      nextEl: ".swiper-next1",
      prevEl: ".swiper-prev1",
    },

    breakpoints: {
      0: { slidesPerView: 3 },
      576: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      992: { slidesPerView: 6 },
    },

    on: {
      init() {
        document.querySelector(".swiper-prev1").classList.add("disabled");
      },
      slideChange() {
        const prev1 = document.querySelector(".swiper-prev1");
        const next1 = document.querySelector(".swiper-next1");

        prev.classList.toggle("disabled", this.isBeginning);
        next.classList.toggle("disabled", this.isEnd);
      },
    },
  });

  //animation
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section_animation");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      {
        threshold: 0.2, // start animation when 20% visible
      }
    );

    sections.forEach((section) => observer.observe(section));
  });

  const productSwiper = new Swiper(".productSwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: false,

    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },

    breakpoints: {
      0: { slidesPerView: 2 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 5 },
    },

    on: {
      init() {
        document.querySelector(".swiper-prev").classList.add("disabled");
      },
      slideChange() {
        const prev = document.querySelector(".swiper-prev");
        const next = document.querySelector(".swiper-next");

        prev.classList.toggle("disabled", this.isBeginning);
        next.classList.toggle("disabled", this.isEnd);
      },
    },
     });

    const popularSwiper = new Swiper(".popularSwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: false,

    navigation: {
      nextEl: ".swiper-next-2",
      prevEl: ".swiper-prev-2",
    },

    breakpoints: {
      0: { slidesPerView: 2 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 5 },
    },

    on: {
      init() {
        document.querySelector(".swiper-prev-2").classList.add("disabled");
      },
      slideChange() {
        const prev2 = document.querySelector(".swiper-prev-2");
        const next2 = document.querySelector(".swiper-next-2");

        prev2.classList.toggle("disabled", this.isBeginning);
        next2.classList.toggle("disabled", this.isEnd);
      },
    },
  });

  const arriveSwiper = new Swiper(".arriveSwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: false,

    navigation: {
      nextEl: ".swiper-next-3",
      prevEl: ".swiper-prev-3",
    },

    breakpoints: {
      0: { slidesPerView: 2 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 5 },
    },

    on: {
      init() {
        document.querySelector(".swiper-prev-3").classList.add("disabled");
      },
      slideChange() {
        const prev3 = document.querySelector(".swiper-prev-3");
        const next3 = document.querySelector(".swiper-next-3");

        prev3.classList.toggle("disabled", this.isBeginning);
        next3.classList.toggle("disabled", this.isEnd);
      },
    },
  });


  const bestSellingSwiper = new Swiper(".bestSellingSwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: false,

    navigation: {
      nextEl: ".swiper-next-4",
      prevEl: ".swiper-prev-4",
    },

    breakpoints: {
      0: { slidesPerView: 2 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 5 },
    },

    on: {
      init() {
        document.querySelector(".swiper-prev-4").classList.add("disabled");
      },
      slideChange() {
        const prev4 = document.querySelector(".swiper-prev-4");
        const next4 = document.querySelector(".swiper-next-4");

        prev4.classList.toggle("disabled", this.isBeginning);
        next4.classList.toggle("disabled", this.isEnd);
      },
    },
  });



