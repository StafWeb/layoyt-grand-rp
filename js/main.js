const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

const modal = new GraphModal({
	isOpen: (modal) => {
        
	},
	isClose: () => {

	}
});
