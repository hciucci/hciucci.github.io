// JS for toggling the hamburger menu on mobile
document.getElementById('menuToggle').addEventListener('click', function () {
    const navList = document.querySelector('.navbar ul');  // Select the <ul> element
    navList.classList.toggle('active');  // Toggle the 'active' class
});
