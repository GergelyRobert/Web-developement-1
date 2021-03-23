let contacte = [{
    'Nume':"",
    'telefon' :"",

}];
let indexModifica = -1;


function requireName(){
    let nameInput = document.querySelector('[name="name"]');
    let nume = nameInput.value;
    
    if ( nume.length <=3){
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");
    }else{
        nameInput.classList.remove("invalid");
        nameInput.classList.add("valid");
    }

}
function requireTel(){
    let telInput = document.querySelector('[name="tel"]');
    let telMatch = /^\(?([0-9]{4})\)?([0-9]{3})?([0-9]{3})$/;
    let tel = telInput.value;
    if(tel.match(telMatch)){
        telInput.classList.add("valid");
        telInput.classList.remove("invalid");
    } else {
        telInput.classList.remove("valid");
        telInput.classList.add("invalid");

    }
}
function clearInvalid(elem,event) {
    elem.classList.remove("valid");
    elem.classList.remove("invalid");

}
function digitLimit(elem,event) {
    if(elem.value.length>=10){
        event.preventDefault();
    }
}
function draw(){
    let str="";
    for( let i = 1;i <contacte.length; i++){
        str += `
                <tr>
                       <td>${contacte[i].nume}</td>
                       <td>${contacte[i].tel}</td>
                       <td>
                           <a  class="edit" href="#" onclick="edit(${i});">Modifică</a>
                       </td>
                       <td>
                           <a class="delete" href="#" onclick="del(${i});">Șterge</a>
                       </td>
                </tr>
                <tbody>
                `
    }
    document.querySelector(".T_contacts").innerHTML=str;
    document.querySelector("#T_contacts").style.display="block";
}
function addContact(event){
    let nume = document.querySelector("[name = 'name']").value;
    let telefon = document.querySelector("[name = 'tel']").value;
    if( nume == '' || nume <= 3){
        event.preventDefault();
        alert('please enter a  valid name');
        return false;
    }else if(telefon =="" || telefon < 10){
        event.preventDefault();
        alert('Please enter a  valid phone number');
        return false;
    }else{
    contacte.push({
        "nume" : nume,
        "tel": telefon,
    });
    }
    document.querySelector("#T_contacts").style.display="block";
    //draw();
    document.querySelector(".input_form").reset();
}
function del(idx){
    if(confirm('Esti Sigur ca vrei sa stergi contactul ?')){
    contacte.splice(idx,1,);
    draw();
    }
}    
function edit(idx){
    let contact = contacte[idx];
    document.querySelector("[name = 'name']").value = contact.nume;
    document.querySelector("[name = 'tel']").value = contact.tel;
    indexModifica = idx;
    document.querySelector("#editBtn").classList.remove("hidden");
    document.querySelector("#add_contact").classList.add("hidden");
    
}

function editeaza(){
    if (indexModifica === -1){
        return;
    }

    let contact = contacte[indexModifica];
    contact.nume = document.querySelector("[name = 'name']").value;
    contact.tel= document.querySelector("[name = 'tel']").value;
    draw();
    indexModifica = -1;
    document.querySelector("#editBtn").classList.add("hidden");
    document.querySelector("#add_contact").classList.remove("hidden");

    document.querySelector("form").reset();
}
