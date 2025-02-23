<template>
  <div class="landing-container" :class="{ 'text-shown': showText }">
    <div class="stars"></div>
    <div class="stars2"></div>
    <div class="stars3"></div>
    <div class="content">
      <img 
        v-if="!showText"
        src="../assets/EDEN.png" 
        alt="Earth Day and Night Logo" 
        class="logo" 
        :class="{ 'spin-out': isSpinning }"
        @click="handleSpin"
      >
      <div 
        v-if="showText" 
        class="festival-info"
        :class="{ 'fade-in': showText }"
      >
        <h1>EARTH DAY AND NIGHT EXPERIENCE</h1>
        
        <div class="info-section">
          <h2>A Festival for Our Planet</h2>
          <p>Join us at the Great American Beer Hall in Medford, MA on April 26, 2025, for a celebration of community, creation, and art - all while supporting the Clean Water Fund.</p>
        </div>

        <div class="info-section columns">
          <div class="column">
            <h3>Day Experience</h3>
            <p>From 1PM, immerse yourself in local art, sustainable vendors, and live bands. Experience community markets, interactive stations, and California surf sounds meeting Boston's indie spirit.</p>
          </div>

          <div class="column">
            <h3>Night Evolution</h3>
            <p>As evening falls, the space transforms with local DJ legends and underground talent crafting an energetic dance experience until 1AM.</p>
          </div>
        </div>

        <div class="info-section purpose">
          <p>Your presence is your contribution. All proceeds support the Clean Water Fund.</p>
          <p class="contact">Contact: rnaf.life@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data() {
    return {
      isSpinning: false,
      showText: false,
      autoTriggerTimer: null
    }
  },
  methods: {
    handleSpin() {
      if (!this.isSpinning) {
        this.isSpinning = true;
        if (this.autoTriggerTimer) {
          clearTimeout(this.autoTriggerTimer);
        }
        setTimeout(() => {
          this.showText = true;
          setTimeout(() => {
            document.querySelector('.landing-container').scrollTop = 0;
          }, 100);
        }, 1500);
      }
    },
    setupAutoTrigger() {
      this.autoTriggerTimer = setTimeout(() => {
        if (!this.isSpinning) {
          this.handleSpin();
        }
      }, 3000);
    }
  },
  mounted() {
    this.setupAutoTrigger();
  },
  beforeUnmount() {
    if (this.autoTriggerTimer) {
      clearTimeout(this.autoTriggerTimer);
    }
  }
}
</script>

<style scoped>
.landing-container {
  width: 100%;
  height: 100vh;
  height: 100dvh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(ellipse at bottom, #1a0933 0%, #090A0F 100%);
  transition: overflow 0.3s ease;
}

.landing-container.text-shown {
  overflow-y: auto;
  height: auto;
  min-height: 100vh;
  min-height: 100dvh;
  max-height: 100vh;
  max-height: 100dvh;
  align-items: flex-start;
}

.content {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  padding-top: 5rem;
  padding-bottom: 2rem;
}

.logo {
  width: 20rem;
  height: 20rem;
  object-fit: contain;
  animation: float 6s ease-in-out infinite;
  filter: drop-shadow(0 0 20px rgba(255,255,255,0.2));
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.stars, .stars2, .stars3 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  pointer-events: none;
  z-index: 0;
  animation: animStar 50s linear infinite;
}

.stars {
  box-shadow: 
    1744px 122px #FFF,
    134px 1321px #FFF,
    1934px 1273px #FFF,
    1723px 1721px #FFF,
    721px 1663px #FFF,
    1833px 371px #FFF,
    1342px 1623px #FFF,
    1517px 1984px #FFF,
    1236px 1273px #FFF,
    154px 1555px #FFF,
    1575px 1644px #FFF,
    1630px 1320px #FFF,
    1324px 1834px #FFF,
    1431px 1515px #FFF,
    521px 1778px #FFF,
    1807px 1742px #FFF,
    1857px 1332px #FFF,
    1951px 1909px #FFF,
    1484px 1679px #FFF,
    1956px 1815px #FFF;
}

.stars2 {
  box-shadow: 
    1448px 1021px #FFF,
    1265px 571px #FFF,
    1855px 1428px #FFF,
    1520px 1620px #FFF,
    1745px 1331px #FFF,
    1699px 1456px #FFF,
    1675px 1557px #FFF,
    952px 1134px #FFF,
    1272px 1627px #FFF,
    1882px 1915px #FFF,
    1241px 1624px #FFF,
    1617px 1880px #FFF,
    1046px 1887px #FFF;
  animation-delay: -25s;
}

.stars3 {
  box-shadow: 
    1557px 1165px #FFF,
    1965px 1153px #FFF,
    1323px 1641px #FFF,
    1307px 1768px #FFF,
    1438px 1410px #FFF,
    1574px 1403px #FFF,
    1107px 1491px #FFF,
    1708px 1703px #FFF,
    1516px 1121px #FFF,
    1133px 1333px #FFF;
  animation-delay: -37.5s;
}

.festival-info {
  color: white;
  max-width: 600px;
  text-align: left;
  opacity: 0;
  transform: translateY(50px);
  margin: 0 2rem;
  padding-top: 2rem;
}

.columns {
  display: flex;
  gap: 3rem;
  margin: 2.5rem 0;
}

.column {
  flex: 1;
}

.info-section h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: 2px;
}

.info-section h2 {
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  color: #b3e1ff;
  text-align: center;
}

.info-section h3 {
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: #b3e1ff;
}

.info-section p {
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 0.8rem;
}

.purpose {
  text-align: center;
  font-style: italic;
  color: #b3e1ff;
  margin-top: 2rem;
}

.contact {
  font-size: 0.9rem;
  margin-top: 1rem;
  font-style: normal;
}

.spin-out {
  animation: spinOut 1.5s ease-in forwards !important;
  transform-origin: center center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  perspective: 1000px;
  -webkit-perspective: 1000px;
}

.fade-in {
  animation: fadeIn 2s ease-out forwards;
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

@keyframes spinOut {
  0% {
    transform: rotate(0deg) scale(1);
    opacity: 1;
  }
  50% {
    transform: rotate(720deg) scale(4);
    opacity: 0.5;
  }
  100% {
    transform: rotate(1440deg) scale(8);
    opacity: 0;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes animStar {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50%);
  }
}

.stars:after, .stars2:after, .stars3:after {
  display: none;
}

@media (max-width: 768px) {
  .landing-container {
    padding-top: 0;
  }

  .logo {
    width: 12rem;
    height: 12rem;
  }

  .content {
    padding-top: 4rem;
  }

  .columns {
    flex-direction: column;
    gap: 1rem;
  }

  .festival-info {
    margin: 1rem 1.5rem 2rem 1.5rem;
    max-width: 100%;
    padding-top: 1rem;
  }

  .festival-info h1 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  .info-section h2 {
    font-size: 1.3rem;
  }

  .info-section h3 {
    font-size: 1.1rem;
  }

  .info-section p {
    font-size: 0.9rem;
  }

  @keyframes spinOut {
    0% {
      transform: rotate(0deg) scale(1);
      opacity: 1;
    }
    100% {
      transform: rotate(720deg) scale(6);
      opacity: 0;
    }
  }
}
</style> 