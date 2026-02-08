document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users') || 'null');
    if (!users) {
        // seed an initial CEO account if none exist
        users = [{email:'admin@company.com', name:'Admin', password:'admin', role:'CEO'}];
        localStorage.setItem('users', JSON.stringify(users));
    }

    const user = users.find(u=>u.email === email);
    const err = document.getElementById('loginError');
    if (!user) {
        err.textContent = 'Account not found. Please sign up or contact your manager.';
        err.classList.remove('d-none');
        return;
    }
    if (user.password !== password) {
        err.textContent = 'Incorrect password.';
        err.classList.remove('d-none');
        return;
    }

    // success: store session
    localStorage.setItem('userRole', user.role);
    localStorage.setItem('userName', user.name || user.email.split('@')[0]);
    localStorage.setItem('userEmail', user.email);
    window.location.href = 'Dashboard.html';
});

// If already logged in, redirect to dashboard
if (localStorage.getItem('userRole')) {
    // keep them on login only if explicitly logging out
}
