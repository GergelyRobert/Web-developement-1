let url = "https://soloshop-44ea7-default-rtdb.europe-west1.firebasedatabase.app/";
let lista = {};
let cart = [];

async function getCart(){
    document.querySelector(".loading").style.display = "block";
    await getListaProdus();
    let localCart = localStorage.getItem("cart");
    if (localCart !== null){
        cart = JSON.parse(localCart)
    }
    if(cart.length === 0){
        document.querySelector(".loading").style.display = "none";
        
        return;
    }else{
        document.querySelector(".loading").style.display = "none";
        draw();
        getCartLenght();
        
    }
}
async function getListaProdus(){
    let response = await fetch(url + ".json");
    lista = await response.json();     
}
function draw(){
    let html = "";
    let subtotal = 0;
    
    for(let [key, produs] of Object.entries(lista)){
        for(let i = 0; i < cart.length; i++){
            if(key === cart[i].id){
                subtotal += (parseInt(cart[i].quantity) * parseInt(produs.pret))/parseInt("1");
                html += `
                <tr class="cart-item">
                    <td><img src="${produs.poze}" class="productImg"></td>
                    <td><a href="detalii.html?id=${cart[i].id}" class="idLink">${produs.nume}</a></td>
                    <td>$ <span class="price">${produs.pret}</span></td>
                    <td>
                        <div class="quantity">
                            <button class="decrement stock" onclick="decrement('${cart[i].id}'); event.preventDefault()">-</button>
                            <p class="stock"><span class="pieces">${cart[i].quantity}</span> </p>
                            <button class="increment stock" onclick="increment('${cart[i].id}'); event.preventDefault()">+</button>
                        </div>
                        //<div id="snackbar">More quantity is not in stock.</div>
                    </td>
                    <td>$ <span class="total">${((parseInt(cart[i].quantity) * parseInt(produs.pret))/parseInt("1")).toFixed(2)}</span></td>
                    <td><a href="#" class="removeBtn" onclick="removeItem('${i}','${produs.nume}')">Remove</a></td>
                </tr>
                `
            }
        }
   }
   document.querySelector(".products tbody").innerHTML = html;
   document.querySelector(".subtotal .total").innerText = subtotal.toFixed(2);
   
}

async function removeItem(idx, name){
    document.querySelector(".loading").style.display = "block";
    if(confirm(`Are you sure you want to remove ${name}?`)){
        cart.splice(idx, 1);
        draw()
        localStorage.setItem("cart", JSON.stringify(cart));
        getCartLenght();
    }
    if(cart.length === 0){
        document.querySelector(".loading").style.display = "none";
        
    }
    
   
}

function decrement(id){
    for(let i = 0; i < cart.length; i++){
        if(cart[i].id === id){
            if(cart[i].quantity === 1){
                return;
            }
            cart[i].quantity = parseInt(cart[i].quantity) - 1;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    draw();
}

function increment(id){
    let stock = "";

    for(let [key, product] of Object.entries(lista)){
        if(key === id){
            stock = lista.stoc;
            break;
        }
    }

    for(let i = 0; i < cart.length; i++){
        if(cart[i].id === id){
            if(parseInt(cart[i].quantity) === parseInt(stock)){
                let x = document.getElementById("snackbar");
                x.className = "show";
                setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
                return;
            }
            cart[i].quantity = parseInt(cart[i].quantity) + 1;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    draw()
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
