let userName = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let signUp = document.getElementById('sign-up');
let fill = document.querySelector('.fill');



signUp.addEventListener('click', function (e) {
    e.preventDefault()
    if (userName.value !== '' && email.value !== '' && password.value !== '') {
        userName.style.border = "none"
        localStorage.setItem('name', userName.value.trim())
        localStorage.setItem('email', email.value.trim())
        localStorage.setItem('password', password.value)
        setTimeout(() => {
            window.location = "login.html";
        },1500)
    }else {
        if (fill.children.length === 0) {
            userName.style.border = "1px solid red";
            userName.focus()
            userName.onkeyup = function () {
                userName.style.border = "none";
            }
            let messageDive = document.createElement('div');
            messageDive.className = "message";
            messageDive.appendChild(document.createTextNode('!Please Fill The Info'));
            fill.appendChild(messageDive)
        }else {
            return false;
        }
        
    }
})
