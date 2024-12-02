document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    if (username && password) localStorage.setItem('loginData', JSON.stringify({ username, password }));
});