<template>
  <div class="about-container">
    <div class="about-content">
      <div class="image-section">
        <img src="../assets/about-image.jpg" alt="Festival Performance" class="feature-image">
      </div>
      <div class="text-section">
        <h2>About Earth Day and Night</h2>
        <p>We believe in the power of music, art, and community to create positive change. Our festival celebrates the multifaceted nature of human expression - from daytime indie vibes to nighttime electronic rhythms.</p>
        
        <div class="mission">
          <p>Through the Earth Day and Night Experience, we're creating a space where environmental consciousness meets creative expression. Every ticket, every dance move, and every moment shared contributes directly to the Clean Water Fund.</p>
        </div>

        <div class="venue">
          <h3>The Great American Beer Hall</h3>
          <p>Located in Medford, MA, our venue partner stands as a beacon of next-level entertainment. With its massive space, curated beer selection, and award-winning culinary program, it's the perfect home for our community gathering.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about-container {
  width: 100%;
  min-height: 100vh;
  padding: 80px 1rem 2rem 1rem;
  position: relative;
  overflow-y: auto;
}

.about-content {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 4rem;
}

.image-section {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 3rem;
  height: auto;
}

.feature-image {
  width: 100%;
  height: auto;
  display: block;
}

.text-section {
  color: white;
  padding: 0 1rem;
  height: auto;
}

h2 {
  font-size: 2.2rem;
  color: #2E7D32;
  margin-bottom: 1.5rem;
  font-family: 'Montserrat', sans-serif;
}

h3 {
  font-size: 1.6rem;
  color: #1B5E20;
  margin: 2rem 0 1rem;
  font-family: 'Montserrat', sans-serif;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-family: 'Montserrat', sans-serif;
}

.mission {
  margin: 2rem 0;
  padding: 1.5rem;
  border-left: 3px solid #b3e1ff;
}

.venue {
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .about-container {
    padding-top: 60px;
    height: auto;
  }
  
  .about-content {
    padding-top: 1rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.4rem;
  }

  p {
    font-size: 1rem;
  }

  .mission {
    padding: 1rem;
  }
}
</style> 