<template>
  <div class="landing-page">
    <div class="stars"></div>
    <div class="stars2"></div>
    <div class="stars3"></div>
    <div class="content">
      <img 
        v-if="!showText"
        src="./assets/EDEN.png" 
        alt="Earth Day and Night Logo" 
        class="logo" 
        :class="{ 'spin-out': isSpinning }"
        @click="handleSpin"
      >
      <h1 
        v-if="showText" 
        class="title"
        :class="{ 'fade-in': showText }"
      >
        EARTH DAY AND NIGHT<br>EXPERIENCE
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isSpinning: false,
      showText: false
    }
  },
  methods: {
    handleSpin() {
      if (!this.isSpinning) {
        this.isSpinning = true;
        // Wait for logo to spin out before showing text
        setTimeout(() => {
          this.showText = true;
        }, 1500); // Adjust timing as needed
      }
    }
  }
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
  background: radial-gradient(ellipse at bottom, #1a0933 0%, #090A0F 100%);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.stars, .stars2, .stars3 {
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
    359px 1322px #FFF,
    468px 1892px #FFF,
    1213px 456px #FFF,
    892px 1832px #FFF;
  animation: animStar 60s linear infinite;
}

.stars2 {
  width: 1px;
  height: 1px;
  box-shadow: 
    1676px 1877px #b3e1ff,
    553px 1957px #b3e1ff,
    1876px 1507px #b3e1ff,
    1023px 502px #b3e1ff,
    1238px 1684px #b3e1ff,
    1686px 1287px #b3e1ff,
    1415px 950px #b3e1ff,
    234px 1234px #b3e1ff,
    567px 1897px #b3e1ff,
    1234px 567px #b3e1ff;
  animation: animStar 45s linear infinite;
}

.stars3 {
  width: 3px;
  height: 3px;
  box-shadow: 
    567px 890px #ffd1dc,
    1234px 2145px #ffd1dc,
    890px 567px #ffd1dc,
    2145px 1234px #ffd1dc,
    456px 789px #ffd1dc,
    789px 2145px #ffd1dc,
    2145px 456px #ffd1dc,
    1897px 234px #ffd1dc;
  animation: animStar 30s linear infinite;
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
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 25rem;
  height: 25rem;
  object-fit: contain;
  animation: float 6s ease-in-out infinite;
  filter: drop-shadow(0 0 20px rgba(255,255,255,0.2));
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.spin-out {
  animation: spinOut 1.5s ease-in forwards !important;
}

@keyframes spinOut {
  0% {
    transform: rotateY(0deg) scale(1);
    opacity: 1;
  }
  100% {
    transform: rotateY(1800deg) scale(8);
    opacity: 0;
  }
}

.title {
  color: white;
  font-size: 4rem;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  letter-spacing: 0.5rem;
  line-height: 1.5;
  opacity: 0;
  transform: translateY(50px);
  text-shadow: 0 0 20px rgba(255,255,255,0.3);
}

.fade-in {
  animation: fadeIn 2s ease-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(1deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

/* Add a subtle nebula effect */
.landing-page::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, 
    rgba(76, 0, 153, 0.1) 0%,
    rgba(153, 0, 153, 0.1) 25%,
    rgba(128, 0, 128, 0) 50%);
  pointer-events: none;
}
</style>

