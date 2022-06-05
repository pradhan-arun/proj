function check(){
    var username = document.getElementById("username").value;
    var phone= document.getElementById("phone_number").value;

    for(var i=0;i<localStorage.length;i++){
        var name=localStorage['key'](i);
        if(name == username){
            let data = JSON.parse(localStorage.getItem(name));
            if( data.tel_mobile == phone){
                localStorage.setItem('name', username);
                return true;
            }
            document.getElementById('error_show').innerHTML="Invalid username / phone number";
            return false;
        }
    }
    return false;
}