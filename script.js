document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Simples verificação de login (usuário fixo para teste)
    if (username === "admin" && password === "1234") {
        alert("Login bem-sucedido!");
        window.location.href = "dashboard.html"; // Redireciona para outra página
    } else {
        errorMessage.textContent = "Usuário ou senha incorretos!";
    }
});