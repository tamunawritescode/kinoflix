    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu   = document.getElementById('mobileMenu');
    const registerButton = document.getElementById('registerbtn');
    const searchBtn = document.getElementById('searchToggle');
    const searchBar = document.getElementById('searchBar');

    searchBtn.addEventListener('click', () => {
        if(searchBar.style.display == 'none' || searchBar.style.display == ''){
            searchBar.style.display = 'block';
        }else{
            searchBar.style.display = 'none';
        } 
    });

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