var glass = document.getElementById("magnifying-glass");
var searchBar = document.getElementById("searchBar")
var sideBar = document.getElementById("mobile-nav");
var daftarIsiBar = document.getElementById("daftarIsiNav");
var openSidebar = document.getElementById("openSideBar");
var closeSidebar = document.getElementById("closeSideBar");
var openDaftarIsiNav = document.getElementById("openDaftarIsiNav");
var closeDaftarIsiNav = document.getElementById("closeDaftarIsiNav");
searchBar.addEventListener("focus", function () {
    glass.classList.add("text-white")
    glass.classList.remove("text-gray-500")
});
searchBar.addEventListener("blur", function () {
    glass.classList.remove("text-white")
    glass.classList.add("text-gray-500")
})

function sidebarHandler(flag) {
    if (flag) {
        sideBar.style.transform = "translateX(0)"
        openSidebar.classList.add("hidden");
        closeSidebar.classList.remove("hidden");
    } else {
        sideBar.style.transform = "translateX(-260px)"
        closeSidebar.classList.add("hidden");
        openSidebar.classList.remove("hidden");
    }
}
function daftarIsiHandler(flag) {
    if (flag) {
        daftarIsiBar.style.transform = "translateX(0)";
        openDaftarIsiNav.classList.add("hidden");
        closeDaftarIsiNav.classList.remove("hidden");
    } else {
        daftarIsiBar.style.transform = "translateX(-350px)";
        closeDaftarIsiNav.classList.add("hidden");
        openDaftarIsiNav.classList.remove("hidden");
    }
}
function tentang(data) {
    const tokohEl = document.querySelector(".tokoh")
    const sinopsisEl = document.querySelector(".sinopsis")
    const buttonData = data.getAttribute("data-button")
    const sinopsisView = document.querySelector("#sinopsisView")
    if (buttonData == "sinopsis") {
        if (sinopsisEl.classList.contains("hidden")) {
            sinopsisEl.classList.remove("hidden")
            tokohEl.classList.add("hidden")
            if (!sinopsisEl.classList.contains("terlihat")) {
                const elementHeight = sinopsisView.clientHeight + 700
                window.scrollTo(0, elementHeight);
            }
        }
    } else if (buttonData == "tokoh") {
        if (tokohEl.classList.contains("hidden")) {
            tokohEl.classList.remove("hidden")
            sinopsisEl.classList.add("hidden")
            if (!tokohEl.classList.contains("terlihat")) {
                const elementHeight = tokohEl.clientHeight;
                window.scrollTo(0, elementHeight);
            }
        }
    }
}

const buttonDaftarIsi = document.querySelectorAll("[target-cerita]")
buttonDaftarIsi.forEach(function (el) {
    el.addEventListener('click', function () {
        buttonDaftarIsi.forEach(function (element) {
            element.classList.remove('daftarIsi-active')
        })
        this.classList.add('daftarIsi-active')
    })
})

// btn tentang
const btn_tentang = document.querySelectorAll('.btn-tentang')
btn_tentang.forEach(function (el) {
    el.addEventListener('click', function () {
        btn_tentang.forEach(function (element) {
            element.classList.remove('btn-active')
        })
        this.classList.add('btn-active')
    })
})
// Nav Item
const nav_items = document.querySelectorAll('.nav_item')
nav_items.forEach(function (el) {
    el.addEventListener('click', function () {
        nav_items.forEach(function (element) {
            element.classList.remove('sidebar-active')
        })
        this.classList.add('sidebar-active')
    })
})

const section = document.querySelectorAll("section")
const navLink = document.querySelectorAll(".nav_item")

function activeMenuOnScroll() {
    let current = '';

    section.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const pageOffset = pageYOffset + 250;
        if (pageOffset >= sectionTop)
            current = section.getAttribute('id');
    })

    navLink.forEach(navItem => {
        navItem.classList.remove("sidebar-active")
        if (navItem.classList.contains(current)) {
            navItem.classList.add("sidebar-active")
        }
    })
}
window.addEventListener("scroll", activeMenuOnScroll)
