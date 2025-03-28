document.addEventListener('DOMContentLoaded', () => {
    // Filtros
    const filtros = document.querySelectorAll('.filtro-btn');
    const items = document.querySelectorAll('.galeria-item');
    
    filtros.forEach(filtro => {
        filtro.addEventListener('click', () => {
            // Remover clase active de todos los filtros
            filtros.forEach(f => f.classList.remove('active'));
            // Agregar clase active al filtro seleccionado
            filtro.classList.add('active');
            
            const categoria = filtro.dataset.categoria;
            
            items.forEach(item => {
                if (categoria === 'todos' || item.dataset.categoria === categoria) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Modal
    const modal = document.getElementById('imagen-modal');
    const modalImg = document.getElementById('imagen-ampliada');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalDescripcion = document.getElementById('modal-descripcion');
    const cerrarModal = document.querySelector('.cerrar-modal');

    items.forEach(item => {
        item.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = item.querySelector('img').src;
            modalTitulo.textContent = item.querySelector('h3').textContent;
            modalDescripcion.textContent = item.querySelector('p').textContent;
        });
    });

    cerrarModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}); 