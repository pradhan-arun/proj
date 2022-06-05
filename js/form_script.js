
const namecheck =/^[A-Za-z]{2,20}\w$/;
const emailCheck = /^[a-zA-Z.]{2,10}[a-zA-Z0-9.]{1,}@[A-Za-z]{2,}.[a-zA-Z]{2,}.{1,3}\w$/;
const numberCheck = /^[6789]{1}[0-9]{9}$/;

function nameChecking(name){
    return namecheck.test(name); 
}

function emailChecking(name){
    return emailCheck.test(name);
}

function numberChecking(number){
    return numberCheck.test(number);
}

function addLocalStorageValue(name,email,date,father_name,mother_name,nationality,city,street_address,tel_mobile,country,age){
    
    let data = {
        name:name,
        email:email,
        date:date,
        father_name:father_name,
         mother_name:mother_name, 
         nationality:nationality, 
         city:city,
        street_address:street_address,
        tel_mobile:tel_mobile,
        country:country,
        age:age
    }
    
    let data1 = JSON.stringify(data);
    localStorage.setItem(name,data1);
}
function verifyAccount(name,tel_mobile){
    let duplicate = localStorage.getItem(name);
    if(duplicate == null){ 
        localStorage.setItem('register',true);
        localStorage.setItem('name',name);
        localStorage.setItem('certificate',false);
        return true; }
    else{
        let data = JSON.parse(duplicate);
        
        if(data.tel_mobile == tel_mobile){
            localStorage.setItem('register',true);
            localStorage.setItem('name',name);
            return false;
        }
        return true;
    }
}
function validation(){

    
    var lname = document.getElementById('lname').value;
    var fname = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var father_first_name = document.getElementById('father_first_name').value;
    var father_last_name = document.getElementById('father_last_name').value;
    var mother_first_name = document.getElementById('mother_first_name').value;
    var mother_last_name = document.getElementById('mother_last_name').value;
    var nationality = document.getElementById('nationality').value;
    var street_address = document.getElementById('street_address').value;
    var city = document.getElementById('city').value;
    var tel_mobile = document.getElementById('tel_mobile').value;

    var country = document.getElementById('country').value;
    var radios = document.getElementsByName('gender');
    var selected = Array.from(radios).find(radio => radio.checked);



    if(nameChecking(fname) & nameChecking(lname)){
        console.log("its ok");
        
        document.getElementById('nameError').innerHTML="";
    }
    else{
        document.getElementById('nameError').innerHTML="name is invalid";
        return false;
    }
    if(nameChecking(father_first_name) & nameChecking(father_last_name)){
        console.log("its ok");
        
        document.getElementById('father_nameError').innerHTML="";
    }
    else{
        document.getElementById('father_nameError').innerHTML="father is invalid";
        return false;
    }
    if(nameChecking(mother_first_name) & nameChecking(mother_last_name)){
        console.log("its ok");
        
        document.getElementById('mother_nameError').innerHTML="";
    }
    else{
        document.getElementById('mother_nameError').innerHTML="name is invalid";
        return false;
    }

    if(emailChecking(email)){
        console.log("from email")
        document.getElementById('emailError').innerHTML="";
    }
    else{
        document.getElementById('emailError').innerHTML="<b>Email is invalid</b>";
        return false;
    }

    if(numberChecking(tel_mobile)){
        document.getElementById('mobileError').innerHTML="";
    }
    else{
        document.getElementById('mobileError').innerHTML="<b>Mobile Number is invalid</b>";
        return false;
    }
    let name=fname+" "+lname;
    let father = father_first_name+" "+father_last_name;
    let mother_name = mother_first_name+" "+mother_last_name;

    if(verifyAccount(name,tel_mobile)){
        addLocalStorageValue(name,email,date,father,mother_name
            ,nationality,city,street_address,tel_mobile,country,selected.value);
    }
    else{ alert("Your account is already exist::");
        return false;
    }   
    return true;
}