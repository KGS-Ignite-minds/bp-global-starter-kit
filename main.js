const tooltips = Array.from(document.querySelectorAll('.container > div'));
const fullDiv = document.querySelector('body');
const container = document.querySelector('.container');
let timeoutId;

window.addEventListener('resize', contentPosition);
window.addEventListener('DOMContentLoaded', contentPosition);

function contentPosition() {
  tooltips.map((tooltip) => {
    const h2 = tooltip.querySelector('h2');
    const content = tooltip.querySelector('.content-a, .content-b');
    const pin = h2;

    pin.addEventListener('mouseover', () => {
      content.style.visibility = 'visible';
      content.style.opacity = 1;
    });

    pin.addEventListener('mouseout', () => {
      timeoutId = setTimeout(() => {
        content.style.visibility = 'hidden';
        content.style.opacity = 0;
      }, 1000);
    });

    content.addEventListener('mouseover', () => {
      clearTimeout(timeoutId);
      content.style.visibility = 'visible';
      content.style.opacity = 1;
    });

    content.addEventListener('mouseout', () => {
      timeoutId = setTimeout(() => {
        content.style.visibility = 'hidden';
        content.style.opacity = 0;
      }, 1000);
    });
  });
}
