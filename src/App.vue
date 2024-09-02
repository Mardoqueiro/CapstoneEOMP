<template>
  <div>
    <NavBar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import Swiper from 'swiper/bundle'; 
// import 'swiper/swiper-bundle.min.css';
import mixitup from 'mixitup';
import ScrollReveal from 'scrollreveal';

export default {
  components: {
    NavBar,
    Footer
  },
  mounted() {
    this.initMenuToggle();
    this.initScrollHeader();
    this.initSwiper();
    this.initMixitup();
    this.initScrollUp();
    this.initScrollActive();
    this.initScrollReveal();
  },
  methods: {
    initMenuToggle() {
      const navToggle = document.getElementById('nav-toggle');
      const navClose = document.getElementById('nav-close');
      const navMenu = document.getElementById('nav-menu');

      if (navToggle) {
        navToggle.addEventListener('click', () => {
          navMenu.classList.add('show-menu');
        });
      }

      if (navClose) {
        navClose.addEventListener('click', () => {
          navMenu.classList.remove('show-menu');
        });
      }

      const navLinks = document.querySelectorAll('.nav__link');
      navLinks.forEach((link) =>
        link.addEventListener('click', () => {
          navMenu.classList.remove('show-menu');
        })
      );
    },
    initScrollHeader() {
      const header = document.getElementById('header');
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 50) {
          header.classList.add('scroll-header');
        } else {
          header.classList.remove('scroll-header');
        }
      });
    },
    initSwiper() {
      new Swiper('.popular__container', {
        loop: true,
        spaceBetween: 24,
        slidesPerView: 'auto',
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
          },
          1024: {
            spaceBetween: 48,
          },
        },
      });
    },
    initMixitup() {
      mixitup('.featured__content', {
        selectors: {
          target: '.featured__card',
        },
        animation: {
          duration: 300,
        },
      });

      const linkFeatured = document.querySelectorAll('.featured__item');
      linkFeatured.forEach((l) =>
        l.addEventListener('click', function () {
          linkFeatured.forEach((l) => l.classList.remove('active-featured'));
          this.classList.add('active-featured');
        })
      );
    },
    initScrollUp() {
      const scrollUp = document.getElementById('scroll-up');
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 350) {
          scrollUp.classList.add('show-scroll');
        } else {
          scrollUp.classList.remove('show-scroll');
        }
      });
    },
    initScrollActive() {
      const sections = document.querySelectorAll('section[id]');
      window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        sections.forEach((current) => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 58;
          const sectionId = current.getAttribute('id');

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
              .querySelector('.nav__menu a[href*=' + sectionId + ']')
              .classList.add('active-link');
          } else {
            document
              .querySelector('.nav__menu a[href*=' + sectionId + ']')
              .classList.remove('active-link');
          }
        });
      });
    },
    initScrollReveal() {
      const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
        reset: true,
      });

      sr.reveal(
        `.home__title, .popular__container, .features__img, .featured__filters`
      );
      sr.reveal(`.home__subtitle`, { delay: 500 });
      sr.reveal(`.home__elec`, { delay: 600 });
      sr.reveal(`.home__img`, { delay: 800 });
      sr.reveal(`.home__car-data`, {
        delay: 1000,
        interval: 100,
        origin: 'bottom',
      });
      sr.reveal(`.home__button`, { delay: 100, interval: 100, origin: 'bottom' });
      sr.reveal(`.about__group, .offer__data`, { origin: 'left' });
      sr.reveal(`.about__data, .offer__img`, { origin: 'right' });
      sr.reveal(`.features__map`, { delay: 600, origin: 'bottom' });
      sr.reveal(`.features__card`, { interval: 300 });
      sr.reveal(`.featured__card, .logos__content, .footer__content`, {
        interval: 100,
      });
    },
  },
};
</script>

<style src="@/assets/css/style.css">

</style>
