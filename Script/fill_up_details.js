function check(){
    var username = document.getElementById("username").value;
    var phone= document.getElementById("phone_number").value;

    for(var i=0;i<localStorage.length;i++){
        var name=localStorage['key'](i);
        alert(name);
        if(name == username){
            let data = JSON.parse(localStorage.getItem(name));
            alert(data.tel_mobile);
            if( data.tel_mobile == phone){
                alert(phone);
                localStorage.setItem('name', username);
                return true;
            }
            document.getElementById('error_show').innerHTML="Invalid username / phone number";
            return false;
        }
    }
    return false;
}