// Lắng nghe sự kiện scroll để thay đổi màu navbar khi cuộn trang
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const howToSection = document.getElementById('how-to-use').offsetTop;

    // Nếu cuộn trang xuống đến phần how-to-use, đổi màu navbar
    if (window.scrollY >= howToSection - 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Kiểm tra nếu người dùng đã đăng nhập
const username = localStorage.getItem('username');
if (username) {
    const navbar = document.getElementById('navbar');
    const newUser = document.createElement('li');
    newUser.innerHTML = `<span>Welcome, ${username}</span>`;
    navbar.appendChild(newUser);

    // Ẩn liên kết Log In và Sign Up sau khi đăng nhập
    document.querySelector('a[href="login.html"]').style.display = 'none';
    document.querySelector('a[href="signup.html"]').style.display = 'none';
}
