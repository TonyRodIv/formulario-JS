
document.getElementById('form').addEventListener('submit',
    function validate(event){
        event.preventDefault();
    
        let regexP = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;
        let regexE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        let email = document.getElementById('email').value
        let pass = document.getElementById('password').value
        let passColor = document.getElementById('password')
        let emailColor = document.getElementById('email')
        if(regexP.test(pass) && regexE.test(email)){
            console.log('💥AMBOS ATENDEM OS REQUISITOS💥')
            alert('Seu login foi concluído com sucesso!! 😉👌🏽')
    
        }
    
        if(regexP.test(pass)){
            console.log('✅PASSWORD✅')
            passColor.style.border = "green solid 3px"
        }else{
            console.log('⚠️PASSWORD⚠️')
            passColor.style.border = "red solid 3px"
        }
    
        if(regexE.test(email)){
            console.log('✅EMAIL✅')
            emailColor.style.border = "green solid 3px"
        }else{
            console.log('⚠️EMAIL⚠️')
            emailColor.style.border = "red solid 3px"
        }
    }
    )