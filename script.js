document.addEventListener('DOMContentLoaded', function() {
    const scrollUpArrow = document.createElement('div');
    scrollUpArrow.innerHTML = '⬆️'; // Emoji de flecha, puedes reemplazarlo por un ícono
    scrollUpArrow.style.position = 'fixed';
    scrollUpArrow.style.left = '20px';
    scrollUpArrow.style.bottom = '50%';
    scrollUpArrow.style.cursor = 'pointer';
    scrollUpArrow.style.display = 'none'; // Oculta inicialmente
    document.body.appendChild(scrollUpArrow);

    scrollUpArrow.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) { // Se muestra después de un mínimo scroll
            scrollUpArrow.style.display = 'block';
        } else {
            scrollUpArrow.style.display = 'none';
        }
    });
});
