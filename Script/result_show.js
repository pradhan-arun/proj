//localStorage.setItem('name','ARUN PRADHAN');
if(localStorage.getItem('name') == null){
    let temp=`<thead><th colspan="2" class="no_value">No Value found</th></thead>`;
    document.getElementById('tab').innerHTML=temp;
}
let Fname = localStorage.getItem('name');
let data =JSON.parse(localStorage.getItem(Fname));
console.log(data);
let template = `
<thead><th colspan="2">Results</th></thead>
<tr><td>name</td><td class="res">${data['name']}</td></tr>
<tr><td>Father Name</td><td class="res">${data['father_name']}</td></tr>
<tr><td>Mother Name</td><td class="res">${data['mother_name']}</td></tr>
<tr><td>Email</td><td class="res">${data['email']}</td></tr>
<tr><td>Telephone Number</td><td class="res">${data['tel_mobile']}</td></tr>
<tr><td>Nationality</td><td class="res">${data['nationality']}</td></tr>
<tr><td>HSC Instutute</td><td class="res">${data['hsc_institute']}</td></tr>
<tr><td>SSC Institute</td><td class="res">${data['ssc_institute']}</td></tr>
<tr><td>Age</td><td class="res">${data['age']}</td></tr>
<tr><td>Date of Birth</td><td class="res">${data['date']}</td></tr>
`
document.getElementById('tab').innerHTML=template;

function resetValue(){
    localStorage.removeItem('register');
    localStorage.removeItem('certificate');
    localStorage.removeItem('name');
    return true;
}