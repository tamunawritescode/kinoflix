    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu   = document.getElementById('mobileMenu');
    const registerButton = document.getElementById('registerbtn');

    registerButton.addEventListener('click', () => {
        alert("Registration was successful!");
    });

    hamburgerBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('open');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });
 
    function openMenu() {
        mobileMenu.classList.add('open');
        hamburgerBtn.classList.add('open');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden'; // prevent background scroll
    }
 
    function closeMenu() {
        mobileMenu.classList.remove('open');
        hamburgerBtn.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
 
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });