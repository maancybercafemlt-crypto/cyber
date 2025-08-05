function showLogin() {
  document.getElementById("loginModal").style.display = "flex";
}
function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  if ((email === "admin" || email === "admin@example.com") && pass === "Cyberadmin123") {
    localStorage.setItem("loggedIn", "true");
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("logoutBtn").style.display = "inline-block";
    document.getElementById("rateActions").style.display = "block";
    alert("Login successful!");
  } else {
    alert("Invalid credentials.");
  }
}
function logout() {
  localStorage.removeItem("loggedIn");
  location.reload();
}
function checkLoginStatus() {
  if (localStorage.getItem("loggedIn") === "true") {
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("logoutBtn").style.display = "inline-block";
    document.getElementById("rateActions").style.display = "block";
  }
}
function sendMessage() {
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (text) {
    alert("Message sent: " + text);
    input.value = "";
  }
}
function saveRates() {
  const rows = document.querySelectorAll("#rateTable tbody tr");
  let saved = [];
  rows.forEach(row => {
    const service = row.cells[0].children[0].value;
    const price = row.cells[1].children[0].value;
    saved.push({ service, price });
  });
  localStorage.setItem("rateList", JSON.stringify(saved));
  alert("Rate list saved!");
}
function resetRates() {
  localStorage.removeItem("rateList");
  location.reload();
}
function loadRates() {
  const data = localStorage.getItem("rateList");
  if (data) {
    const saved = JSON.parse(data);
    const rows = document.querySelectorAll("#rateTable tbody tr");
    saved.forEach((item, i) => {
      if (rows[i]) {
        rows[i].cells[0].children[0].value = item.service;
        rows[i].cells[1].children[0].value = item.price;
      }
    });
  }
}
window.onload = () => {
  checkLoginStatus();
  loadRates();
};