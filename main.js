const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartAside = document.querySelector('#shoppingCartContainer');
const shoppingIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenuIcon = document.querySelector('.menu');
const productCardContainer = document.querySelector('.card-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
shoppingIcon.addEventListener('click', toggleShoppingIcon);



function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartAside.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppingCartAside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartAside.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppingCartAside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingIcon() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenoClosed = desktopMenu.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenoClosed) {
        desktopMenu.classList.add('inactive');
    }

    shoppingCartAside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 100,
    image: 'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Monitor',
    price: 150,
    image: 'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Colchón',
    price: 200,
    image: 'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});


/*
  <div class="card-container">
            <div class="product-card">
                <img src="https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="">
                <div class="product-info">
                    <div>
                        <p>120.000</p>
                        <p>bike</p>
                    </div>
                    <figure>
                        <img src="icons/bt_add_to_cart.svg">
                    </figure>
                </div>
            </div>
        </div>

*/

function renderProducts(arr) {
    for (product of arr) {
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg= document.createElement('img');
        productImg.setAttribute('src',product.image);
    
        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv= document.createElement('div');
       
    
        const productPrice= document.createElement('p');
        productPrice.innerText= '$'+ product.price;
        const productName= document.createElement('p');
        productName.innerText= product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        productCardContainer.appendChild(productCard);
    }
}

renderProducts(productList);
