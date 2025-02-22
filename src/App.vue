<template>
  <div class="landing-page">
    <div class="stars"></div>
    <div class="content">
      <h1 class="title">EARTH DAY AND NIGHT EXPERIENCE</h1>
      <h2 class="coming-soon">COMING SOON</h2>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.landing-page {
  height: 100vh;
  width: 100%;
  background-image: url('./assets/earth-night.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  text-align: center;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.title {
  color: white;
  font-size: 2.5rem;
  letter-spacing: 0.7rem;
  animation: dropDown 1.5s ease-out forwards;
  opacity: 0;
  transform: translateY(-100px);
  text-shadow: 0 0 10px rgba(255,255,255,0.5);
  font-family: 'Orbitron', sans-serif;
  font-weight: 500;
  background: linear-gradient(to bottom, #ffffff, #7e7e7e);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom: 2px solid rgba(255,255,255,0.1);
  padding-bottom: 1rem;
}

.coming-soon {
  color: white;
  font-size: 1.5rem;
  letter-spacing: 0.5rem;
  animation: dropDown 1.5s ease-out 0.3s forwards;
  opacity: 0;
  transform: translateY(-100px);
  text-shadow: 0 0 10px rgba(255,255,255,0.3);
  font-weight: 300;
  font-family: 'Orbitron', sans-serif;
  color: #00f7ff;
}

@keyframes dropDown {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
