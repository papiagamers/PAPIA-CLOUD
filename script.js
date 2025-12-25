// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
  });
});

// Card select animation
document.querySelectorAll('.option-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
  });
});

// Theme Toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('light-theme');
  localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
});
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if(savedTheme==='light'){ document.body.classList.add('light-theme'); toggle.checked=true; }
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(q => {
  q.addEventListener('click', () => {
    const answer = q.nextElementSibling;
    faqQuestions.forEach(item => {
      if(item !== q){ item.nextElementSibling.style.maxHeight = null; }
    });
    if(answer.style.maxHeight){ answer.style.maxHeight = null; }
    else { answer.style.maxHeight = answer.scrollHeight + "px"; }
  });
});

// Particles.js
particlesJS("particles-js", {
  "particles": {
    "number": { "value":50, "density":{"enable":true,"value_area":800} },
    "color": { "value":"#42a5f5" },
    "shape": { "type":"circle", "stroke":{"width":0,"color":"#000"} },
    "opacity": { "value":0.5, "random":true },
    "size": { "value":3, "random":true },
    "line_linked": { "enable":true, "distance":150, "color":"#42a5f5", "opacity":0.3, "width":1 },
    "move": { "enable":true, "speed":2, "direction":"none", "random":true, "straight":false, "out_mode":"out" }
  },
  "interactivity": {
    "detect_on":"canvas",
    "events": { "onhover":{ "enable":true, "mode":"grab" }, "onclick":{ "enable":true, "mode":"push" } },
    "modes": { "grab":{"distance":140,"line_linked":{"opacity":1}}, "push":{"particles_nb":4} }
  },
  "retina_detect":true
});
