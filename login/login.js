const scriptURL = 'https://script.google.com/macros/s/AKfycby6zVvZLx3BkXNyHErQmF-5d_LYDW3WZNdKy1X_AGevJZ_EJ982Q8gPzcsueUMRRQHu/exec'
const form = document.forms['subit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
    setTimeout(function(){
      msg.innerHTML = ""
    },3000)
    form.reset()
    })
    
    .catch(error => console.error('Error!', error.message))
})

let username;
let password;
let result;
document.getElementById("logIn").onclick = function() {
    password = document.getElementById("password").value;
    if (password === "1234") {
        result="Login successful! Welcome,";
        document.getElementById("result").innerHTML = result;
    }
    else if (password == "") {
        result="Login failed, Password cannot be empty ";
        document.getElementById("result").innerHTML = result;

    } else {
        result="Login failed, Invalid password ";
        document.getElementById("result").innerHTML = result;
    }

}