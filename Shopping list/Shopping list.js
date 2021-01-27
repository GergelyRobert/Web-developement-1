let listaCuAlimente = [{
    lista : "",
}];
function draw(){
    let str= "";
    for(i = 1 ; i < listaCuAlimente.length; i++){
        str += `
         <tr>
             <td id="alimentul">${listaCuAlimente[i].lista}</td>
             <td><input type="button" name="Mark" value="Mark as buyed" style="border-radius: 3px; background-color: #34fdcb;" "onclick= marked(${i})"></td>
         </tr>
        
        `
    }
    document.querySelector("#items").innerHTML=str;

}

function add(elem, event){
    let aliment = document.querySelector("[name ='lista']").value;
    
    listaCuAlimente.push({
        "lista": aliment,
    });

    draw();
    document.querySelector("[name ='lista']").value = "";
     

}
function searchKeyPress(e)
{
   /* e = e || window.event;*/
    if (e.keyCode == 13)
    {
        document.getElementById('myBtn').click();
        return false;
    }
    return true;
}

function sort(direction){
    if(direction === 'az'){
        listaCuAlimente.sort(function(a,b){
            var nameA = a.lista.toUpperCase();
            var nameB = b.lista.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });
        
}else{
    listaCuAlimente.sort(function(a,b){
        var nameA = a.lista.toUpperCase();
        var nameB = b.lista.toUpperCase();
        if (nameA < nameB) {
            return 1;
        }
        if (nameA > nameB) {
            return -1;
        }
        return 0;

    });
}
    draw();
}
function marked(idx){
    let ele = document.querySelector(listaCuAlimente[i].lista);
    ele.style.setProperty("text-decoration", "line-through");
    draw();
}
