//localStorage.setItem('name','ARUN PRADHAN');
let Fname = localStorage.getItem('name');
let data =JSON.parse(localStorage.getItem(Fname));
console.log(data);
let template = `
<thead><th colspan="2">Results</th></thead>
<tr><td>name</td><td>${data['name']}</td></tr>
<tr><td>Father Name</td><td>${data['father_name']}</td></tr>
<tr><td>Mother Name</td><td>${data['mother_name']}</td></tr>
<tr><td>Email</td><td>${data['email']}</td></tr>
<tr><td>Telephone Number</td><td>${data['tel_mobile']}</td></tr>
<tr><td>Nationality</td><td>${data['nationality']}</td></tr>
<tr><td>HSC Instutute</td><td>${data['hsc_institute']}</td></tr>
<tr><td>SSC Institute</td><td>${data['ssc_institute']}</td></tr>
<tr><td>Age</td><td>${data['age']}</td></tr>
<tr><td>Date of Birth</td><td>${data['date']}</td></tr>
`
document.getElementById('tab').innerHTML=template;

function resetValue(){
    localStorage.removeItem('register');
    localStorage.removeItem('certificate');
    localStorage.removeItem('name');
    window.location.replace("/");
}