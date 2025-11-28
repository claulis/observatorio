/**
 * Presença Africana no Distrito Federal
 * Script principal – scroll suave + animações
 * Autor: [Seu Nome] – 2025
 */

document.addEventListener('DOMContentLoaded', function () {
    // ==================== SCROLL SUAVE COM OFFSET ====================
    const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
    const headerHeight = 160; // 100px banner + ~60px menu (ajuste se necessário)

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href'); // ex: "#equipe"
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const topOffset = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: topOffset,
                    behavior: 'smooth'
                });

                // Atualiza URL sem recarregar
                history.pushState(null, null, targetId);
            }
        });
    });

    // ==================== ANIMAÇÃO DE ENTRADA DAS SEÇÕES ====================
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -10% 0px', // ativa um pouco antes de entrar totalmente na tela
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: parar de observar após animar (melhor performance)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});