function generateTreeHearts() {
    const canvas = document.getElementById('tree-canvas');
    const totalHearts = 120; // Más corazones para que se vea lleno

    for (let i = 0; i < totalHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'leaf-heart';
        heart.innerHTML = '❤️';

        // Lógica para formar una copa redondeada/corazón
        // Usamos coordenadas polares para concentrarlos arriba
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 100; // Radio de la copa
        
        // Desplazamos el centro hacia arriba para que no salgan del tronco
        const x = 150 + Math.cos(angle) * radius * 1.2; 
        const y = 140 + Math.sin(angle) * radius;

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        
        // Rotación aleatoria para cada corazón
        heart.style.setProperty('--rot', `${Math.random() * 360}deg`);
        
        // Retraso aleatorio para que parezca que el árbol "florece"
        heart.style.animationDelay = `${Math.random() * 2}s`;

        canvas.appendChild(heart);
    }
}

