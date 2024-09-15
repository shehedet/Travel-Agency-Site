// Simple JavaScript to manage user dropdown based on login status
const userOptions = document.getElementById('user-options');

// Simulate user login state (you can replace this logic with real login checks)
const isLoggedIn = false;

if (isLoggedIn) {
    userOptions.innerHTML = `
        <li><a href="../html/profile_view.html">Profile</a></li>
        <li><a href="#">Sign Out</a></li>
    `;
} else {
    userOptions.innerHTML = `
        <li><a href="../html/signup.html">Sign Up</a></li>
        <li><a href="../html/signin.html">Sign In</a></li>
    `;
}
