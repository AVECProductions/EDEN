<template>
  <div class="lineup-container">
    <h1>LINEUP</h1>
    <div class="announcement-content">
      <h2>Announcement Coming Soon</h2>
      <div class="message">
        <p>Get ready for an incredible lineup featuring local DJ legends and live bands spanning from California surf sounds to Boston's indie spirit.</p>
        <p class="highlight">Full lineup dropping in the next few days!</p>
        <p class="follow">Follow us on Instagram <a href="https://www.instagram.com/earthdaynnight/" target="_blank">@earthdaynnight</a> to be the first to know.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LineupPage'
}
</script>

<style scoped>
.lineup-container {
  min-height: 100vh;
  padding: 80px 1rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: #2E7D32;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: 'Montserrat', sans-serif;
}

.announcement-content {
  text-align: center;
  color: white;
  max-width: 600px;
  padding: 2rem;
}

h2 {
  color: #1B5E20;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-family: 'Montserrat', sans-serif;
}

.message {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  font-family: 'Montserrat', sans-serif;
}

.highlight {
  font-size: 1.4rem;
  font-weight: bold;
  color: #2E7D32;
}

.follow {
  margin-top: 1rem;
}

a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

a:hover {
  color: #2E7D32;
}

@media (max-width: 768px) {
  .lineup-container {
    padding-top: 60px;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  .highlight {
    font-size: 1.2rem;
  }
}
</style> 