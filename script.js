document.addEventListener('scroll', function () {
    const parallax = document.getElementById('parallax');
    parallax.style.backgroundPositionY = window.scrollY * 0.4 + 'px';

    // Add a 3D rotation animation to the parallax content
    anime({
        targets: '#rotateMe',
        rotateX: window.scrollY / 10, // Adjust the rotation speed
        rotateY: window.scrollY / 20, // Adjust the rotation speed
        easing: 'easeInOutQuad', // You can choose different easing functions
    });
});
