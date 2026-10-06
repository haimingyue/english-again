const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
function closeMenu() { menuToggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
menuToggle.addEventListener('click', () => { const open = menuToggle.getAttribute('aria-expanded') !== 'true'; menuToggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); });
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') { closeMenu(); menuToggle.focus(); } });
const imageDialog = document.getElementById('image-dialog');
const largeImage = document.getElementById('large-card-image');
document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => { const image = button.querySelector('img'); largeImage.src = image.src; largeImage.alt = image.alt; document.getElementById('image-dialog-title').textContent = button.closest('article').querySelector('h3').textContent; imageDialog.showModal(); }));
document.getElementById('close-image').addEventListener('click', () => imageDialog.close());
imageDialog.addEventListener('click', event => { if (event.target === imageDialog) { const box = imageDialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) imageDialog.close(); } });
document.querySelectorAll('.lab-examples details').forEach(detail => detail.addEventListener('toggle', () => { detail.querySelector('.example-action').textContent = detail.open ? '收起答案 −' : '看答案 ＋'; }));
