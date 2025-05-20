// ====== Dati immagini ======
const images = {
  "gallerie/erasmus_bergen/weekbergen": [
    'gallerie/erasmus_bergen/weekbergen/slide5.jpg', 'gallerie/erasmus_bergen/weekbergen/slide6.jpg',
    'gallerie/erasmus_bergen/weekbergen/slide7.jpg', 'gallerie/erasmus_bergen/weekbergen/slide8.jpg', 
    'gallerie/erasmus_bergen/weekbergen/slide9.jpg',
    'gallerie/erasmus_bergen/weekbergen/slide10.jpg', 'gallerie/erasmus_bergen/weekbergen/slide12.jpg',
    'gallerie/erasmus_bergen/weekbergen/slide13.jpg', 'gallerie/erasmus_bergen/weekbergen/slide14.jpg',
    'gallerie/erasmus_bergen/weekbergen/slide15.jpg', 'gallerie/erasmus_bergen/weekbergen/slide16.jpg',
    'gallerie/erasmus_bergen/weekbergen/slide17.jpg','gallerie/erasmus_bergen/weekbergen/slide18.jpg',
    'gallerie/erasmus_bergen/weekbergen/slide19.jpg','gallerie/erasmus_bergen/weekbergen/slide20.jpg',
    'gallerie/erasmus_bergen/weekbergen/slide21.jpg','gallerie/erasmus_bergen/weekbergen/slide22.jpg',
    'gallerie/erasmus_bergen/weekbergen/slide23.jpg','gallerie/erasmus_bergen/weekbergen/slide24.jpg',
    'gallerie/erasmus_bergen/weekbergen/job1.jpg', 'gallerie/erasmus_bergen/weekbergen/job2.jpg',
    'gallerie/erasmus_bergen/weekbergen/job3.jpg','gallerie/erasmus_bergen/weekbergen/job4.jpg',
    'gallerie/erasmus_bergen/weekbergen/job5.jpg','gallerie/erasmus_bergen/weekbergen/job6.jpg',
    'gallerie/erasmus_bergen/weekbergen/job7.jpg','gallerie/erasmus_bergen/weekbergen/job8.jpg',
    'gallerie/erasmus_bergen/weekbergen/job9.jpg','gallerie/erasmus_bergen/weekbergen/job10.jpg',
  ],
  "gallerie/erasmus_bergen/weekmilan": [
    'gallerie/erasmus_bergen/weekmilan/img1.jpg','gallerie/erasmus_bergen/weekmilan/img2.jpg',
    'gallerie/erasmus_bergen/weekmilan/img3.jpg','gallerie/erasmus_bergen/weekmilan/img4.JPG',
    'gallerie/erasmus_bergen/weekmilan/img5.JPG','gallerie/erasmus_bergen/weekmilan/img6.jpg'
    
  ],
  "gallerie/erasmus_bergen/docenti": [
     'gallerie/erasmus_bergen/docenti/img1.jpg','gallerie/erasmus_bergen/docenti/img2.jpg',
     'gallerie/erasmus_bergen/docenti/img3.jpg','gallerie/erasmus_bergen/docenti/img4.jpg',
     'gallerie/erasmus_bergen/docenti/img5.jpg','gallerie/erasmus_bergen/docenti/img6.jpg',
     'gallerie/erasmus_bergen/docenti/img7.jpg','gallerie/erasmus_bergen/docenti/img8.jpg',
     'gallerie/erasmus_bergen/docenti/img9.jpg','gallerie/erasmus_bergen/docenti/img10.jpg'
  ],
  "gallerie/erasmus_alcala/weekalcala": [
    "gallerie/erasmus_alcala/weekalcala/img1.jpg","gallerie/erasmus_alcala/weekalcala/img2.jpg",
    "gallerie/erasmus_alcala/weekalcala/img3.jpg","gallerie/erasmus_alcala/weekalcala/img4.jpg",
    "gallerie/erasmus_alcala/weekalcala/img5.jpeg","gallerie/erasmus_alcala/weekalcala/img6.jpg",
    "gallerie/erasmus_alcala/weekalcala/img7.jpg","gallerie/erasmus_alcala/weekalcala/img8.jpg",
    "gallerie/erasmus_alcala/weekalcala/img9.jpg",
  ],
  "gallerie/erasmus_alcala/weekmilan": [
    "gallerie/erasmus_alcala/weekmilan/img1.jpg","gallerie/erasmus_alcala/weekmilan/img2.jpg",
    "gallerie/erasmus_alcala/weekmilan/img3.jpg","gallerie/erasmus_alcala/weekmilan/img4.jpeg",
    "gallerie/erasmus_alcala/weekmilan/img5.jpg","gallerie/erasmus_alcala/weekmilan/img6.jpeg",
    "gallerie/erasmus_alcala/weekmilan/img7.jpeg","gallerie/erasmus_alcala/weekmilan/img8.jpg",
    "gallerie/erasmus_alcala/weekmilan/img9.jpg","gallerie/erasmus_alcala/weekmilan/img10.jpeg",
    "gallerie/erasmus_alcala/weekmilan/img11.jpeg",
  ],

 "gallerie/erasmus_alcala/docenti": [
    "gallerie/erasmus_alcala/docenti/img1.jpg", "gallerie/erasmus_alcala/docenti/img2.jpg",
    "gallerie/erasmus_alcala/docenti/img3.jpg", "gallerie/erasmus_alcala/docenti/img4.jpg",
    "gallerie/erasmus_alcala/docenti/img5.jpg", "gallerie/erasmus_alcala/docenti/img6.jpg",
    "gallerie/erasmus_alcala/docenti/img7.jpg", "gallerie/erasmus_alcala/docenti/img8.jpg",
    "gallerie/erasmus_alcala/docenti/img9.jpg", "gallerie/erasmus_alcala/docenti/img10.jpg",
    "gallerie/erasmus_alcala/docenti/img11.jpg", "gallerie/erasmus_alcala/docenti/img12.jpg",
    "gallerie/erasmus_alcala/docenti/img13.jpg", "gallerie/erasmus_alcala/docenti/img14.jpg",
    "gallerie/erasmus_alcala/docenti/img15.jpg","gallerie/erasmus_alcala/docenti/img16.jpg",
    "gallerie/erasmus_alcala/docenti/img17.jpg","gallerie/erasmus_alcala/docenti/img18.jpg",
  ],
  "gallerie/erasmus_copenaghen/docenti": [
    "gallerie/erasmus_copenaghen/docenti/img1.jpg", "gallerie/erasmus_copenaghen/docenti/img2.jpg",
    "gallerie/erasmus_copenaghen/docenti/img3.jpg", "gallerie/erasmus_copenaghen/docenti/img4.jpg",
    "gallerie/erasmus_copenaghen/docenti/img5.jpg", "gallerie/erasmus_copenaghen/docenti/img6.jpg",
    "gallerie/erasmus_copenaghen/docenti/img7.jpg", "gallerie/erasmus_copenaghen/docenti/img8.jpg",
    "gallerie/erasmus_copenaghen/docenti/img9.jpg", "gallerie/erasmus_copenaghen/docenti/img10.jpg",
    "gallerie/erasmus_copenaghen/docenti/img11.jpg","gallerie/erasmus_copenaghen/docenti/img12.jpg", 
    "gallerie/erasmus_copenaghen/docenti/img13.jpg","gallerie/erasmus_copenaghen/docenti/img14.jpg",
    "gallerie/erasmus_copenaghen/docenti/img15.jpg", "gallerie/erasmus_copenaghen/docenti/img16.jpg",
    "gallerie/erasmus_copenaghen/docenti/img17.jpg", "gallerie/erasmus_copenaghen/docenti/img18.jpg",
    "gallerie/erasmus_copenaghen/docenti/img19.jpg", "gallerie/erasmus_copenaghen/docenti/img20.jpg",
    "gallerie/erasmus_copenaghen/docenti/img21.jpg", "gallerie/erasmus_copenaghen/docenti/img22.jpg",
    "gallerie/erasmus_copenaghen/docenti/img23.jpg", "gallerie/erasmus_copenaghen/docenti/img24.jpg",
    "gallerie/erasmus_copenaghen/docenti/img25.jpg", "gallerie/erasmus_copenaghen/docenti/img26.jpg",
    "gallerie/erasmus_copenaghen/docenti/img27.jpg",
  ]

};
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
  if (!imageList) {
    console.warn(`Nessuna immagine trovata per: ${subdirectory}`);
    return;
  }

  hideGallery();

  imageSection.style.display = 'grid';
  closeGalleryBtn.style.display = 'flex';
  currentImages = imageList;
  currentIndex = 0;

  imageList.forEach(src => {
    const placeholder = document.createElement('div');
    placeholder.classList.add('placeholder');
    imageSection.appendChild(placeholder);

    const img = new Image();
    img.src = src;
    img.alt = '';
    img.loading = 'lazy';
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.4s ease';
    img.style.width = '100%';
    img.style.height = '250px';
    img.style.objectFit = 'cover';
    img.style.borderRadius = '10px';
    img.style.cursor = 'pointer';

    imageSection.appendChild(img);

    img.onload = () => {
      img.classList.add('loaded');
      placeholder.remove();
      requestAnimationFrame(() => {
        img.style.opacity = '1';
      });
    };

    img.onerror = () => {
      console.warn(`Immagine non trovata: ${src}`);
      placeholder.style.backgroundColor = '#ccc';
      placeholder.style.animation = 'none';
    };

    img.onclick = () => openModalImage(src);
  });

  

  setTimeout(() => {
    window.scrollTo({ top: imageSection.offsetTop - 20, behavior: 'smooth' });
  }, 100);
}


function hideGallery() {
  imageSection.style.display = 'none';
  closeGalleryBtn.style.display = 'none';

  // Rimuove solo immagini e placeholder, NON il bottone
  imageSection.querySelectorAll('img, .placeholder').forEach(el => el.remove());

  
}
closeGalleryBtn.addEventListener('click', hideGallery);
function openModalImage(src) {
  const modal = document.getElementById('modalImage');
  const modalImg = document.getElementById('modal-img');
  modalImg.src = src;

  if (!modal.classList.contains('open')) {
    document.addEventListener('keydown', handleKeydown);
    addSwipeListeners();
    modal.classList.add('open');
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
  modal.classList.remove('open'); 

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
  if (Math.abs(diffX) > 50) { 
    if (diffX > 0) {
      prevImg(); 
    } else {
      nextImg(); 
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

  const detailsSection = document.getElementById(`details${cardNumber}`);
  if (!detailsSection) return;

  detailsSection.style.display = 'block';

  requestAnimationFrame(() => {
    detailsSection.offsetHeight; // forza repaint

    setTimeout(() => {
      detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

      let accordionId = '';
      if (cardNumber == 1) accordionId = 'accordion-docenti';
      if (cardNumber == 2) accordionId = 'accordion-studenti';
      if (cardNumber == 3) accordionId = 'accordion-risorse';

      const acc = document.getElementById(accordionId);
      if (acc && !acc.classList.contains('active')) acc.click();
    }, 50); 
  });
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

    
  if (!isNested) {
  
  document.querySelectorAll('.panel.open').forEach(p => {
    if (p !== panel) {
      closePanel(p);
      p.previousElementSibling?.classList.remove('active');
    }
  });
}else {
      
      const parentPanel = panel.parentElement;
      parentPanel.querySelectorAll(':scope > .panel.open').forEach(siblingPanel => {
        if (siblingPanel !== panel) {
          closePanel(siblingPanel);
          siblingPanel.previousElementSibling?.classList.remove('active');
        }
      });
    }

   
    if (!isOpen) {
      this.classList.add('active');
      openPanel(panel);
    } else {
      this.classList.remove('active');

      
      panel.querySelectorAll('.panel.open').forEach(openChild => {
        closePanel(openChild);
        openChild.previousElementSibling?.classList.remove('active');
      });

      closePanel(panel);
      hideGallery?.(); 
    }
  });
});

function openPanel(panel) {
  panel.classList.add('open');
  panel.style.display = 'block';
  panel.style.overflow = 'hidden';
  panel.style.maxHeight = '0px';
  panel.style.opacity = '0';
  panel.style.transform = 'scaleY(0.98)';
  panel.offsetHeight;

  const fullHeight = panel.scrollHeight + 'px';
  panel.style.transition = 'max-height 0.5s ease, opacity 0.5s ease, transform 0.3s ease';
  panel.style.maxHeight = fullHeight;
  panel.style.opacity = '1';
  panel.style.transform = 'scaleY(1)';

  panel.addEventListener('transitionend', function onEnd(e) {
    if (e.propertyName === 'max-height') {
      panel.style.overflow = 'visible';
      panel.style.maxHeight = 'none'; 
      panel.removeEventListener('transitionend', onEnd);
    }
  });
}

function closePanel(panel) {
  const height = panel.scrollHeight + 'px';
  panel.style.maxHeight = height;
  panel.style.opacity = '1';
  panel.style.transform = 'scaleY(1)';
  panel.style.overflow = 'hidden';
  panel.style.transition = 'max-height 0.4s ease, opacity 0.3s ease, transform 0.3s ease';
  panel.offsetHeight; 
  panel.style.maxHeight = '0px';
  panel.style.opacity = '0';
  panel.style.transform = 'scaleY(0.98)';

  panel.addEventListener('transitionend', function onEnd(e) {
    if (e.propertyName === 'max-height') {
      panel.classList.remove('open');
      panel.style.display = 'none';
      panel.style.maxHeight = '';
      panel.style.opacity = '';
      panel.style.transition = '';
      panel.style.overflow = '';
      panel.style.transform = '';
      panel.removeEventListener('transitionend', onEnd);
    }
  });
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
let modalImage = document.querySelector('.modalImage img');

  let startDist = 0;
  let scale = 1;

  modalImage.addEventListener('touchstart', function(e) {
    if (e.touches.length === 2) {
      startDist = getDistance(e.touches[0], e.touches[1]);
    }
  });

  modalImage.addEventListener('touchmove', function(e) {
    if (e.touches.length === 2) {
      let dist = getDistance(e.touches[0], e.touches[1]);
      scale *= dist / startDist;
      modalImage.style.transform = `scale(${scale})`;
      startDist = dist;
    }
  });

  function getDistance(touch1, touch2) {
    let dx = touch2.pageX - touch1.pageX;
    let dy = touch2.pageY - touch1.pageY;
    return Math.sqrt(dx * dx + dy * dy);
  }