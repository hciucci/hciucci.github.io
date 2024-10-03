// javascript for toggling the hamburger menu
document.getElementById('menuToggle').addEventListener('click', function () {
    const navList = this.querySelector('ul');
    navList.classList.toggle('active');
});
