document.addEventListener('DOMContentLoaded', function() {
    const docentiModal = document.getElementById('docentiModal');
    const studentiModal = document.getElementById('studentiModal');
    const materialiModal = document.getElementById('materialiModal');
    const allegatiAccordion = document.getElementById('allegatiAccordion');

    // Funzione per chiudere l'accordion
    function closeAccordion() {
        if (allegatiAccordion) {
            allegatiAccordion.classList.remove('show');  // Chiude l'accordion
        }
    }

    // Aggiungi l'event listener per ogni modale
    if (docentiModal) {
        docentiModal.addEventListener('hidden.bs.modal', closeAccordion); // Chiude l'accordion quando la modale docenti viene chiusa
    }

    if (studentiModal) {
        studentiModal.addEventListener('hidden.bs.modal', closeAccordion); // Chiude l'accordion quando la modale studenti viene chiusa
    }

    if (materialiModal) {
        materialiModal.addEventListener('hidden.bs.modal', closeAccordion); // Chiude l'accordion quando la modale materiali viene chiusa
    }
});