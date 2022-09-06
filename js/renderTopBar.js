export function renderTopBar() {
  let username = localStorage.getItem("currentusername");
  if (!username) {
    document.querySelector(".header").innerHTML =
      '<div class="site-name-logo"> <i class="fas fa-cannabis logo"></i><a href="index.html">OpenBooks.cafe</a></div><div class="user-greet"></div><div><a href="./login.html" class="logout">Login</a></div>';
  } else {
    let output = `
      Hello, ${username}!
      `;
    document.querySelector(
      ".header"
    ).innerHTML = `<div class="site-name-logo"> <i class="fas fa-cannabis logo"></i><a href="index.html">OpenBooks.cafe</a></div></div><div class="user-greet">Hello, ${username}</div><div><a href="./login.html" class="logout">Log Out</a></div>`;
  }
}
