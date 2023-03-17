let regex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;
function validate(){
    let pass = document.getElementById('password').value
    let passColor = document.getElementById('password')
    if(regex.test(pass)){
        alert('boa!')
    }else{
        alert('erro!')
        passColor.style.border = "red solid 3px"
    }
}