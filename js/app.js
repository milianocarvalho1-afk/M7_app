setInterval(() => {
  const clock = document.getElementById('hudClock');
  if (clock) clock.textContent = new Date().toLocaleTimeString();
}, 1000);

console.log('M7 OS System Inicializado!');
