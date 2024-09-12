document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.querySelector('.stars');
    const starCount = 1000; 

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = `${Math.random() * 5 + 2}px`;
        star.style.height = star.style.width;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 5 + 5}s`;
        star.style.background = 'rgba(255, 0, 0, 0.8)'; // Red color
        starContainer.appendChild(star);
    }
});