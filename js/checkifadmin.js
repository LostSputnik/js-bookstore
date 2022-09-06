export function checkifadmin() {
  if (localStorage.getItem("currentusertype") === "user") {
    let body = document.querySelector(".container");
    let output = `
            <div class="chip">
                <i class="fas fa-exclamation-circle"></i> Access Prohibited! Redirecting... 
            </div>
        `;
    body.innerHTML = output;

    setTimeout(() => {
      window.location.replace("../index.html");
    }, 1500);
  }
}
