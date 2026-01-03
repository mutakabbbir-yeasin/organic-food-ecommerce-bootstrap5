

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
    slidesPerView: 4,
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
      992: { slidesPerView: 4 },
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
      0: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
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
      0: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
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
