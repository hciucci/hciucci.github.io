// JS for toggling the hamburger menu on mobile
document.getElementById('menuToggle').addEventListener('click', function () {
    const navList = document.querySelector('.navbar ul');
    navList.classList.toggle('active');
});
