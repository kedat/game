document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (loggedInUser) {
    const logoutItem = document.createElement("li");
    const logoutButton = document.createElement("button");
    logoutButton.textContent = "Đăng xuất";
    logoutButton.style.cursor = "pointer";
    logoutButton.style.padding = "10px 15px";
    logoutButton.style.border = "none";
    logoutButton.style.borderRadius = "5px";
    logoutButton.style.fontSize = "16px";
    logoutButton.style.fontWeight = "bold";
    logoutButton.style.background = "red";
    logoutButton.style.color = "white";
    logoutButton.style.transition = "background 0.3s";

    logoutButton.addEventListener("click", function () {
      localStorage.removeItem("loggedInUser"); // Xóa thông tin đăng nhập
      alert("Bạn đã đăng xuất thành công!");
      window.location.href = "account.html"; // Chuyển về trang đăng nhập
    });

    logoutButton.addEventListener("mouseover", function () {
      logoutButton.style.opacity = "0.8";
    });
    logoutButton.addEventListener("mouseout", function () {
      logoutButton.style.opacity = "1";
    });

    logoutItem.appendChild(logoutButton);
    navbar.querySelector("ul").appendChild(logoutItem);
  }
});
