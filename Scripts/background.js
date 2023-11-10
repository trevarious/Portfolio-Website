const body = document.querySelector('.works');

const movingBackground = () => {
  // Calculate a value between 0 and 1 based on the current time
  const t = (new Date().getTime() % 2500) / 5000;
  
  // Interpolate between black and dark gray
  const r = Math.floor(0 + t * (50 - 0));
  const g = Math.floor(0 + t * (50 - 0));
  const b = Math.floor(0 + t * (50 - 0));

  body.style.background = `rgb(${r}, ${g}, ${b})`;
}

setInterval(movingBackground, 100)