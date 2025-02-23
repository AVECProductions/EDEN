<template>
  <div class="app-container">
    <!-- Navigation -->
    <nav class="nav-container">
      <div class="logo-container">
        <img src="./assets/EDEN.png" alt="Logo" class="nav-logo">
      </div>
      
      <button class="hamburger" @click="toggleMenu" aria-label="Menu">
        <span class="close-x" v-if="isMenuOpen">×</span>
        <template v-else>
          <div class="line"></div>
          <div class="line"></div>
        </template>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ 'show': isMenuOpen }">
      <div class="menu-content">
        <div class="menu-items">
          <router-link to="/" class="menu-item" @click="toggleMenu">HOME</router-link>
          <router-link to="/about" class="menu-item" @click="toggleMenu">ABOUT</router-link>
          <router-link to="/contact" class="menu-item" @click="toggleMenu">CONTACT</router-link>
          <router-link to="/merch" class="menu-item" @click="toggleMenu">MERCH</router-link>
        </div>
        
        <div class="social-links">
          <a href="https://www.instagram.com/earthdaynnight/" target="_blank" class="social-icon">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@rnaf-life" target="_blank" class="social-icon">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <main class="main-content">
      <router-view></router-view>
    </main>

    <!-- Example of embedded YouTube video section -->
    <div class="video-section">
      <h2>NICE, a fest 2024 Recap</h2>
      <div class="video-container">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/your-video-id"
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
      <div class="thank-you-text">
        <h1>THANK YOU FOR BEING NICE</h1>
        <h2>SEE YOU IN 2025!</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
  width: 100%;
}

.app-container {
  min-height: 100vh;
  width: 100vw;
  background: #000;
  color: white;
  position: relative;
  overflow-x: hidden;
}

.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  width: 100%;
  max-width: 100vw;
}

.nav-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.hamburger {
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1001;
}

.line {
  width: 24px;
  height: 2px;
  background-color: white;
  margin: 4px 0;
  transition: all 0.3s ease;
}

.close-x {
  color: white;
  font-size: 2rem;
  line-height: 1;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 999;
  display: flex;
  padding: 2rem;
}

.mobile-menu.show {
  transform: translateX(0);
}

.menu-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4rem 0;
}

.menu-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.menu-item {
  color: white;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
}

.social-links {
  display: flex;
  gap: 2rem;
}

.social-icon {
  color: white;
  font-size: 1.8rem;
  text-decoration: none;
}

.main-content {
  padding-top: 60px;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

/* Make sure router-view content is visible */
.router-view {
  min-height: 100%;
}

.video-section {
  padding: 2rem;
  text-align: center;
  color: white;
}

.video-container {
  margin: 2rem auto;
  max-width: 800px;
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.thank-you-text {
  margin-top: 2rem;
}

.thank-you-text h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.thank-you-text h2 {
  font-size: 2rem;
  color: #b3e1ff;
}

@media (max-width: 768px) {
  .thank-you-text h1 {
    font-size: 1.8rem;
  }

  .thank-you-text h2 {
    font-size: 1.5rem;
  }
}
</style>

