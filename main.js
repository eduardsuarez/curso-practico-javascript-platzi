const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");

const productDetailCloseIcon = document.querySelector('.product-detail-close')

const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

let = `<div class="product-detail-close">
<img src="./icons/icon_close.png" alt="close" />
</div>
<img
src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
alt="bike"
/>
<div class="product-info">
<p>$35,00</p>
<p>Bike</p>
<p>
  With its functional and practical interior, this refrigerator also
  fulfills a decorative function.
</p>
<button class="primary-button add-to-cart-button">
  <img src="./icons/bt_add_to_cart.svg" alt="add to cart" />Add to cart
</button>
</div>`;



function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {

  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {

  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  //abrir el shoppingCartContainer
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
  //abrir el shoppingCartContainer
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside(){

  shoppingCartContainer.classList.add('inactive');

  productDetailContainer.classList.remove('inactive');

}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive');

}



const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Camera",
  price: 230,
  image:
    "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
});

productList.push({
  name: "NoteBook",
  price: 520,
  image:
    "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=600",
});

productList.push({
  name: "Clock",
  price: 140,
  image:
    "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600",
});

productList.push({
  name: "Shoes",
  price: 100,
  image:
    "https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600",
});

productList.push({
  name: "Keyboard",
  price: 80,
  image:
    "https://images.pexels.com/photos/4383928/pexels-photo-4383928.jpeg?auto=compress&cs=tinysrgb&w=600",
});

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
      
        const ProductImg = document.createElement("img");
        ProductImg.setAttribute("src", product.image);

        ProductImg.addEventListener('click', openProductDetailAside)
      
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
      
        const productInfoDiv = document.createElement("div");
      
        const productPrice = document.createElement("p");
        productPrice.innerHTML = "$" + product.price;
      
        const productName = document.createElement("p");
        productName.innerHTML = product.name;
      
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
      
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
      
        productInfoFigure.appendChild(productImgCart);
      
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
      
        productCard.appendChild(ProductImg);
        productCard.appendChild(productInfo);
      
        cardsContainer.appendChild(productCard);
      }
}

renderProducts(productList);