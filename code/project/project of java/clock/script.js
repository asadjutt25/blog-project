function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById("clock").textContent = `${hours}H:${minutes}M:${seconds}S`;
  }
  
  // Update every second
  setInterval(updateClock, 1000);
  updateClock(); // Call once immediately