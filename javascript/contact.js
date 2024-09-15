const userOptions = document.getElementById('user-options');
const isLoggedIn = false;

if (isLoggedIn) {
    userOptions.innerHTML = `
        <li><a href="#">Account</a></li>
        <li><a href="#">Sign Out</a></li>
    `;
} else {
    userOptions.innerHTML = `
        <li><a href="#">Sign In</a></li>
        <li><a href="#">Sign Up</a></li>
    `;
}
