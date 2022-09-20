export function addUser(user, pageFlag) {
  let data = localStorage.getItem("users");
  let users = JSON.parse(data);

  if (!users) {
    users = [];
  }

  user.id = users.length;
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  if (pageFlag) {
    pageUpdate();
  }
}
export function newUser(username, password, usertype) {
  this.username = username;
  this.password = password;
  this.usertype = usertype;
}

export function addAdmins() {
  let data = localStorage.getItem("users");
  let users = JSON.parse(data);

  if (!users) {
    let adminUser = new newUser("admin", "0000", "admin");
    addUser(adminUser);
  }
}
