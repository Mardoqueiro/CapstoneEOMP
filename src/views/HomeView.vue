<template>
  <div class="container">


    <div class="row">
      <h2 class="display-2">Welcome to our store</h2>
    </div>
    <div class="row">
      <h4 class="display-4">Recent cars</h4>
    </div>
    <div class="row gap-2 justify-content-center" v-if="recentCars">
      <Card v-for="car in recentCars" :key="car.carID">
        <template #cardHeader>
          {{ car.imageUrl }}
          <img :src="car.imageUrl" loading="lazy" class="img-fluid" :alt="car.carName">
        </template>
        <template #cardBody>
          <h5 class="card-title fw-bold">{{ car.carName }}</h5>
          <p class="lead">{{ car.prodDescription }}</p>
          <p class="lead"><span class="text-success fw-bold">Price</span>: R{{ car.price }}</p>
        </template>
      </Card>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>


  <main class="main">
      <!-- ============= HOME ============ -->
      <div class="shape shape__big"></div>
      <div class="shape shape__small"></div>

      <section class="home section" id="home">
        <div class="home__container container grid">
          <div class="home__data">
            <h1 class="home__title">Choose The Best Car</h1>

            <h2 class="home__subtitle">Porsche Mission E</h2>

            <h3 class="home__elec">
              <i class="ri-flashlight-fill"></i>
              Electric Car
            </h3>
          </div>

          <img
            src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/home.png"
            alt=""
            class="home__img"
          />

          <div class="home__car">
            <div class="home__car-data">
              <div class="home__car-icon">
                <i class="ri-temp-cold-line"></i>
              </div>
              <h2 class="home__car-number">24°</h2>
              <h3 class="home__car-name">TEMPERATURE</h3>
            </div>

            <div class="home__car-data">
              <div class="home__car-icon">
                <i class="ri-dashboard-3-line"></i>
              </div>
              <h2 class="home__car-number">873</h2>
              <h3 class="home__car-name">MILEAGE</h3>
            </div>

            <div class="home__car-data">
              <div class="home__car-icon">
                <i class="ri-flashlight-fill"></i>
              </div>
              <h2 class="home__car-number">94%</h2>
              <h3 class="home__car-name">BATTERY</h3>
            </div>
          </div>

          <a href="#" class="home__button">START</a>
        </div>
      </section>

      <!-- ======== ABOUT ==============-->
      <section class="about section" id="about">
        <div class="about__container container grid">
          <div class="about__group">
            <img
              src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/about.png"
              alt=""
              class="about__img"
            />
            <div class="about__card">
              <h3 class="about__card-title">2.500+</h3>
              <p class="about__card-description">
                Supercharges places along popular routes
              </p>
            </div>
          </div>

          <div class="about__data">
            <h2 class="section__title about__title">
              Machines with <br />
              Future Technology
            </h2>

            <p class="about__description">
              See the future with high-perfomace electric cars produced by
              renownes brands. They feature futuristic builds and designs with
              new and innovative platforms that last a long time.
            </p>

            <a href="#" class="button">Know more</a>
          </div>
        </div>
      </section>

      <!-- ========== POPULAR =========== -->
      <section class="popular section" id="popular">
        <h2 class="section__title">
          Chose Your Electric Car <br />
          Of The Porsche Brand
        </h2>

        <div class="popular__container container swiper">
          <div class="swiper-wrapper">
            <article class="popular__card swiper-slide">
              <div class="shape__smaller"></div>
              <h1 class="popular__title">Porsche</h1>
              <h3 class="popular__subtitle">Turbo S</h3>

              <img
                src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/popular1.png"
                alt=""
                class="popular__img"
              />

              <div class="popular__data">
                <div class="popular__data-group">
                  <i class="ri-dashboard-3-line"></i> 3.7Sec
                </div>

                <div class="popular__data-group">
                  <i class="ri-funds-box-line"></i> 356 Km/h
                </div>

                <div class="popular__data-group">
                  <i class="ri-charging-pile-2-line"></i> Electric
                </div>
              </div>

              <h3 class="popular__price">$175,900</h3>

              <button class="button popular__button">
                <i class="ri-shopping-bag-2-line"></i>
              </button>
            </article>

            <article class="popular__card swiper-slide">
              <div class="shape__smaller"></div>
              <h1 class="popular__title">Porsche</h1>
              <h3 class="popular__subtitle">Taycan</h3>

              <img
                src="https://github.com/bedimcode/responsive-car-website/blob/main/assets/img/popular2.png?raw=true"
                alt=""
                class="popular__img"
              />

              <div class="popular__data">
                <div class="popular__data-group">
                  <i class="ri-dashboard-3-line"></i> 3.7Sec
                </div>

                <div class="popular__data-group">
                  <i class="ri-funds-box-line"></i> 356 Km/h
                </div>

                <div class="popular__data-group">
                  <i class="ri-charging-pile-2-line"></i> Electric
                </div>
              </div>

              <h3 class="popular__price">$114,00</h3>

              <button class="button popular__button">
                <i class="ri-shopping-bag-2-line"></i>
              </button>
            </article>

            <article class="popular__card swiper-slide">
              <div class="shape__smaller"></div>
              <h1 class="popular__title">Porsche</h1>
              <h3 class="popular__subtitle">Turbo S Cross</h3>

              <img
                src="https://github.com/bedimcode/responsive-car-website/blob/main/assets/img/popular3.png?raw=true"
                alt=""
                class="popular__img"
              />

              <div class="popular__data">
                <div class="popular__data-group">
                  <i class="ri-dashboard-3-line"></i> 3.7Sec
                </div>

                <div class="popular__data-group">
                  <i class="ri-funds-box-line"></i> 356 Km/h
                </div>

                <div class="popular__data-group">
                  <i class="ri-charging-pile-2-line"></i> Electric
                </div>
              </div>

              <h3 class="popular__price">$150,800</h3>

              <button class="button popular__button">
                <i class="ri-shopping-bag-2-line"></i>
              </button>
            </article>

            <article class="popular__card swiper-slide">
              <div class="shape__smaller"></div>
              <h1 class="popular__title">Porsche</h1>
              <h3 class="popular__subtitle">Boxter 718</h3>

              <img
                src="https://github.com/bedimcode/responsive-car-website/blob/main/assets/img/popular4.png?raw=true"
                alt=""
                class="popular__img"
              />

              <div class="popular__data">
                <div class="popular__data-group">
                  <i class="ri-dashboard-3-line"></i> 3.7Sec
                </div>

                <div class="popular__data-group">
                  <i class="ri-funds-box-line"></i> 356 Km/h
                </div>

                <div class="popular__data-group">
                  <i class="ri-charging-pile-2-line"></i> Electric
                </div>
              </div>

              <h3 class="popular__price"></h3>

              <button class="button popular__button">
                <i class="ri-shopping-bag-2-line"></i>
              </button>
            </article>

            <article class="popular__card swiper-slide">
              <div class="shape__smaller"></div>
              <h1 class="popular__title">Porsche</h1>
              <h3 class="popular__subtitle">Cayman</h3>

              <img
                src="https://github.com/bedimcode/responsive-car-website/blob/main/assets/img/popular5.png?raw=true"
                alt=""
                class="popular__img"
              />

              <div class="popular__data">
                <div class="popular__data-group">
                  <i class="ri-dashboard-3-line"></i> 3.7Sec
                </div>

                <div class="popular__data-group">
                  <i class="ri-funds-box-line"></i> 356 Km/h
                </div>

                <div class="popular__data-group">
                  <i class="ri-charging-pile-2-line"></i> Electric
                </div>
              </div>

              <h3 class="popular__price">128,900</h3>

              <button class="button popular__button">
                <i class="ri-shopping-bag-2-line"></i>
              </button>
            </article>
          </div>

          <div class="swiper-pagination"></div>
        </div>
      </section>

      <!-- ======== FEATURES ============= -->
      <section class="features section">
        <h2 class="section__title">More Features</h2>

        <div class="features__container container grid">
          <div class="features__group">
            <img
              src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/features.png"
              alt=""
              class="features__img"
            />
            <div class="features__card features__card-1">
              <h3 class="features__card-title">800v</h3>
              <p class="features__card-description">Turbo <br />Chargin</p>
            </div>

            <div class="features__card features__card-2">
              <h3 class="features__card-title">350</h3>
              <p class="features__card-description">
                Km <br />
                Range
              </p>
            </div>

            <div class="features__card features__card-3">
              <h3 class="features__card-title">480</h3>
              <p class="features__card-description">
                Km <br />
                Travel
              </p>
            </div>
          </div>
        </div>

        <img
          src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/d695ce21f8309425a8a0ccc64f49408848b04b4b/assets/img/map.svg  "
          alt=""
          class="features__map"
        />
      </section>

      <!-- =========== FEATURED ============= -->
      <section class="featured section" id="featured">
        <h2 class="section__title">Featured Luxury Cars</h2>

        <div class="featured__container container">
          <ul class="featured__filters">
            <li>
              <button class="featured__item active-featured" data-filter="all">
                <span>All</span>
              </button>
            </li>

            <li>
              <button class="featured__item" data-filter=".tesla">
                <img
                  src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/logo3.png"
                  alt=""
                />
              </button>
            </li>

            <li>
              <button class="featured__item" data-filter=".audi">
                <img
                  src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/logo2.png"
                  alt=""
                />
              </button>
            </li>

            <li>
              <button class="featured__item" data-filter=".porsche">
                <img
                  src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/logo1.png"
                  alt=""
                />
              </button>
            </li>
          </ul>

          <div class="featured__content grid">
            <article class="featured__card mix tesla">
              <div class="shape shape__smaller"></div>

              <h1 class="featured__title">Tesla</h1>

              <h3 class="featured__subtitle">Model X</h3>

              <img
                src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/featured1.png"
                alt=""
              />

              <h3 class="featured__price">$98,900</h3>

              <button class="button featured__button">
                <i class="ri-shopping-bag-2-line"></i>
              </button>
            </article>

            <article class="featured__card mix tesla">
              <div class="shape shape__smaller"></div>

              <h1 class="featured__title">Tesla</h1>

              <h3 class="featured__subtitle">Model 3</h3>

              <img
                src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/featured2.png"
                alt=""
              />

              <h3 class="featured__price">$45,00</h3>

              <button class="button featured__button">
                <i class="ri-shopping-bag-2-line"></i>
              </button>
            </article>

            <article class="featured__card mix audi">
              <div class="shape shape__smaller"></div>

              <h1 class="featured__title">Audi</h1>

              <h3 class="featured__subtitle">E-tron</h3>

              <img
                src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/featured3.png"
                alt=""
              />

              <h3 class="featured__price">$65,00</h3>

              <button class="button featured__button">
                <i class="ri-shopping-bag-2-line"></i>
              </button>
            </article>

            <article class="featured__card mix porsche">
              <div class="shape shape__smaller"></div>

              <h1 class="featured__title">Porsche</h1>

              <h3 class="featured__subtitle">Boxter 987</h3>

              <img
                src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/featured4.png"
                alt=""
              />

              <h3 class="featured__price">$126,00</h3>

              <button class="button featured__button">
                <i class="ri-shopping-bag-2-line"></i>
              </button>
            </article>

            <article class="featured__card mix porsche">
              <div class="shape shape__smaller"></div>

              <h1 class="featured__title">Porsche</h1>

              <h3 class="featured__subtitle">Panamera</h3>

              <img
                src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/featured5.png"
                alt=""
              />

              <h3 class="featured__price">$126,900</h3>

              <button class="button featured__button">
                <i class="ri-shopping-bag-2-line"></i>
              </button>
            </article>
          </div>
        </div>
      </section>

      <!-- =========== OFFER ================ -->
      <section class="offer section">
        <div class="offer__container container grid">
          <img
            src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/offer-bg.png"
            alt=""
            class="offer__bg"
          />

          <div class="offer__data">
            <h2 class="section__title offer__title">
              Do You Want To Receive <br />
              Special Offers?
            </h2>

            <p class="offer__description">
              Be the first to receive all the information about our products and
              new cars by email by subscribing to our mailing list.
            </p>

            <a href="#" class="button"> Subscribe Now </a>
          </div>

          <img
            src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/offer.png"
            alt=""
            class="offer__img"
          />
        </div>
      </section>

      <!-- ==================== LOGOS ============= -->
      <section class="logos section">
        <div class="logos__container container grid">
          <div class="logos__content">
            <img
              src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/logo1.png"
              alt=""
              class="logos__img"
            />
          </div>

          <div class="logos__content">
            <img
              src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/logo2.png"
              alt=""
              class="logos__img"
            />
          </div>

          <div class="logos__content">
            <img
              src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/logo3.png"
              alt=""
              class="logos__img"
            />
          </div>

          <div class="logos__content">
            <img
              src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/logo4.png"
              alt=""
              class="logos__img"
            />
          </div>

          <div class="logos__content">
            <img
              src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/logo5.png"
              alt=""
              class="logos__img"
            />
          </div>

          <div class="logos__content">
            <img
              src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/logo6.png"
              alt=""
              class="logos__img"
            />
          </div>
        </div>
      </section>
    </main>

    <!-- ========= SCROLL UP ============= -->
    <a href="/" class="scrollup" id="scroll-up">
      <i class="ri-arrow-up-line"></i>
    </a>
</template>

<script>
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'
export default {
  name: 'HomeView',
  components: {
    Card,
    Spinner
  },
  computed: {
    recentCars() {
      return this.$store.state.recentCars
    }
  },
  mounted() {
    this.$store.dispatch('fetchCars')
  }
}
</script>