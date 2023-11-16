const linksContainer = document.querySelectorAll('.left-nav-link-container');

const movingBackground = () => {
  // Calculate a value between 0 and 1 based on the current time
  const t = (new Date().getTime() % 1000) / 1000;
  
  // Interpolate between black and dark gray
  const r = Math.floor(0 + t * (50 - 0));
  const g = Math.floor(0 + t * (50 - 0));
  const b = Math.floor(0 + t * (50 - 0));
  linksContainer.forEach((link) =>{
    link.style.background = `rgba(${r}, ${g}, ${b}, .1)`;
  });
}

setInterval(movingBackground, 100);