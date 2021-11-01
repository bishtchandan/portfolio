// const login = document.querySelector('.login-form')
// const loginBtn = document.getElementById('loginBtn');

// loginBtn.addEventListener('click', () => {
//     login.classList.toggle('active');
// })

// const searchForm = document.querySelector('.search-form');
// const searchBtn = document.getElementById('search-btn');

// searchBtn.addEventListener('click', () =>{
//     searchForm.classList.toggle('active');
// })


const navbar = document.querySelector('.navbar');
const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () =>{
  navbar.classList.toggle('active');
})








var swiper = new Swiper(".projects-slider", {
    loop: true,
    spaceBetween: 20,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });