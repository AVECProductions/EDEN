<template>
  <div class="app-wrapper">
    <!-- Add clouds here -->
    <div class="cloud cloud-1"></div>
    <div class="cloud cloud-2"></div>
    <div class="cloud cloud-3"></div>

    <!-- Navigation -->
    <nav class="nav-container">
      <div class="logo-container">
        <router-link to="/">
          <img src="./assets/EDEN.png" alt="Logo" class="nav-logo">
        </router-link>
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
          <router-link to="/lineup" class="menu-item" @click="toggleMenu">LINEUP (COMING SOON)</router-link>
          <router-link to="/contact" class="menu-item" @click="toggleMenu">CONTACT</router-link>
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
  background: radial-gradient(ellipse at top, #89CFF0 0%, #40A2D8 100%);
  overflow-x: hidden;
}

.nav-container {
  position: absolute;
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

.logo-container {
  cursor: pointer;
}

.nav-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.nav-logo:hover {
  transform: scale(1.1);
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
  height: 100dvh;
  background: #000;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 999;
  display: flex;
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
  padding: 4rem 0 2rem 0;
}

.menu-items {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
  padding-left: 1rem;
  flex: 1;
  justify-content: center;
}

.menu-item {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
}

.menu-item:hover {
  color: #FFD700;
}

.social-links {
  position: static;
  padding-left: 1rem;
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
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

/* Adjust for smaller screens */
@media (max-height: 600px) {
  .menu-content {
    padding: 2rem 0 1rem 0;
  }

  .menu-items {
    gap: 0.5rem;
  }

  .social-links {
    margin-top: 1rem;
  }

  .menu-item {
    font-size: 1.2rem;
  }

  .social-icon {
    width: 35px;
    height: 35px;
    font-size: 1.1rem;
  }
}

/* Move cloud styles to global */
.cloud {
  position: fixed;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  filter: blur(10px);
  pointer-events: none;
  z-index: 0;
}

.cloud-1 {
  width: 100px;
  height: 40px;
  top: 20%;
  left: 20%;
  animation: floatCloud 20s infinite linear;
}

.cloud-2 {
  width: 150px;
  height: 50px;
  top: 40%;
  right: 15%;
  animation: floatCloud 25s infinite linear reverse;
}

.cloud-3 {
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
</style>

