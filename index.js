document.addEventListener('DOMContentLoaded', () => {
    // Obtener todos los contenedores de proyectos
    const projectContainers = document.querySelectorAll('.project');

    projectContainers.forEach(projectContainer => {
        // Obtener las URLs del GIF y la imagen estática
        const gifUrl = projectContainer.getAttribute('data-gif');
        const staticUrl = projectContainer.getAttribute('data-static');

        // Cuando el cursor entre al contenedor
        projectContainer.addEventListener('mouseenter', () => {
            projectContainer.style.backgroundImage = `url('${gifUrl}')`;  // Mostrar GIF
        });

        // Cuando el cursor salga del contenedor
        projectContainer.addEventListener('mouseleave', () => {
            projectContainer.style.backgroundImage = `url('${staticUrl}')`;  // Volver a la imagen estática
        });
    });
});
