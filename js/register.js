const form = document.querySelector('.register-form');
form.addEventListener('submit', processInput);

function processInput(e){
    e.preventDefault();

    let username = form.querySelector('.username').value;
    let password = form.querySelector('.password').value;
    let usertype = form.querySelector('.usertype').value;

    let user = new newUser(username, password, usertype);
    addUser(user);
}

function addUser(user){
    let data = localStorage.getItem('users');
    let users = JSON.parse(data);

    if(!users){
        users = [];
    }

    user.id = users.length;
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    let alert = document.querySelector('.alert');
    let output = `
        <div class="chip">
            <i class="fas fa-check"></i> Thank you for registering! Redirecting... 
        </div>
    `
    alert.innerHTML = output;

    setTimeout(() => {
        window.location.replace('../login.html');
    }, 1500);
}

function newUser(username, password, usertype){
    this.username = username;
    this.password = password;
    this.usertype = usertype;
}