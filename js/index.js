document.addEventListener('DOMContentLoaded', function () {
    const menuBurguer = document.querySelector("#menu");
    const menuItems = document.querySelectorAll(".menu-item");


    menuBurguer.addEventListener('click', function () {
        document.body.classList.toggle('menu-mobile-active');
    });


    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function () {
            document.body.classList.remove('menu-mobile-active');
        })
    })

});

