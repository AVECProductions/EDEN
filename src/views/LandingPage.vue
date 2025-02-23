<template>
  <div class="landing-container" :class="{ 'text-shown': showText, 'day-mode': showText }">
    <div v-if="!showText" class="stars"></div>
    <div v-if="!showText" class="stars2"></div>
    <div v-if="!showText" class="stars3"></div>
    <div v-if="showText" class="cloud cloud-1"></div>
    <div v-if="showText" class="cloud cloud-2"></div>
    <div v-if="showText" class="cloud cloud-3"></div>
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
  background: radial-gradient(ellipse at bottom, #1a0933 0%, #090A0F 100%) !important;
  transition: all 1.5s ease-in-out;
}

.landing-container.day-mode {
  background: radial-gradient(ellipse at top, #89CFF0 0%, #40A2D8 100%) !important;
  position: relative;
  overflow-x: hidden;
}

.landing-container.text-shown {
  overflow-y: auto;
  height: auto;
  min-height: 100vh;
  min-height: 100dvh;
  max-height: 100vh;
  max-height: 100dvh;
  align-items: flex-start;
  padding-bottom: 0;
}

.content {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0 0 0;
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
  margin-bottom: 0;
}

.festival-info h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: 2px;
  color: #40A2D8;
  background: white;
  padding: 1rem 2rem;
  margin: 0 3% 2rem 3%;
  width: 94%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.columns {
  display: flex;
  gap: 3rem;
  margin: 2.5rem 0;
}

.column {
  flex: 1;
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
  color: #1a0933;
  margin: 2rem 0 0 0;
  background: linear-gradient(
    to bottom,
    #FFEB3B 0%,
    #FFD700 20%,
    #FFC107 50%,
    #FF9800 80%,
    #FF8C00 100%
  );
  padding: 3rem 2rem 2rem 2rem;
  width: 100%;
  position: relative;
  border-radius: 50% 50% 0 0;
  box-shadow: 
    0 -10px 30px rgba(255, 215, 0, 0.3),
    inset 0 2px 10px rgba(255, 255, 255, 0.3);
}

/* Add the rays effect */
.purpose::before {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 0;
  width: 100%;
  height: 150px;
  background: repeating-conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent 20deg,
    rgba(255, 235, 59, 0.2) 21deg,
    transparent 22deg
  );
  opacity: 0.7;
  pointer-events: none;
  animation: shiningRays 60s linear infinite;
}

/* Add animation for the rays */
@keyframes shiningRays {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.contact {
  font-size: 0.9rem;
  margin-top: 1rem;
  margin-bottom: 0;
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

.day-mode .festival-info {
  color: white;
  text-shadow: none;
  position: relative;
  z-index: 2;
}

.day-mode .festival-info h1 {
  color: #40A2D8;
  font-weight: bold;
  text-shadow: none;
  background: white;
  padding: 1rem 2rem;
  margin: 0 3% 2rem 3%;
  width: 94%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.day-mode .info-section h2 {
  color: #2E7D32;
}

.day-mode .info-section h3 {
  color: #1B5E20;
}

.day-mode .info-section p {
  color: white;
}

.day-mode .purpose {
  color: #1a0933;
  background: linear-gradient(
    to bottom,
    #FFEB3B 0%,
    #FFD700 20%,
    #FFC107 50%,
    #FF9800 80%,
    #FF8C00 100%
  );
}

.day-mode .contact {
  color: #1a0933;
}

.day-mode .cloud {
  position: fixed;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  filter: blur(10px);
  pointer-events: none;
  z-index: 0;
}

.day-mode .cloud-1 {
  width: 100px;
  height: 40px;
  top: 20%;
  left: 20%;
  animation: floatCloud 20s infinite linear;
}

.day-mode .cloud-2 {
  width: 150px;
  height: 50px;
  top: 40%;
  right: 15%;
  animation: floatCloud 25s infinite linear reverse;
}

.day-mode .cloud-3 {
  width: 120px;
  height: 45px;
  top: 60%;
  left: 30%;
  animation: floatCloud 22s infinite linear;
}

@keyframes floatCloud {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100vw);
  }
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
    padding: 4rem 0 0 0;
  }

  .columns {
    flex-direction: column;
    gap: 1rem;
  }

  .festival-info {
    margin: 1rem 1.5rem 0 1.5rem;
    max-width: 100%;
    padding-top: 1rem;
  }

  .festival-info h1 {
    font-size: 1.8rem;
    padding: 0.75rem 1rem;
    margin: 0 3% 1.5rem 3%;
    width: 94%;
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

  .purpose {
    margin: 2rem 0 0 0;
    width: 100%;
    padding: 2.5rem 1.5rem 1.5rem 1.5rem;
  }

  .purpose::before {
    height: 100px;  /* Smaller rays for mobile */
  }
}
</style> 