let users = [    
    {
        "id": 1,
        "name": "Gabriel Darezzo",
        "username": "darezzo.gabriel",
        "password": "YWRtaW4="        
    },
    {
        "id": 2,
        "name": "Lucas",
        "username": "lucas.1800",
        "password": "YWRtaW4="        
    },
    {
        "id": 3,
        "name": "User Admin",
        "username": "admin",
        "password": "MTIzNA=="
    },
];

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    for(i in users){
        let user = users[i];

        let username = document.getElementById("usuario").value;
        let password = document.getElementById("senha").value;
        if (username === user.username && btoa(password) === user.password) {
            window.location.href = "menu.html";
            return false;
        }
    }

    // Exiba uma mensagem de erro de login (opcional)
    alert("Credenciais inválidas. Tente novamente.");
});