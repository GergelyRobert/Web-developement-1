let url = "https://soloshop-44ea7-default-rtdb.europe-west1.firebasedatabase.app/";
let productList = {};
async function getProducts(){
    document.querySelector(".loading").style.display = "block"
    productList =  await ajax(url);
    document.querySelector(".loading").style.display = "none"
    draw();
}


async function ajax(url, method, body){
    let response = await fetch(url+".json",{
        method: method, 
        body: JSON.stringify(body),
        headers: {
            'Content-Type': '/json'
            }
    });
    return await response.json();
}


function draw(){
    let html = "";
    for(let [ id,produs] of Object.entries(productList)){
        html +=`
            <tr>
                <td><img class="productImage" src="${produs.poze}"/></td>
                <td><a href="#" class="nameLink" onclick="edit1('${id}')">${produs.nume}</a></td>
                <td>$<span>${produs.pret}</span></td>
                <td>${produs.stoc}<span> Product</span></td>
                <td><a href="#" class="removebtn" onclick="removeProduct('${id}')">Remove</a></td>
            </tr>
        `
    }document.querySelector("#Products tbody").innerHTML = html;
}
function showAddBox(){
    document.querySelector(".AddBox").style.display="block"
    document.querySelector(".products_container").style.display = "none"
    
}
function hideAddBox(){
    document.querySelector(".AddBox").style.display="none"
    document.querySelector(".products_container").style.display = "block"
}
 async function addProduct(event){
    event.preventDefault();
    let image = document.querySelector("#img").value;
    let productName = document.querySelector("#productName").value;
    let productDescription = document.querySelector("#productDescription").value;
    let productPrice = document.querySelector("#productPrice").value;
    let productStock = document.querySelector("#productStock").value;
    if (editIndex === -1){
        await ajax(url,"POST",
    {
        "nume" : productName,
        "poze" : image,
        "descriere": productDescription,
        "pret":productPrice,
        "stoc":productStock
    })
    await getProducts();
}else{
    await edit2();
}
    document.querySelector(".AddBox").reset();
    hideAddBox();
    getProducts();
}
async function removeProduct(idx){
    if(confirm(`Are you sure you want to remove ${productList[idx].nume}?`)){ 
        await ajax(url+idx, "DELETE")
        await getProducts();
    }
    
}
let editIndex = -1;

function edit1(idx){
    showAddBox();
    let product = productList[idx];
    document.querySelector("#img").value = product.poze;
    document.querySelector("#productName").value = product.nume
    document.querySelector("#productDescription").value = product.descriere
    document.querySelector("#productPrice").value = product.pret;
    document.querySelector("#productStock").value = product.stoc;
    editIndex = idx;

}
async function edit2(){
    await ajax(url+editIndex, "PUT", 
        {
            "poze" : document.querySelector("#img").value ,
            "nume":  document.querySelector("#productName").value,
            "descriere" : document.querySelector("#productDescription").value,
            "pret" : document.querySelector("#productPrice").value ,
            "stoc" : document.querySelector("#productStock").value 
        })
    await getProducts();
    editIndex = -1;
    }