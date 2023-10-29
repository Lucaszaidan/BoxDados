document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("usuario").value;
    var password = document.getElementById("senha").value;

    if (username === "admin" && password === "1234") {
        // Login bem-sucedido, redirecione para a página do menu
        window.location.href = "menu.html";
    } else {
        // Exiba uma mensagem de erro de login (opcional)
        alert("Credenciais inválidas. Tente novamente.");
    }
});