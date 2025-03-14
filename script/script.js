// Funzione per attivare/disattivare il menu hamburger
function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('header nav');
    menuIcon.classList.toggle('active');
    nav.classList.toggle('active');
}

// Funzione per gestire il clic sui link del menu e aprire la sezione corrispondente
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetSection = e.target.getAttribute('data-target');
        const sectionToShow = document.getElementById(targetSection);

        // Nascondi tutte le sezioni
        const allSections = document.querySelectorAll('.section');
        allSections.forEach(section => {
            section.style.display = 'none';

            // Nascondi anche tutte le sottosezioni
            const subsections = section.querySelectorAll('.allegati');
            subsections.forEach(subsection => {
                subsection.style.display = 'none';
            });
        });

        // Mostra la sezione selezionata
        sectionToShow.style.display = 'block';

        window.scrollTo(0, sectionToShow.offsetTop);

        // Nascondi il menu hamburger una volta cliccato (in caso di schermo piccolo)
        toggleMenu();
    });
});

// Funzione per gestire il clic sulle card (scopri di più)
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const targetSection = e.target.getAttribute('data-target');
        const sectionToShow = document.getElementById(targetSection);

        const allSections = document.querySelectorAll('.section');
        allSections.forEach(section => {
            section.style.display = 'none';

            // Nascondi anche tutte le sottosezioni
            const subsections = section.querySelectorAll('.allegati');
            subsections.forEach(subsection => {
                subsection.style.display = 'none';
            });
        });

        sectionToShow.style.display = 'block';
        window.scrollTo(0, sectionToShow.offsetTop);
    });
});

// Funzione per gestire il download degli allegati dei bandi
function downloadAllegato(fileUrl) {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = '';
    link.click();
}

// Funzione per regolare la dimensione delle immagini nello slideshow
function adjustImageSize() {
    const slides = document.querySelectorAll('.slide img');
    slides.forEach(slide => {
        const slideContainer = slide.closest('.slide');
        const containerWidth = slideContainer.offsetWidth;
        const containerHeight = slideContainer.offsetHeight;
        const containerAspectRatio = containerWidth / containerHeight;
        const imageAspectRatio = slide.naturalWidth / slide.naturalHeight;

        if (imageAspectRatio > containerAspectRatio) {
            slide.style.width = '100%';
            slide.style.height = 'auto';
        } else {
            slide.style.height = '100%';
            slide.style.width = 'auto';
        }
    });
}

// Funzione per gestire lo slideshow
let slideIndex = 1;
function showSlides() {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');

    slides.forEach(slide => {
        slide.style.display = "none";
        slide.style.opacity = "0";
    });

    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    slides[slideIndex - 1].style.display = "block";
    setTimeout(() => {
        slides[slideIndex - 1].style.opacity = "1";
    }, 10);

    dots[slideIndex - 1].classList.add('active');
}

function moveSlide(n) {
    let slides = document.querySelectorAll('.slide');
    slideIndex += n;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

// Funzione per aprire la sezione corrispondente al click sull'immagine
function showSection(imgElement) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';

        // Nascondi tutte le sottosezioni
        const subsections = section.querySelectorAll('.allegati');
        subsections.forEach(subsection => {
            subsection.style.display = 'none';
        });
    });

    const targetSectionId = imgElement.getAttribute('data-target');
    const targetSection = document.getElementById(targetSectionId);
    targetSection.style.display = 'block';

    window.scrollTo(0, targetSection.offsetTop);
}

// Funzione per chiudere la sezione
function closeSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = 'none';

    // Nascondi tutte le sottosezioni della sezione
    const subsections = section.querySelectorAll('.allegati');
    subsections.forEach(subsection => {
        subsection.style.display = 'none';
    });
}

// Funzione per alternare la visibilità delle sottosezioni
function toggleSubSection(sectionId, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const section = document.getElementById(sectionId);

    // Se la sezione è già visibile, la chiudiamo
    if (section.style.display === 'block') {
        section.style.display = 'none';
        return;
    }

    // Chiudi tutte le sottosezioni aperte prima di aprire quella selezionata
    const allSubSections = document.querySelectorAll('.allegati');
    allSubSections.forEach(subsection => {
        subsection.style.display = 'none';
    });

    // Mostra la sottosezione selezionata
    section.style.display = 'block';
}

// Funzione per avviare lo slideshow quando la finestra è caricata
window.onload = function() {
    showSlides();
    adjustImageSize();
};
