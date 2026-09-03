const openGift = document.getElementById('openGift');
openGift.addEventListener('click', () => {
  document.querySelector('.intro').scrollIntoView({behavior:'smooth'});
});

const birth = new Date('2003-09-05T00:00:00');
function ageNow() {
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const beforeBirthday = now.getMonth() < birth.getMonth() ||
    (now.getMonth() === birth.getMonth() && now.getDate() < birth.getDate());
  if (beforeBirthday) age--;
  return age;
}
document.getElementById('age').textContent = ageNow();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
document.querySelectorAll('.photo-card img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
  });
});
function closeLightbox(){
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
  lightboxImg.src = '';
}
document.querySelector('.close-lightbox').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeLightbox(); });

function petal(){
  const p=document.createElement('span');
  p.className='petal';
  p.textContent=Math.random()>.45?'♡':'♥';
  p.style.left=(Math.random()*100)+'vw';
  p.style.setProperty('--drift',((Math.random()-.5)*180)+'px');
  p.style.animationDuration=(7+Math.random()*7)+'s';
  p.style.fontSize=(9+Math.random()*13)+'px';
  document.querySelector('.petals').appendChild(p);
  setTimeout(()=>p.remove(),15000);
}
setInterval(petal,900);
