const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('.header__nav_link');
const overlayNav = document?.querySelector('.overlay-nav');
const body = document.body;
const header = document?.querySelector('.header');
const headerHeight = header.offsetHeight;
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('nav--visible');
  overlayNav.classList.toggle('show');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    burger?.classList.remove('burger--active');
    nav?.classList.remove('nav--visible');
    overlayNav.classList.remove('show');
  });
});

window.addEventListener('click', function (event) {
  if (event.target.dataset.lang === 'btn-lang') {
    const langWrapper = event.target.closest('.header__lang')
    const langList = langWrapper.querySelector('.lang_list')
    langList.classList.toggle('show');
  }

});

let heart = document.querySelector('.stats__like');
let likesNumber = document.querySelector('.stats__like_numb');

heart.onclick = function () {
  if (heart.classList.contains('like')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  heart.classList.toggle('like');
};

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

const videos = document.querySelectorAll('iframe');


const modal = new GraphModal({
  isOpen: (modal) => {

  },
  isClose: () => {
    for (let vid of videos) {
      const videoLink = vid.src;
      vid.src = '';
      vid.src = videoLink;
      console.log(close);
    };

  }
});

