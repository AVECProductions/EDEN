<template>
  <div class="landing-page">
    <div class="stars"></div>
    <div class="stars2"></div>
    <div class="content">
      <img src="./assets/EDEN.png" alt="Earth Day and Night Logo" class="logo">
      <h1 class="title">Earth Day n Night Experience 2025</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.landing-page {
  height: 100vh;
  width: 100%;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.stars, .stars2 {
  position: fixed;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 
    1776px 777px #FFF,
    553px 1257px #FFF,
    1576px 1507px #FFF,
    1123px 502px #FFF,
    118px 669px #FFF,
    1238px 1684px #FFF,
    971px 779px #FFF,
    1677px 1186px #FFF,
    1686px 1287px #FFF,
    1995px 1745px #FFF,
    1415px 950px #FFF,
    359px 1322px #FFF;
  animation: animStar 100s linear infinite;
}

.stars2 {
  width: 1px;
  height: 1px;
  box-shadow: 
    1676px 1877px #FFF,
    553px 1957px #FFF,
    1876px 1507px #FFF,
    1023px 502px #FFF,
    1238px 1684px #FFF,
    1686px 1287px #FFF,
    1415px 950px #FFF;
  animation: animStar 150s linear infinite;
}

@keyframes animStar {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-2000px);
  }
}

.content {
  text-align: center;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
}

.logo {
  width: 18rem; /* Approximately 3 inches */
  height: 18rem;
  object-fit: contain;
  margin-bottom: 2rem;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.title {
  color: white;
  font-size: 2rem;
  letter-spacing: 0.3rem;
  font-weight: 300;
  text-transform: uppercase;
  background: linear-gradient(120deg, #ffffff, #88c8ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255,255,255,0.2);
  animation: fadeIn 2s ease-out forwards;
  font-family: 'Montserrat', sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
