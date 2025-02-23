<template>
  <div class="contact-container">
    <h1 class="title">Contact</h1>
    
    <div class="contact-section">
      <div class="contact-info">
        <h2>Sponsorship/Operations:</h2>
        <p>Jackson Megar: <a href="mailto:jemegar@gmail.com">jemegar@gmail.com</a></p>
      </div>

      <form class="contact-form">
        <div class="name-fields">
          <div class="form-group half">
            <label>First Name</label>
            <input type="text" required>
          </div>
          <div class="form-group half">
            <label>Last Name</label>
            <input type="text" required>
          </div>
        </div>

        <div class="form-group">
          <label>Email (required)</label>
          <input type="email" required>
        </div>

        <div class="form-group">
          <label>Message (required)</label>
          <textarea required rows="4"></textarea>
        </div>

        <button type="submit" class="submit-btn">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>

<style scoped>
.contact-container {
  min-height: 100vh;
  padding: 40px 2rem 2rem 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.title {
  color: white;
  font-size: 3rem;
  margin-bottom: 3rem;
  font-family: 'Montserrat', sans-serif;
}

.contact-info {
  margin-bottom: 4rem;
}

.contact-info h2 {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
  font-family: 'Montserrat', sans-serif;
}

.contact-info p {
  color: white;
  margin-bottom: 0;
}

.contact-info a {
  color: white;
  text-decoration: none;
}

.contact-form {
  width: 100%;
}

.name-fields {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 2rem;
  width: 100%;
}

.half {
  width: 50%;
}

label {
  display: block;
  color: white;
  margin-bottom: 0.75rem;
  font-family: 'Montserrat', sans-serif;
}

input, textarea {
  width: 100%;
  padding: 1rem;
  background: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  margin-top: 1rem;
  width: 100%;
  background: transparent;
  color: white;
  border: 1px solid white;
  padding: 1rem;
  font-size: 1.1rem;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.submit-btn:hover {
  background: white;
  color: black;
}

@media (max-width: 768px) {
  .contact-container {
    padding: 60px 1rem 1rem 1rem;
  }

  .title {
    font-size: 2rem;
  }

  .name-fields {
    flex-direction: column;
  }

  .half {
    width: 100%;
  }
}
</style> 