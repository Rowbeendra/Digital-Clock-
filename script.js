// script.js
function updateClock() 
{
  const now = new Date();

  // Time
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = now.toLocaleDateString(undefined, options);

  // Update HTML
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
  document.getElementById('date').textContent = date;


  const hours12 = now.getHours() % 12 || 12;
  const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
  document.getElementById('ampm').textContent = ampm;
  
  // const date = now.toLocaleDateString();
  // document.getElementById('date').textContent = date;

}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();



