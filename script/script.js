// ====== Dati immagini ======
const images = {
  "gallerie/erasmus_bergen/bergen": [
    'gallerie/erasmus_bergen/bergen/slide5.jpg', 'gallerie/erasmus_bergen/bergen/slide6.jpg',
    'gallerie/erasmus_bergen/bergen/slide7.jpg', 'gallerie/erasmus_bergen/bergen/slide8.jpg', 'gallerie/erasmus_bergen/bergen/slide9.jpg',
    'gallerie/erasmus_bergen/bergen/slide10.jpg', 'gallerie/erasmus_bergen/bergen/slide12.jpg',
    'gallerie/erasmus_bergen/bergen/slide13.jpg', 'gallerie/erasmus_bergen/bergen/slide14.jpg',
    'gallerie/erasmus_bergen/bergen/slide15.jpg', 'gallerie/erasmus_bergen/bergen/slide16.jpg',
    'gallerie/erasmus_bergen/bergen/slide17.jpg','gallerie/erasmus_bergen/bergen/slide18.jpg',
    'gallerie/erasmus_bergen/bergen/slide19.jpg','gallerie/erasmus_bergen/bergen/slide20.jpg',
    'gallerie/erasmus_bergen/bergen/slide21.jpg','gallerie/erasmus_bergen/bergen/slide22.jpg',
    'gallerie/erasmus_bergen/bergen/slide23.jpg','gallerie/erasmus_bergen/bergen/slide24.jpg',
    'gallerie/erasmus_bergen/bergen/job1.jpg', 'gallerie/erasmus_bergen/bergen/job2.jpg',
    'gallerie/erasmus_bergen/bergen/job3.jpg','gallerie/erasmus_bergen/bergen/job4.jpg',
    'gallerie/erasmus_bergen/bergen/job5.jpg','gallerie/erasmus_bergen/bergen/job6.jpg',
    'gallerie/erasmus_bergen/bergen/job7.jpg','gallerie/erasmus_bergen/bergen/job8.jpg',
    'gallerie/erasmus_bergen/bergen/job9.jpg','gallerie/erasmus_bergen/bergen/job10.jpg',
  ],
  "gallerie/erasmus_bergen/jobshadowing": [
    
  ],
  "gallerie/erasmus_bergen/students": [
    
  ],
  "milan/arrivo": [
    
  ],
  "milan/visite": [
    
  ]
};

// ====== Variabili ======
const imageSection = document.getElementById('imageSection');
const closeGalleryBtn = document.getElementById('closeGallery');
let currentImages = [];
let currentIndex = 0;

closeGalleryBtn.style.display = 'none';

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function () {
    if (imageSection.style.display === 'grid') hideGallery();
    const cardId = this.getAttribute('onclick').match(/\d+/)[0];
    scrollToDetails(cardId);
  });
});

function preload(images, count = 4) {
  images.slice(0, count).forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

function loadImagesCard(event, subdirectory) {
  event.stopPropagation();
  const imageList = images[subdirectory];
  if (!imageList) return;

  hideGallery();
  preload(imageList);

  imageSection.style.display = 'grid';
  closeGalleryBtn.style.display = 'flex';
  currentImages = imageList;
  currentIndex = 0;

  imageList.forEach(src => {
    const img = document.createElement('img');
    img.dataset.src = src;
    img.loading = 'lazy';
    img.alt = '';
    img.onclick = () => openModalImage(src);
    imageSection.appendChild(img);
  });

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

  document.body.classList.add('no-scroll');
  setTimeout(() => {
    window.scrollTo({ top: imageSection.offsetTop - 20, behavior: 'smooth' });
  }, 100);
}

function hideGallery() {
  imageSection.style.display = 'none';
  closeGalleryBtn.style.display = 'none';
  imageSection.querySelectorAll('img').forEach(img => img.remove());
  document.body.classList.remove('no-scroll');
}

closeGalleryBtn.addEventListener('click', hideGallery);

function openModalImage(src) {
  const modal = document.getElementById('modalImage');
  const modalImg = document.getElementById('modal-img');
  modalImg.src = src;

  if (!modal.classList.contains('open')) {
    document.addEventListener('keydown', handleKeydown);
    addSwipeListeners();
    modal.classList.add('open'); // IMPORTANTE: aggiungo la classe
  }

  modal.style.display = 'flex';

  const closeBtn = document.getElementById('closeGallery');
  closeBtn.style.display = 'none';

  const closeModalBtn = document.getElementById('closeModalBtn');
  if (closeModalBtn) closeModalBtn.style.display = 'none';

  currentIndex = currentImages.indexOf(src);

  document.getElementById('prevBtn').onclick = prevImg;
  document.getElementById('nextBtn').onclick = nextImg;

  
}


function closeModalImage() {
  const modal = document.getElementById('modalImage');
  modal.style.display = 'none';
  modal.classList.remove('open'); // TOLGO la classe "open"

  const closeBtn = document.getElementById('closeGallery');
  closeBtn.style.display = 'flex';

  const closeModalBtn = document.getElementById('closeModalBtn');
  
  if (closeModalBtn) closeModalBtn.style.display = 'block';

  document.removeEventListener('keydown', handleKeydown);
  removeSwipeListeners();
}

function handleKeydown(event) {
  if (event.key === 'ArrowLeft') {
    prevImg(event);
  } else if (event.key === 'ArrowRight') {
    nextImg(event);
  } else if (event.key === 'Escape') {
    closeModalImage();
  }
}
// --- Swipe per smartphone ---
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
}

function handleSwipeGesture() {
  const diffX = touchEndX - touchStartX;
  if (Math.abs(diffX) > 50) { // soglia minima per evitare tocchi accidentali
    if (diffX > 0) {
      prevImg(); // swipe verso destra → immagine precedente
    } else {
      nextImg(); // swipe verso sinistra → immagine successiva
    }
  }
}

function addSwipeListeners() {
  const modal = document.getElementById('modalImage');
  modal.addEventListener('touchstart', handleTouchStart, { passive: true });
  modal.addEventListener('touchend', handleTouchEnd, { passive: true });
}

function removeSwipeListeners() {
  const modal = document.getElementById('modalImage');
  modal.removeEventListener('touchstart', handleTouchStart);
  modal.removeEventListener('touchend', handleTouchEnd);
}

function prevImg(e) {
  if (e) e.stopPropagation();
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  document.getElementById('modal-img').src = currentImages[currentIndex];
}

function nextImg(e) {
  if (e) e.stopPropagation();
  currentIndex = (currentIndex + 1) % currentImages.length;
  document.getElementById('modal-img').src = currentImages[currentIndex];
}

function scrollToDetails(cardNumber) {
  document.querySelectorAll('.details-section').forEach(section => {
    section.style.display = 'none';
  });
}


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

    // Nascondi tutte le gallerie quando clicchi su un accordion
    hideGallery();
    toggleNestedPanel(panel);

    if (!isNested) {
      // Se non è un pannello annidato, chiudi gli altri pannelli
      document.querySelectorAll('.panel.open, .nested-panel.open').forEach(p => {
        if (p !== panel) {
          closePanel(p);
          p.previousElementSibling?.classList.remove('active');
        }
      });
    } else {
      // Gestisci la chiusura di pannelli annidati
      document.querySelectorAll('.panel.nested-panel.open').forEach(p => {
        if (p !== panel) {
          closePanel(p);
          p.previousElementSibling?.classList.remove('active');
        }
      });
    }

    // Toggle apertura/chiusura pannello corrente
    if (!isOpen) {
      this.classList.add('active');
      openPanel(panel);
    } else {
      this.classList.remove('active');
      closePanel(panel);
    }
  });
});

function toggleNestedPanel(panel) {
  const isOpen = panel.classList.contains('open');

  if (isOpen) {
    // Animazione di chiusura
    panel.style.maxHeight = panel.scrollHeight + 'px';
    panel.style.opacity = '1';

    requestAnimationFrame(() => {
      panel.style.maxHeight = '0px';
      panel.style.opacity = '0';
      panel.style.paddingTop = '0px';
      panel.style.paddingBottom = '0px';
    });

    // Alla fine della transizione, nascondiamo realmente il pannello
    panel.addEventListener('transitionend', function onEnd(e) {
      if (e.propertyName === 'max-height') {
        panel.classList.remove('open');
        panel.removeEventListener('transitionend', onEnd);
      }
    });
  } else {
    // Animazione di apertura
    panel.classList.add('open');
    panel.style.maxHeight = panel.scrollHeight + 'px';
    panel.style.opacity = '1';
  }
}


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
  panel.style.maxHeight = '0px';
  panel.style.opacity = '0';
  panel.offsetHeight;

  const fullHeight = panel.scrollHeight + 'px';
  panel.style.transition = 'max-height 0.3s ease, opacity 0.3s ease';
  panel.style.maxHeight = fullHeight;
  panel.style.opacity = '1';

  const onEnd = (e) => {
    if (e.propertyName === 'max-height') {
      panel.style.maxHeight = 'none';
      panel.style.overflow = 'visible';
      panel.removeEventListener('transitionend', onEnd);
    }
  };
  panel.addEventListener('transitionend', onEnd);
}

function closePanel(panel) {
  panel.style.overflow = 'hidden';
  panel.style.maxHeight = panel.scrollHeight + 'px';
  panel.style.opacity = '1';
  panel.offsetHeight;

  panel.style.transition = 'max-height 0.3s ease, opacity 0.3s ease';
  panel.style.maxHeight = '0px';
  panel.style.opacity = '0';

  const onEnd = (e) => {
    if (e.propertyName === 'max-height') {
      panel.classList.remove('open');
      panel.style.display = 'none';
      panel.style.maxHeight = '';
      panel.style.overflow = '';
      panel.style.opacity = '';
      panel.style.transition = '';
      panel.removeEventListener('transitionend', onEnd);
    }
  };
  panel.addEventListener('transitionend', onEnd);
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
}

function handleSidebarClick(cardNumber) {
  toggleSidebar();
  scrollToDetails(cardNumber);
  openAccordionSection(cardNumber);
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
