document.addEventListener('DOMContentLoaded', function () {
    const parallax = document.getElementById('parallax');
    const rotateMe = document.getElementById('rotateMe');

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', function (e) {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

        // Update the shadow position based on mouse movement
        rotateMe.style.boxShadow = `${-mouseX * 20}px ${-mouseY * 20}px 2px 2px rgba(0, 0, 0, 0.5)`;
    });

    document.addEventListener('scroll', function () {
        parallax.style.backgroundPositionY = window.scrollY * 0.4 + 'px';
    });

    function handleRotation() {
        rotateMe.style.transform = `rotateX(${mouseY * 30}deg) rotateY(${mouseX * 30}deg)`;
        requestAnimationFrame(handleRotation);
    }

    handleRotation();
});
