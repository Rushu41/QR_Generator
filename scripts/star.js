document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.querySelector('.stars');
    const starCount = 1000; // Number of stars

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = `${Math.random() * 5 + 2}px`;
        star.style.height = star.style.width;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 5 + 5}s`;
        starContainer.appendChild(star);
    }
});