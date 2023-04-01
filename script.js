const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// Password Gen Functions
function pwGenSite() {
    window.open("https://gsford.tech/password-generator/");
}
function pwGenGit() {
    window.open("https://github.com/gregsford/password-generator");
}

// // Drummond Functions
function drummondSite() {
    window.open("https://www.drummondreacts.com/");
}
function drummondGit() {
    window.open("https://github.com/gregsford/drummondreacts");
}

// Globe Tavern Functions
function globeSite() {
    window.open("https://relaxed-cuchufli-c2d2b4.netlify.app/");
}
function globeGit() {
    window.open("https://github.com/gregsford/globe-tavern");
}

// Edefstry Functions
function edefstrySite() {
    window.open("https://graceful-lokum-312181.netlify.app/");
}
function edefstryGit() {
    window.open("https://github.com/gregsford/edefstry2022");
}
