export function logOut(){
    localStorage.removeItem('loggedin');
    localStorage.removeItem('currentuserid');
    localStorage.removeItem('currentusername');
    localStorage.removeItem('currentusertype');
}