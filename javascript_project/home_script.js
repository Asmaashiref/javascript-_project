///?///?/??????????????????? navbar ////??????????????????????????????????????????
function toggleNav() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('responsive');
}


//?///?/??????????????????? slider ////??????????????????????????????????????????
let images = [ './image/charger.jpg', "./image/dress.jpg", "./image/whiteskirt.jpg", "./image/lipstck.jpg", "./image/foundation.jpg", "./image/samsong.jpg", 
"./image/eswera.jpg", "./image/noka.jpg", "./image/eye.jpg", "./image/gray.jpg", "./image/jaket.jpg", "./image/black.jpg",
 "./image/neclous.jpg", "./image/apple.jpg", "./image/pinkbrush.jpg", "./image/bag.jpg", "./image/dress.jpg", "./image/telephone.jpg", 
 "./image/bag1.jpg", "./image/gold.jpg", "./image/watches.jpg"
];
        let currentImageIndex = 0;
        let slideshowInterval;

        function showImage(index) {
            document.getElementById("img").src = images[index];
        }

        function previousImage() {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            showImage(currentImageIndex);
        }

        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentImageIndex);
        }

        function startSlideshow() {
            slideshowInterval = setInterval(nextImage, 1000);
        }

        function stopSlideshow() {
            clearInterval(slideshowInterval);
        }

        // Show the first image initially
        showImage(currentImageIndex);
        
        // Start slideshow automatically
        startSlideshow();




























///?///?/??????????????????? productes ////??????????????????????????????????????????

// Sample data for categories and products
var categories = ['All products','Clothes', 'Mack_Up', 'Accssecories', 'Phones'];
// Sample data for categories and products

const products = [
    { category: 'All products', name: 'headphones', image: './image/charger.jpg', description: ' headphone, cost: 1500$' },
    { category: 'All products', name: 'pink_Shirt', image: './image/pink.jpg', description: 'Comfortable shirt , cost:200$' },
    { category: 'All products', name: 'foundation', image: './image/foundation.jpg', description: ' cost:800$ ' },
    { category: 'All products', name: 'dress', image: './image/dress.jpg', description: 'Elegant dress , cost:400$' }, 
    {category: 'All products', name: 'eye shadow', image: './image/eye.jpg', description: 'eye_liner , cost: 500$' },
    { category: 'All products', name: 'Sweater', image: './image/jaket.jpg', description: 'Warm sweater , cost: 500$' },
    { category: 'All products', name: 'apple phone', image: './image/apple.jpg', description: ' apple phone,cost:94000$' },
    { category: 'All products', name: 'skirt', image: './image/whiteskirt.jpg', description: 'Trendy skirt , cost:699$' },
    { category: 'All products', name: 'nokeia', image: './image/noka.jpg', description: 'nokeia , cost: 2500$' },
    { category: 'All products', name: 'pinkbruch', image: './image/pinkbrush.jpg', description: 'pink_bruch , cost:200$' },
    { category: 'All products', name: 'gloose', image: './image/gloose.jpg', description: ' cost:400$' },
    { category: 'All products', name: 'black jaket', image: './image/black.jpg', description: 'Trendy jaket , cost:340$' },
    { category: 'All products', name: 'lipstck', image: './image/lipstck.jpg', description: 'cost: 500$' },
    { category: 'All products', name: 'gray', image: './image/gray.jpg', description: 'Comfortable shirt , cost:200$ ' },

    { category: 'Clothes', name: 'pink_Shirt', image: 'image/pink.jpg', description: 'Comfortable shirt , cost:200$' },
    { category: 'Clothes', name: 'dress', image: './image/dress.jpg', description: 'Elegant dress , cost:400$' },
    { category: 'Clothes', name: 'gray', image: './image/gray.jpg', description: 'Comfortable shirt , cost:200$ ' },
    { category: 'Clothes', name: 'Sweater', image: './image/jaket.jpg', description: 'Warm sweater , cost: 500$' },
    { category: 'Clothes', name: 'black jaket', image: './image/black.jpg', description: 'Trendy jaket , cost:340$' },
    { category: 'Clothes', name: 'skirt', image: './image/whiteskirt.jpg', description: 'Trendy skirt , cost:699$' },

   
        { category: 'Mack_Up', name: 'gloose', image: './image/gloose.jpg', description: ' cost:400$' },
        { category: 'Mack_Up', name: 'pinkbruch', image: './image/pinkbrush.jpg', description: 'pink_bruch , cost:200$' },
        { category: 'Mack_Up', name: 'foundation', image: './image/foundation.jpg', description: ' cost:800$ ' },
        { category: 'Mack_Up', name: 'eye shadow', image: './image/eye.jpg', description: 'eye_liner , cost: 500$' },
        { category: 'Mack_Up', name: 'lipstck', image: './image/lipstck.jpg', description: 'cost: 500$' },

    { category: 'Accssecories', name: 'watch', image: './image/watches.jpg', description: 'touch watch, cost:200$' },
        { category: 'Accssecories', name: 'gold watch', image: './image/gold.jpg', description: ' gold watct,cost:4000$' },
        { category: 'Accssecories', name: 'neclous', image: './image/neclous.jpg', description: ' cost:800$ ' },
        { category: 'Accssecories', name: 'bracelet', image: './image/eswera.jpg', description: 'eswera , cost: 500$' },
        { category: 'Accssecories', name: 'bag', image: './image/bag.jpg', description: 'gold bag , cost: 700$' },
        { category: 'Accssecories', name: 'bag', image: './image/bag1.jpg', description: 'brown bag , cost: 500$' },
       
   { category: 'Phones', name: 'samsong phone', image: './image/samsong.jpg', description: 'samsong phone, cost:6200$' },
        { category: 'Phones', name: 'apple phone', image: './image/apple.jpg', description: ' apple phone,cost:94000$' },
        { category: 'Phones', name: 'nokeia', image: './image/noka.jpg', description: 'nokeia , cost: 2500$' },
        { category: 'Phones', name: 'headphones', image: './image/charger.jpg', description: ' headphone, cost: 1500$' },
        { category: 'Phones', name: 'telephone', image: './image/telephone.jpg', description: 'telephone, cost: 4500$' },
  // Add more products...

];

// Function to initialize categories
function initCategories() {
  const categoriesDiv = document.getElementById('categories');
  categories.forEach(category => {
    const button = document.createElement('button');
    button.textContent = category;
    button.addEventListener('click', () => filterProducts(category));
    categoriesDiv.appendChild(button);
  });

  // Automatically display "All products" when the page loads
  filterProducts('All products');
}
  
  function filterProducts(category) {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
  
    const filteredProducts = products.filter(product => product.category === category);
    filteredProducts.forEach(product => {
      const card = createProductCard(product);
      productsDiv.appendChild(card);
    });
  }
  
  function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
     card.innerHTML = `
    <img class="imaage" src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <button onclick="addToCart('${product.name}')">Add to Cart</button>
    `;
    return card;
  }
  
  function viewCart() {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    window.location.href = `cart.html?cart=${encodeURIComponent(JSON.stringify(cartData))}`;
}
  
function addToCart(productName) {
  const cartCount = document.getElementById('cart-count');
  let count = parseInt(cartCount.textContent);
  count++;
  cartCount.textContent = count;

  const cartData = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProductIndex = cartData.findIndex(product => product.name === productName);

  if (existingProductIndex !== -1) {
    cartData[existingProductIndex].quantity++;
  } else {
    cartData.push({ name: productName, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cartData));
}
  
  initCategories();





///?///?/??????????????????? footer ////??????????????????????????????????????????
const socialMediaLinks = [
  { name: "Facebook", icon: "./image/facebook.png", link: "https://www.facebook.com" },
  { name: "Twitter", icon: "./image/twitter.png", link: "https://twitter.com" },
  { name: "whataapp", icon: "./image/whatsapp.png", link: "https://www.whatsapp.com" },
  // Add more social media links as needed
];

// Function to dynamically create social media icons
function createSocialIcons() {
  const socialIconsContainer = document.getElementById("socialIconsContainer");

  socialMediaLinks.forEach((socialMedia) => {
      var iconElement = document.createElement("a");
      iconElement.href = socialMedia.link;
      iconElement.target = "_blank";
      iconElement.innerHTML =`<img src="${socialMedia.icon}" alt="${socialMedia.name}" title="${socialMedia.name}">`;

      socialIconsContainer.appendChild(iconElement);
  });
}

// Call the function to create social media icons
createSocialIcons();