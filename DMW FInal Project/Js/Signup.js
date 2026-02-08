// Signup: create a new user with default role 'Team'.
document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('signupForm');
    if (!form) return;
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const name = document.getElementById('Name').value.trim();
        const email = document.getElementById('Email').value.trim().toLowerCase();
        const password = document.getElementById('password').value;
        if (!email || !password) { alert('Email and password required'); return; }
        const users = JSON.parse(localStorage.getItem('users') || 'null') || [];
        if (users.find(u=>u.email === email)) { alert('An account with that email already exists'); return; }
        users.push({name, email, password, role: 'Team'});
        localStorage.setItem('users', JSON.stringify(users));
        alert('Account created. Your role is Team. Contact CEO for role changes.');
        window.location.href = 'Login.html';
    });
});