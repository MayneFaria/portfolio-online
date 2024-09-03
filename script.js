document.addEventListener("DOMContentLoaded", function() {
    // Obtenha o ID do menu (menu-index, menu-sobre, etc.)
    const menuId = document.querySelector('nav').id;

    // Use o ID para selecionar o link correspondente
    const activeLink = document.querySelector(#${menuId} a[href="${menuId.replace('menu-', '')}.html"]);

    // Adicione a classe 'active' ao link correspondente
    if (activeLink) {
        activeLink.classList.add('active');
    }
});