<template>
  <div class="app-wrapper">
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
html, body {
  height: 100%;
  overflow-y: auto;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
  width: 100%;
}

.app-wrapper {
  min-height: 100vh;
  width: 100%;
  position: relative;
  background: radial-gradient(ellipse at bottom, #1a0933 0%, #090A0F 100%);
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
  padding: 0;
}

.mobile-menu.show {
  transform: translateX(0);
}

.menu-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  position: relative;
}

.menu-items {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
  padding-left: 1rem;
}

.menu-item {
  color: white;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
}

.menu-item:hover {
  color: #FFD700;
}

.social-links {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  gap: 1rem;
}

.social-icon {
  color: white;
  font-size: 1.3rem;
  text-decoration: none;
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: white;
  color: black;
}

.main-content {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  overflow-y: auto;
}

/* Make sure router-view content is visible */
.router-view {
  min-height: 100%;
}

/* Keep existing styles for navigation and content */
</style>

