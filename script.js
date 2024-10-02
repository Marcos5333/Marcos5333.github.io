const sections = {
    contact: document.getElementById('contato'),
    startPage: document.getElementById('inicio'),
    about: document.getElementById('sobre'),
    projects: document.getElementById('projetos'),
    specialties: document.getElementById('especialidades'),
    btnMenu: document.getElementById('btn-menu'),
    menu: document.getElementById('menu-mobile'),
    overlay: document.getElementById('overlay-menu')
}


// Função para scroll automatico.
function scrollToSection(contact, startPage, about, projects, specialties) {
    const sectionContact = sections[contact];
    sectionContact.scrollIntoView({ behavior: 'smooth' });

    const sectionAbout = sections[about];
    sectionAbout.scrollIntoView({ behavior: 'smooth' });

    const sectionStartPage = sections[startPage];
    sectionStartPage.scrollIntoView({ behavior: 'smooth' });

    const sectionProjects = sections[projects];
    sectionProjects.scrollIntoView({ behavior: 'smooth' });

    const sectionSpecialties = sections[specialties];
    sectionSpecialties.scrollIntoView({ behavior: 'smooth' });
}

// Função para abrir ou fechar o menu
function toggleMenu() {
    sections.menu.classList.toggle('abrir-menu');
}
// Adiciona evento de clique ao botão do menu
sections.btnMenu.addEventListener('click', toggleMenu);
// Adiciona evento de clique ao menu para fechá-lo quando clicado
sections.menu.addEventListener('click', toggleMenu);
// Adiciona evento de clique ao overlay para fechar o menu
sections.overlay.addEventListener('click', toggleMenu);