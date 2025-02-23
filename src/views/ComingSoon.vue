<template>
  <div class="coming-soon-container">
    <h1>{{ $route.name }}</h1>
    <div class="coming-soon-content">
      <h2>Coming Soon</h2>
      <p>This page is currently under construction. Check back later for updates!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComingSoon'
}
</script>

<style scoped>
.coming-soon-container {
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

.coming-soon-content {
  text-align: center;
  color: white;
  max-width: 600px;
}

h2 {
  color: #1B5E20;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  font-family: 'Montserrat', sans-serif;
}

@media (max-width: 768px) {
  .coming-soon-container {
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
}
</style> 