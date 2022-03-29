const BTN_LOGIN = document.querySelector("#login-btn");
const LOGIN = "admin";
const PASSWORD = "admin"


BTN_LOGIN.addEventListener("click",(evt)=>{
    evt.preventDefault();
    
    const LOGIN_INPUT = document.querySelector("#login");
    const PASSWORD_INPUT = document.querySelector("#password");

    if(LOGIN_INPUT.value == LOGIN && PASSWORD_INPUT.value == PASSWORD){
        window.sessionStorage.setItem("logged", true);
        window.location = "index.html";

    } else{
        window.sessionStorage.setItem("logged", false);
        alert("Usuário ou Senha Inválidos");
    }
}) 
