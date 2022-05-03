const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('.header__nav_link');
const overlayNav = document?.querySelector(".overlay-nav");
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
        for (let vid of videos){
            const videoLink = vid.src;
        vid.src = '';
        vid.src = videoLink;
        console.log(close);
        };
        
	}
});
