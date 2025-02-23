<template>
  <canvas ref="canvas" width="32" height="32" style="display: none;"></canvas>
</template>

<script>
export default {
  name: 'SiteFavicon',
  mounted() {
    const canvas = this.$refs.canvas;
    const ctx = canvas.getContext('2d');
    
    // Set background
    ctx.fillStyle = '#090A0F';
    ctx.fillRect(0, 0, 32, 32);
    
    // Draw a simplified version of your yin-yang earth logo
    ctx.beginPath();
    ctx.arc(16, 16, 15, 0, Math.PI * 2);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1;
    ctx.stroke();
    
    // Left half (Earth)
    ctx.beginPath();
    ctx.arc(16, 16, 14, Math.PI * 0.5, Math.PI * 1.5);
    ctx.fillStyle = '#4287f5';
    ctx.fill();
    
    // Right half (Moon)
    ctx.beginPath();
    ctx.arc(16, 16, 14, Math.PI * 1.5, Math.PI * 0.5);
    ctx.fillStyle = '#cccccc';
    ctx.fill();
    
    // Generate favicon
    const link = document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = canvas.toDataURL("image/png");
    document.getElementsByTagName('head')[0].appendChild(link);
  }
}
</script> 