document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const sideMenu = document.getElementById("sideMenu");
    const closeButton = document.getElementById("closeButton");
    const body = document.body;

    // Quando o botão de menu for clicado, abre o menu
    menuButton.addEventListener("click", () => {
        sideMenu.classList.add("open");
        body.style.overflow = "hidden"; // Impede rolagem da página quando o menu está aberto
    });

    // Quando o botão de fechar for clicado, fecha o menu
    closeButton.addEventListener("click", () => {
        sideMenu.classList.remove("open");
        body.style.overflow = ""; // Restaura a rolagem da página
    });

    // Fecha o menu ao clicar fora dele
    window.addEventListener("click", (e) => {
        if (!sideMenu.contains(e.target) && e.target !== menuButton) {
            sideMenu.classList.remove("open");
            body.style.overflow = ""; // Restaura a rolagem
        }
    });
});
