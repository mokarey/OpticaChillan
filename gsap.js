const trigger = document.querySelector('.trigger');
const content = document.querySelector('.contenido');

trigger.addEventListener('mouseenter', () => {
  gsap.to(contenido, { duration: 0.3, x: 0, opacity: 1 });
});

trigger.addEventListener('mouseleave', () => {
  gsap.to(contenido, { duration: 0.3, x: -100, opacity: 0 });
});