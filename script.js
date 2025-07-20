
function closePromo() {
    document.getElementById('promoOffer').style.display = 'none';
}

function scrollImages(direction) {
    const container = document.getElementById("imageContainer");
    const scrollAmount = 310; // image width + margin
    container.scrollLeft += direction * scrollAmount;
}

function scrollImages(containerId, direction) {
    const container = document.getElementById(containerId);
    const scrollAmount = 310; // adjust based on your actual card width
    container.scrollLeft += direction * scrollAmount;
}

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('login-popup').style.display = 'flex';
    }, 3000);
});

function closeLoginPopup() {
    document.getElementById('login-popup').style.display = 'none';
}

document.querySelector('.close-login').addEventListener('click', closeLoginPopup);

document.querySelector('.login-box button').addEventListener('click', closeLoginPopup);

document.getElementById("open-login").addEventListener("click", function (e) {
    e.preventDefault(); // Prevents page jump or reload
    document.getElementById("login-popup").style.display = "flex"; // Or "block" based on your CSS
});
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    if (menu.style.right === "0px") {
        menu.style.right = "-100%";
    } else {
        menu.style.right = "0px";
    }
}

function filterImages(category) {
    const products = document.querySelectorAll('.collections');

    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const activeFilters = Array.from(checkboxes)
        .map(checkbox => checkbox.getAttribute('onclick').match(/'([^']+)'/)[1]);

    products.forEach(product => {
        if (category === 'all' || activeFilters.length === 0) {
            product.style.display = 'block';
        } else {
            const hasAnyClass = activeFilters.some(filter => product.classList.contains(filter));
            product.style.display = hasAnyClass ? 'block' : 'none';
        }
    });
}
document.querySelectorAll('.heart-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('active');
    });
});


function toggleFilter() {
    const menu = document.getElementById("filterMenu");
    menu.classList.toggle("open");
}


