let url = "https://soloshop-44ea7-default-rtdb.europe-west1.firebasedatabase.app/";
let  lista = {};
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var id = urlParams.get("id");

async function getProducts(){
    document.querySelector(".loading").style.display = "block";
    const response = await fetch(url+id+"/.json",
    {
        mode:"cors"
    
    });
    lista = await response.json();
    document.querySelector(".loading").style.display = "none";
    draw();
}
function draw (){
    document.querySelector(".product_image").src = lista.poze[0];
    document.querySelector(".product_info h2 ").innerText = lista.nume;
    document.querySelector(".description").innerText = lista.descriere;
    document.querySelector(".price").innerText=lista.pret;
    document.querySelector(".productName").innerText= lista.nume;
    
}
function increment(){
    let piece = parseInt(document.querySelector(".pieces").innerText);
    let price = parseInt(document.querySelector(".price").innerText);
     
    if ( piece === parseInt(lista.stoc)){
        document.querySelector(".warning").style.display = "block";
        return;
    }else{
        price += parseInt(lista.pret);
        document.querySelector(".price").innerText = price;
        document.querySelector(".pieces").innerText = piece + 1;
    }

}
function decrement(){
    document.querySelector(".warning").style.display = "none";
    let piece = parseInt(document.querySelector(".pieces").innerText);
    let price = parseInt(document.querySelector(".price").innerText);

    if( piece === 1){
        return;
    }else{
        price = price - parseInt(lista.pret);
        document.querySelector(".price").innerText = price;
        document.querySelector(".pieces").innerText = piece - 1;
    }
}
function addToCart(){
    let quantity = parseInt(document.querySelector(".pieces").innerText);
    let oldQuantity = ""
    let localCart = localStorage.getItem("cart");
    let cart = []
    let found = false;
    if (localCart !== null){
        cart = JSON.parse(localCart)
    }
    for(let item in cart){
        if(id === cart[item].id){
            found = true;
            oldQuantity = parseInt(cart[item].quantity)
            if((oldQuantity + quantity) < parseInt(lista.stoc)){
                cart[item].quantity += quantity;
                document.querySelector(".alertBox").style.display = "flex"
                setTimeout(function () {
                    document.querySelector(".alertBox").style.display = "none"
                }, 2000)
                
            }else{
                cart[item].quantity = lista.stoc;
                document.querySelector(".stockAvailable").innerText = lista.stoc;
                document.querySelector(".warning2").style.display = "block";
            }
            break;
        }
    }
    if(found === false){
        if(quantity > parseInt(lista.stoc)){
            quantity = lista.stoc;
            document.querySelector(".stockAvailable").innerText = lista.stoc;
            document.querySelector(".warning2").style.display = "block";
        }
        cart.push({id: id, quantity: quantity })
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    getCartLenght()
}
function getCartLenght(){
    let localCart = localStorage.getItem("cart");
    let cart = []
    if (localCart !== null){
        cart = JSON.parse(localCart)
    }
        if(cart !== null){
            let objectLenght = cart.length;
            document.querySelector(".cartLenght").innerText = "(" + objectLenght +  ")";
        } 
}