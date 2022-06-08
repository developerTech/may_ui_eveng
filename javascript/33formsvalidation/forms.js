const getId = () => {
    let id = Math.floor(Math.random() * 100000);
    document.getElementById('eid').value = id
}

function validateFname(){
    let name  = document.getElementById('fname').value;
    let fdiv = document.getElementsByClassName('fdiv')[0];
    if(name.trim().length == 0){
        document.getElementById('fout').innerText = 'Please Enter First Name';
        fdiv.classList.remove('has-success')
        fdiv.classList.add('has-error')
    }else{
        document.getElementById('fout').innerText = '';
        fdiv.classList.remove('has-error')
        fdiv.classList.add('has-success')
    }
}

const validateEmail = () => {
    let email  = document.getElementById('mail').value;
    if(email.trim().length == 0 ){
        document.getElementById('eout').innerText = 'Please Enter Email';
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") == null){
            document.getElementById('eout').innerText = 'Please Enter Valid Email';
        }else{
            document.getElementById('eout').innerText = ''
        }
    }
}

function validatePassword(){
    let pwd  = document.getElementById('pwd').value;
    if(pwd.trim().length<15){
        if(pwd.trim().length<8){
            document.getElementById('pout').innerText = 'Please Enter Password';
            document.getElementById('ppot').style.display = "block";
            document.getElementById('ppot').style.backgroundColor = "red";
        }else if(pwd.trim().length> 8 && pwd.trim().length<11){
            document.getElementById('pout').innerText = '';
            document.getElementById('ppot').style.backgroundColor = "orange";
        }
    }else{
        document.getElementById('ppot').style.backgroundColor = "green";
    }
}

const showPassword = () => {
    let pwd  = document.getElementById('pwd');
    if(pwd.type == 'password'){
        pwd.type = 'text'
    }else{
        pwd.type = 'password'
    }
}

function validateCPassword(){
    let pwd  = document.getElementById('pwd').value;
    let cpwd = document.getElementById('cpwd').value;
    if(pwd !== cpwd){
        document.getElementById('cpout').innerText = 'Password Does not match';
    }else{
        document.getElementById('cpout').innerText = ''
    }
}

const getCity = () => {
    let city = document.getElementById('city').value;
    document.getElementById('cout').innerText = `You have Selected ${city}`
}