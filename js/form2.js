const nameCheck = /^[A-Za-z ]{1,}\w$/;
const numberCheck = /^[0-9.]{2,5}%$/;
function nameChecking(name){
    return nameCheck.test(name);
}

function addItem(hsc_institute,hsc_board,hsc_score,ssc_institute,ssc_board,ssc_score,current_institute,current_pursuing){
    for(var i=0;i<localStorage.length;i++){
        var name = localStorage['key'](i);
        if(localStorage['key'](i) == localStorage.getItem('name')){
            let data = JSON.parse(localStorage.getItem(name));
            data['hsc_institute']=hsc_institute;
            data['hsc_score']=hsc_score;
            data['hsc_board']=hsc_board;
            data['ssc_institute']=ssc_institute;
            data['ssc_board']=ssc_board;
            data['ssc_score']=ssc_score;
            data['current_institute']=current_institute;
            data['current_pursuing']=current_pursuing;
            localStorage.setItem('certificate',true);
            console.log("data inserted successfully");
            localStorage.setItem(data.name, JSON.stringify(data));
        }
        else{
            console.log("not matched");
        }
    }
}

function numberChecking(number){
    return numberCheck.test(number);
}

function validate(){
    var hsc_institute = document.getElementById('hsc_institute').value;
    var hsc_board = document.getElementById('hsc_board').value;
    var hsc_score = document.getElementById('hsc_score').value;
    var ssc_institute = document.getElementById('ssc_institute').value;
    var ssc_board = document.getElementById('ssc_board').value;
    var ssc_score = document.getElementById('ssc_score').value;
    var current_pursuing = document.getElementById('current_pursuing').value;
    var current_institute = document.getElementById('current_institute').value;
    var overall_percentage = document.getElementById('overall_percentage').value;
    var backlog = document.getElementById('backlog').value;
    if(nameChecking(hsc_institute)){
        document.getElementById('hsc_institute_error').innerHTML="";
    }
    else{
        alert("Invalid name od Hsc institute"); 
        document.getElementById('hsc_institute_error').innerHTML="INVALID NAME";
        return false;
     }
    if(nameChecking(hsc_board)){ document.getElementById('hsc_board_error').innerHTML=""; } else { 
        alert("Invalid name of hsc board");
        document.getElementById('hsc_board_error').innerHTML="INVALID NAME";
        return false;
    }
    
    if(numberChecking(hsc_score)){ document.getElementById('hsc_score_error').innerHTML=""; } else { 
        alert("Invalid name of hsc score");
        document.getElementById('hsc_score_error').innerHTML="INVALID NAME";
        return false;
    }
    if(nameChecking(ssc_institute)){ document.getElementById('ssc_institute_error').innerHTML=""; } else { 
        alert("Invalid name of ssc institute");
        document.getElementById('ssc_institute_error').innerHTML="INVALID NAME";
        return false;
    }
    if(nameChecking(ssc_board)){ document.getElementById('ssc_board_error').innerHTML=""; } else { 
        alert("Invalid name of ssc board");
        document.getElementById('ssc_board_error').innerHTML="INVALID NAME";
        return false;
    }
    if(numberChecking(ssc_score)){ document.getElementById('ssc_score_error').innerHTML=""; } else { 
        alert("Invalid name of ssc score");
        document.getElementById('ssc_score_error').innerHTML="INVALID NAME";
        return false;
    }
    if(nameChecking(current_institute)){ document.getElementById('current_institute_error').innerHTML=""; } else { 
        alert("Invalid name of current institute");
        document.getElementById('current_institute_error').innerHTML="INVALID NAME";
        return false;
    }
    if(nameChecking(current_pursuing)){ document.getElementById('current_pursuing_error').innerHTML=""; } else { 
        alert("Invalid name of current pursuing");
        document.getElementById('current_pursuing_error').innerHTML="INVALID NAME";
        return false;
    }
    if(numberChecking(overall_percentage)){ document.getElementById('overall_percentage_error').innerHTML=""; } else { 
        alert("Invalid name of current pursuing");
        document.getElementById('overall_percentage_error').innerHTML="INVALID NAME";
        return false;
    }
    addItem(hsc_institute,hsc_board,hsc_score,ssc_institute,ssc_board,ssc_score,current_institute,current_pursuing);
    return true;
}
var btn = document.querySelector('#back');
btn.addEventListener("click",function(){
    console.log("hello from back");
    if(localStorage.getItem('register')){
        alert("Your registration page is completed : --  you cant go back");
        return false;   
    }
    else{
        window.location.replace("/registration.html");
        console.log("Register is incomplete");
        
    }
    return true;
});

