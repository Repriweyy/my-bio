const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    // Плавное следование точки за курсором
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Эффект при наведении на кликабельные элементы
const activeElements = document.querySelectorAll('a, button, .glass-card, input, textarea');

activeElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(2)';
        cursor.style.background = '#bca89f'; // Цвет акцента Walnut Noir
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.background = '#fff';
    });
});