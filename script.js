function switchView(viewId) {
    // 1. Pobierz wszystkie sekcje formularza
    const sections = document.querySelectorAll('.form-section');
    
    // 2. Ukryj wszystkie sekcje (zdejmij klasę active)
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 3. Pokaż wybraną sekcję (dodaj klasę active)
    const activeSection = document.getElementById(viewId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}