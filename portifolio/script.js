
const habilidades = document.querySelectorAll('.card-habilidades .card');
const projetos = document.querySelectorAll('.card-projetos .card1');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); 
            observer.unobserve(entry.target); 
        }
    });
});

habilidades.forEach(card => {
    observer.observe(card);
});

projetos.forEach(card => {
    observer.observe(card);
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});
