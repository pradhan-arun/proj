function addUploadFile(recent_photo,hsc_certificate,ssc_certificate,totall){
    for(var i=0;i<localStorage.length;i++){
        var name = localStorage['key'](i);
        if(localStorage['key'](i) == localStorage.getItem('name')){
            let data = JSON.parse(localStorage.getItem(name));
            data['recent_photo']=recent_photo;
            data['hsc_certificate_photo']=hsc_certificate;
            data['ssc_certificate_photo']=ssc_certificate;
            data['totall_certificate_photo']=totall;
            console.log("data inserted successfully");
            localStorage.setItem(data.name, JSON.stringify(data));
        }
        else{
            console.log("not matched");
        }
    }
}



function upload_validation(){
    var recent_photo = document.getElementById('recent_photo');
    var hsc_certificate = document.getElementById('hsc_certificate');
    var ssc_certificate = document.getElementById('ssc_certificate');
    var totall = document.getElementById('totall');

    if(recent_photo.files[0].size < 4000000 && recent_photo.files[0].type == "image/jpeg"){
        console.log(recent_photo.files[0].type);
        document.getElementById('fileError_photo').classList.remove("color-red");
        document.getElementById('fileError_photo').classList.add("color-green");
        document.getElementById('fileError_photo').innerHTML="Success";
    }
    else{
            console.log("overload sized- in photo");
            document.getElementById('fileError_photo').classList.add("color-red");
            document.getElementById('fileError_photo').innerHTML="failed to upload photo";
            return false;
    }
    if(hsc_certificate.files[0].size < 4000000 && ( hsc_certificate.files[0].type=="image/jpeg" || hsc_certificate.files[0].type=="application/pdf" || hsc_certificate.files[0].type=="application/vnd.openxmlformats-officedocument.wordprocessingml.document")){
        console.log(hsc_certificate.files[0].name);
        document.getElementById('fileError_hsc').classList.remove("color-red");
        document.getElementById('fileError_hsc').classList.add("color-green");
        document.getElementById('fileError_hsc').innerHTML="Success";
    }
    else{
            console.log("overload sized");
            document.getElementById('fileError_hsc').classList.add("color-red");
            document.getElementById('fileError_hsc').innerHTML = "failed to load hsc certificate";
            return false;
    }
    if(ssc_certificate.files[0].size < 4000000 &&  ( ssc_certificate.files[0].type=="image/jpeg" || ssc_certificate.files[0].type=="application/pdf" || ssc_certificate.files[0].type=="application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
        console.log(ssc_certificate.files[0].type);
        document.getElementById('fileError_ssc').classList.remove("color-red");
        document.getElementById('fileError_ssc').classList.add("color-green");
        document.getElementById('fileError_ssc').innerHTML = "Success";
    }
    else{
        document.getElementById('fileError_ssc').classList.add("color-red");
        document.getElementById('fileError_ssc').innerHTML = "Failed to load ssc certificate";
        return false;
    }
    if(totall.files[0].size < 10000000 && (totall.files[0].type == "application/pdf" || totall.files[0].type =="application/vnd.openxmlformats-officedocument.wordprocessingml.document" )) {
        console.log(totall.files[0].type);
        document.getElementById('fileError_total').classList.remove("color-red");
        document.getElementById('fileError_total').classList.add("color-green");
        document.getElementById('fileError_total').innerHTML = "Success";
        
    }
    else{
        document.getElementById('fileError_total').classList.add("color-red");
        document.getElementById('fileError_total').innerHTML = "Failed to load totall certificate";
        return false;
    }
    recent_photo=recent_photo.files[0].name;
    hsc_certificate = hsc_certificate.files[0].name;
    ssc_certificate=ssc_certificate.files[0].name;
    totall = totall.files[0].name;
    addUploadFile(recent_photo,hsc_certificate,ssc_certificate,totall);
   // window.location.replace("result.html");
    return true;

}

