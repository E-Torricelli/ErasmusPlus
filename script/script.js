// ====== Dati immagini ======
const images = {
  "gallerie/erasmus_bergen/bergen": [
    'gallerie/erasmus_bergen/bergen/slide4.jpg', 'gallerie/erasmus_bergen/bergen/slide5.jpg', 'gallerie/erasmus_bergen/bergen/slide6.jpg',
    'gallerie/erasmus_bergen/bergen/slide7.jpg', 'gallerie/erasmus_bergen/bergen/slide8.jpg', 'gallerie/erasmus_bergen/bergen/slide9.jpg',
    'gallerie/erasmus_bergen/bergen/slide10.jpg', 'gallerie/erasmus_bergen/bergen/slide12.jpg',
    'gallerie/erasmus_bergen/bergen/slide13.jpg', 'gallerie/erasmus_bergen/bergen/slide14.jpg',
    'gallerie/erasmus_bergen/bergen/slide15.jpg', 'gallerie/erasmus_bergen/bergen/slide16.jpg',
    'gallerie/erasmus_bergen/bergen/slide17.jpg','gallerie/erasmus_bergen/bergen/slide18.jpg',
    'gallerie/erasmus_bergen/bergen/slide19.jpg','gallerie/erasmus_bergen/bergen/slide20.jpg',
    'gallerie/erasmus_bergen/bergen/slide21.jpg','gallerie/erasmus_bergen/bergen/slide22.jpg',
    'gallerie/erasmus_bergen/bergen/slide23.jpg','gallerie/erasmus_bergen/bergen/slide24.jpg',
  ],
  "gallerie/erasmus_bergen/jobshadowing": [
    'gallerie/erasmus_bergen/jobshadowing/job1.jpg','gallerie/erasmus_bergen/jobshadowing/job2.jpg',
    'gallerie/erasmus_bergen/jobshadowing/job3.jpg','gallerie/erasmus_bergen/jobshadowing/job4.jpg',
    'gallerie/erasmus_bergen/jobshadowing/job5.jpg','gallerie/erasmus_bergen/jobshadowing/job6.jpg',
    'gallerie/erasmus_bergen/jobshadowing/job7.jpg','gallerie/erasmus_bergen/jobshadowing/job8.jpg',
    'gallerie/erasmus_bergen/jobshadowing/job9.jpg','gallerie/erasmus_bergen/jobshadowing/job10.jpg',
  ],
  "gallerie/erasmus_bergen/students": [
    'gallerie/erasmus_bergen/students/slide1.jpg',
    'gallerie/erasmus_bergen/students/slide2.jpg'
  ],
  "milan/arrivo": [
    'images/milan/arrivo1.jpg',
    'images/milan/arrivo2.jpg'
  ],
  "milan/visite": [
    'images/milan/visite1.jpg',
    'images/milan/visite2.jpg'
  ]
};

// ====== Variabili ======
const imageSection    = document.getElementById('imageSection');
const closeGalleryBtn = document.getElementById('closeGallery');
let currentImages = [];
let currentIndex  = 0;

// Nascondi il bottone di chiusura all’avvio
closeGalleryBtn.style.display = 'none';

// Event listener per le card (scroll dettagli)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function () {
    if (imageSection.style.display === 'grid') hideGallery();
    const cardId = this.getAttribute('onclick').match(/\d+/)[0];
    scrollToDetails(cardId);
  });
});

// ====== Prefetch delle prime N immagini ======
function preload(images, count = 4) {
  images.slice(0, count).forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

// ====== Caricamento Galleria ======
function loadImagesCard(event, subdirectory) {
  event.stopPropagation();
  const imageList = images[subdirectory];
  if (!imageList) return;

  // Se già aperta, chiudi prima
  hideGallery();

  // Prefetch iniziale
  preload(imageList);

  // Mostra galleria
  imageSection.style.display    = 'grid';
  closeGalleryBtn.style.display = 'flex';
  currentImages = imageList;
  currentIndex  = 0;

  // Crea elementi img senza src, con lazy+data-src
  imageList.forEach(src => {
    const img = document.createElement('img');
    img.dataset.src = src;        // path reale memorizzato
    img.loading    = 'lazy';      // lazy loading nativo
    img.alt        = '';          // buona pratica aggiungere sempre alt
    img.onclick    = () => openModalImage(src);
    imageSection.appendChild(img);
  });

  // Intersection Observer per caricare solo quando servono
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        obs.unobserve(img);
      }
    });
  }, { rootMargin: '100px' });

  imageSection.querySelectorAll('img').forEach(img => {
    observer.observe(img);
  });

  // Blocca scroll body e scrolla alla galleria
  document.body.classList.add('no-scroll');
  setTimeout(() => {
    window.scrollTo({ top: imageSection.offsetTop - 20, behavior: 'smooth' });
  }, 100);
}

// ====== Nascondi Galleria ======
function hideGallery() {
  imageSection.style.display    = 'none';
  closeGalleryBtn.style.display = 'none';
  imageSection.querySelectorAll('img').forEach(img => img.remove());
  document.body.classList.remove('no-scroll');
}

// Bottone di chiusura
closeGalleryBtn.addEventListener('click', hideGallery);

// ====== Modale immagini ======
function openModalImage(src) {
  const modalImg = document.getElementById('modal-img');
  modalImg.src = src;

  const modal = document.getElementById('modalImage');
  modal.style.display = 'flex';  

  
  const closeBtn = document.getElementById('closeGallery');
  closeBtn.style.display = 'none';  

  const closeModalBtn = document.getElementById('closeModalBtn');  
  closeModalBtn.style.display = 'none';

  currentIndex = currentImages.indexOf(src);

  
  document.getElementById('prevBtn').onclick = prevImg;
  document.getElementById('nextBtn').onclick = nextImg;

 
  document.addEventListener('keydown', handleKeydown);
}

function closeModalImage(event) {
  const modal = document.getElementById('modalImage');
  if (event.target === modal || event.target.classList.contains('close')) {
    modal.style.display = 'none';

    
    const closeBtn = document.getElementById('closeGallery');
    closeBtn.style.display = 'flex'; 

   
    const closeModalBtn = document.getElementById('closeModalBtn');
    closeModalBtn.style.display = 'block';  

    
    document.removeEventListener('keydown', handleKeydown);
  }
}

function handleKeydown(event) {
  if (event.key === 'ArrowLeft') {
    prevImg(event);
  } else if (event.key === 'ArrowRight') {
    nextImg(event);
  } else if (event.key === 'Escape') {
    closeModalImage(event); 
  }
}

function prevImg(e) {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  document.getElementById('modal-img').src = currentImages[currentIndex];
}


function nextImg(e) {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % currentImages.length;
  document.getElementById('modal-img').src = currentImages[currentIndex];
}

// ====== Sezione Dettagli ======
function scrollToDetails(cardNumber) {
  document.querySelectorAll('.details-section').forEach(section => {
    section.style.display = 'none';
  });

  const detailsSection = document.getElementById(`details${cardNumber}`);
  if (!detailsSection) return;

  detailsSection.style.display = 'block';
  detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

  let accordionId = '';
  if (cardNumber == 1) accordionId = 'accordion-docenti';
  if (cardNumber == 2) accordionId = 'accordion-studenti';
  if (cardNumber == 3) accordionId = 'accordion-risorse';

  const acc = document.getElementById(accordionId);
  if (acc && !acc.classList.contains('active')) acc.click();
}

function closeDetails(cardNumber) {
  const detailsSection = document.getElementById(`details${cardNumber}`);
  detailsSection.style.display = 'none';
}


// ====== Accordion ======
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function () {
    const cardId = this.getAttribute('onclick').match(/\d+/)[0];
    openAccordionSection(cardId);
  });
});

document.querySelectorAll('.accordion').forEach(acc => {
  acc.addEventListener('click', function (e) {
    e.stopPropagation();

    const panel = this.nextElementSibling;
    const isNested = this.classList.contains('nested');
    const isOpen = panel.classList.contains('open');

    
    hideGallery();  

    if (!isNested) {
      document.querySelectorAll('.panel.open, .nested-panel.open').forEach(p => {
        if (p !== panel) {
          closePanel(p);
          p.previousElementSibling?.classList.remove('active');
        }
      });
    }

    if (!isOpen) {
      this.classList.add('active');
      openPanel(panel);
    } else {
      this.classList.remove('active');
      closePanel(panel);
    }
  });
});


function openAccordionSection(cardId) {
  document.querySelectorAll('.details-section').forEach(section => {
    section.style.display = 'none';
    section.querySelectorAll('.accordion').forEach(acc => acc.classList.remove('active'));
    section.querySelectorAll('.panel').forEach(panel => {
      
      panel.classList.remove('open');
      panel.style.display = 'none';
      panel.style.maxHeight = '';
      panel.style.overflow = '';
      panel.style.opacity = '';
      panel.style.transition = '';
    });
  });

  const section = document.querySelector(`#details${cardId}`);
  section.style.display = 'block';
}

function openPanel(panel) {
  panel.classList.add('open');
  panel.style.display = 'block';
  panel.style.overflow = 'hidden';
  panel.style.maxHeight = '0';
  panel.style.opacity = '0';
  panel.offsetHeight; // forza reflow

  // easing più morbido e durata leggermente ridotta
  panel.style.transition = 'max-height 0.4s cubic-bezier(0.25,0.8,0.25,1), opacity 0.4s ease-in-out';
  panel.style.maxHeight = panel.scrollHeight + 'px';
  panel.style.opacity = '1';

  const handler = (e) => {
    if (e.propertyName === 'max-height') {
      panel.style.maxHeight = 'none';      // libera
      panel.style.overflow = 'visible';
      panel.removeEventListener('transitionend', handler);
    }
  };
  panel.addEventListener('transitionend', handler);
}

function closePanel(panel) {
  panel.style.overflow = 'hidden';
  panel.style.maxHeight = panel.scrollHeight + 'px';
  panel.style.opacity = '1';
  panel.offsetHeight; // forza reflow

  panel.style.transition = 'max-height 0.4s cubic-bezier(0.25,0.8,0.25,1), opacity 0.4s ease-in-out';
  panel.style.maxHeight = '0';
  panel.style.opacity = '0';

  const handler = (e) => {
    if (e.propertyName === 'max-height') {
      panel.classList.remove('open');
      panel.style.display = 'none';
      panel.style.maxHeight = '';
      panel.style.overflow = '';
      panel.style.opacity = '';
      panel.style.transition = '';
      panel.removeEventListener('transitionend', handler);
    }
  };
  panel.addEventListener('transitionend', handler);
}

// ====== Sidebar ======
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
}

function handleSidebarClick(cardNumber) {
  toggleSidebar();
  scrollToDetails(cardNumber);

  setTimeout(() => {
    const detailsSection = document.getElementById(`details${cardNumber}`);
    detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 300);
}

function handleWindowResize() {
  const sidebar = document.getElementById('sidebar');
  if (window.innerWidth > 768) {
    sidebar.style.left = '-250px';
  }
}

window.addEventListener('resize', handleWindowResize);
handleWindowResize();
