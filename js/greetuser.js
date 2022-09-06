export function greetUser(){
    let username = localStorage.getItem('currentusername');
    let output = `
        Hello, ${username}!
    `

    document.querySelector('.user-greet').innerHTML = output;
}