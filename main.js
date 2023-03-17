let regex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;
function validate(){
    let pass = document.getElementById('password').value
    let passColor = document.getElementById('password')
    if(regex.test(pass)){
        alert('Seu login foi concluído com sucesso!! 😉👌🏽')
    }else{
        passColor.style.border = "red solid 3px"
        alert('ERRO!! - Sua senha não atente os requisitos minímos')
    }
}