let info = document.getElementById('info');
let userName = document.getElementById('user-name');
let user = document.getElementById('user');
let logout = document.getElementById('logout');
let title = document.getElementById('title');

let accName = localStorage.getItem("name");

if (accName) {
    info.remove()
    userName.style.display = 'flex';
    user.innerHTML = accName;
    title.innerHTML = accName;
}

logout.addEventListener("click", function () {
    setTimeout(() => {
        window.location = "login.html";
    }, 1000);
})