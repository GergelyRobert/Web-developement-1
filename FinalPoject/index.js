let url = "https://soloshop-44ea7-default-rtdb.europe-west1.firebasedatabase.app/";
let  lista = {};
async function getProducts(){
  document.querySelector(".loading").style.display = "block";
  let response = await fetch(url+ ".json");
  lista = await response.json();
  document.querySelector(".loading").style.display = "none"
  draw();
}

function draw(){
  let cuvantCautat = document.querySelector('[name="search"]').value;
  let str = "";
    for(let [id, produs] of Object.entries(lista)){
     str += `
      
        <div class="col">
          <a href="details.html?id=${id}"><img class="productImg" src="${produs.poze}"></a>
          <p class="productName">${produs.nume}</p>
          <p>From $<span>${produs.pret}</span></p>
          <button  onclick="window.location.href='details.html?id=${id}'" class="details">Details</button>
          <a href="#" onclick="addToCart('${id}'); event.preventDefault();"><button class="addCart">Add to cart</button></a>
        </div>
       
        `
        document.querySelector(".product_grid").innerHTML = str ;
    }
    
}
/*functia cauta, nu filtreaza produsul care il scriu in input */
function searchProduct(){
  let cuvantCautat = document.querySelector('[name="search"]').value;
  let menuItems = document.querySelectorAll(".productName");
  
  for(let i=0;i<menuItems.length;i++){
    let menuItem = menuItems[i];
    let text = document.querySelector(".col div:nth-child(2)").innerText;
    if(!text.inculdes(cuvantCautat)){
      document.querySelector(".col").style.display = "block";
    }else{
      document.querySelector(".col").style.display = "none";
    }
   
  }
}/*functia add to cart*/
function addToCart(id){
  let localCart = localStorage.getItem("cart");
  let cart = []
  let found = false;
  if (localCart !== null){
      cart = JSON.parse(localCart)
  }
  for(let item in cart){
      if(id === cart[item].id){
          alert("This product has already been added. Check your cart.");
          found = true;
          break;
      }
  }
  if(found === false){
      cart.push({id: id, quantity: 1 })
      document.querySelector(".alertBox").style.display = "flex"
                setTimeout(function () {
                    document.querySelector(".alertBox").style.display = "none"
                }, 2000)
                
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
