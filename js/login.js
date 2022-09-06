let form = document.querySelector(".login-form");
form.addEventListener("submit", processInput);

function processInput(e) {
  e.preventDefault();

  let username = form.querySelector(".username").value;
  let password = form.querySelector(".password").value;

  let id = checkLogin(username, password);

  if (id == -1) {
    wrongCreds();
  } else {
    loginUser(id);
  }
}

function checkLogin(username, password) {
  let data = localStorage.getItem("users");
  let users = JSON.parse(data);
  if (!users) {
    return -1;
  }

  for (user of users) {
    if (user.username == username && user.password == password) {
      return user.id;
    }
  }
  return -1;
}

function loginUser(id) {
  let data = localStorage.getItem("users");
  let users = JSON.parse(data);

  user = users[id];

  localStorage.setItem("loggedin", true);
  localStorage.setItem("currentuserid", user.id);
  localStorage.setItem("currentusername", user.username);
  localStorage.setItem("currentusertype", user.usertype);

  let alert = document.querySelector(".alert");
  let output = `
        <div class="chip">
            <i class="fas fa-check"></i> Thank you for loggin in! Redirecting... 
        </div>
    `;
  alert.innerHTML = output;

  setTimeout(() => {
    window.location.replace("../index.html");
  }, 1500);
}

function wrongCreds() {
  let alert = document.querySelector(".alert");
  let output = `
        <div class="chip">
            <i class="fas fa-exclamation-circle"></i> Credentials don't match!
        </div>
    `;
  alert.innerHTML = output;
}
