export function checkLoggedIn(){
    if(!localStorage.getItem('currentusertype')){
        let body = document.querySelector('.container');
        let output = `
            <div class="chip">
                <i class="fas fa-exclamation-circle"></i> Please Log In! Redirecting... 
            </div>
        `
        body.innerHTML = output;

        setTimeout(() => {
            window.location.replace('../login.html');
        }, 1500);
    }
}