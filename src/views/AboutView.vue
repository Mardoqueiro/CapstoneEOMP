<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">About</h2>
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

