let userName = document.getElementById('username');
let password = document.getElementById('password');
let login = document.getElementById('login');
let wrong = document.querySelector('.wrong');


let getUser = localStorage.getItem('name');
let getPassword = localStorage.getItem('password');

login.addEventListener("click", function (e) {
    e.preventDefault()
    if (userName.value !== '' && password.value !== '') {
        if ((getUser && getUser === userName.value.trim()) && (getPassword && getPassword === password.value)) {
            setTimeout(() => {
                window.location = "index.html";
            }, 1000);
        }else {
            if (wrong.children.length === 0) {
                let messageDive = document.createElement('div');
                messageDive.className = "message";
                messageDive.appendChild(document.createTextNode('Username Or Password Is Wrong'));
                wrong.appendChild(messageDive)
            }
        }
    }else {
        userName.focus()
    }
})

