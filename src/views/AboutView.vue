<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">About</h2>

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

    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  components: {
  }
}
</script>
<style scoped>

.about-section {
  background-color: #f7f7f7;
  padding: 60px 20px; 
  color: #333; 
  font-family: 'Arial', sans-serif;
}


.about-section .container {
  max-width: 800px; 
  margin: 0 auto; 
  text-align: left; 
}

.about-section h2 {
  font-size: 36px; 
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center; 
  font-family: 'Roboto', sans-serif;
}
 
.about-section p {
  font-size: 18px;  
  line-height: 1.6;  
  margin-bottom: 20px; 
  font-family: 'Roboto', sans-serif;
}

.about-section p:last-child {
  margin-bottom: 0;
}

</style>

