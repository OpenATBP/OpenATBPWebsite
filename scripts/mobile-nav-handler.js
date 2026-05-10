window.addEventListener('load', function() {
    const mobileNavOpenBtn = document.getElementById('mobile-nav-open-btn');
    const mobileNavCloseBtn = document.getElementById('mobile-nav-close');
    const mobileNav = document.getElementById('mobile-nav');

    mobileNavOpenBtn.addEventListener('click', function() {
        mobileNav.style.left = '0';
        mobileNavOpenBtn.style.display = 'none';
    });

    mobileNavCloseBtn.addEventListener('click', function() {
        mobileNav.style.left = '-100%';
        mobileNavOpenBtn.style.display = 'flex';
    });
});
    
