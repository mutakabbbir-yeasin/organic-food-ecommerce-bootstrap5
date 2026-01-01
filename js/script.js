

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
      0: { slidesPerView: 2 },
      576: { slidesPerView: 4 },
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









  const productSwiper = new Swiper(".productSwiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: false,

    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },

    breakpoints: {
      0: { slidesPerView: 1 },
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
