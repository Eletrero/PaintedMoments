window.addEventListener('load', function() {
    const loaderWrapper = document.getElementById('loader-wrapper');
    const content = document.getElementById('tlt');
    const loaderPercentage = document.getElementById('loader-percentage');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.getElementById('navbar');
    const popup = this.document.getElementById("poup");
    const closeBtn = this.document.getElementById("closeBtn");


    let percentage = 0;
    const increment = 2; // Incremento del porcentaje por paso
    const totalLoadTime = 3000; // Tiempo total de simulación de carga en milisegundos (3 segundos)
    const intervalTime = totalLoadTime / (100 / increment); // Calcula el intervalo para llegar al 100%

    
    location.href='#inicio';

    // Inicia la simulación de carga del porcentaje
    const loadInterval = setInterval(() => {
        percentage += increment;
        if (percentage >= 100) {
            percentage = 100;
            clearInterval(loadInterval); // Detiene el intervalo
            // Un pequeño retraso para ver el 100%
            setTimeout(() => {
                loaderWrapper.classList.add('hidden');
                content.style.display = 'block'; 
                
                hamburgerMenu.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                });

            }, 400); // Pequeño retraso antes de la transición del contenido
            setTimeout(() => {
                navbar.style.display = 'flex';
                
            }, 1000);
            setTimeout(() => {
                popup.style.display = "flex";
            }, 2000);
            closeBtn.addEventListener("click", function() {
                popup.style.opacity = "0";
                popup.style.visibility = 'hidden';
            });
        }
        loaderPercentage.textContent = percentage + '%';
    }, intervalTime);

    // Cierra el menú cuando se hace clic en un enlace (útil para móviles)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});