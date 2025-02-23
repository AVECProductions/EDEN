<template>
  <div class="landing-container">
    <h1>Welcome to EDEN</h1>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>

<style scoped>
.landing-container {
  width: 100%;
  min-height: calc(100vh - 60px);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  color: white;
  text-align: center;
}
</style> 