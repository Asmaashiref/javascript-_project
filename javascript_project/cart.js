

document.addEventListener('DOMContentLoaded', function() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const cartDataString = urlParams.get('cart');
            const cartData = cartDataString ? JSON.parse(decodeURIComponent(cartDataString)) : [];

            if (cartData.length === 0) {
                const storedCartData = JSON.parse(sessionStorage.getItem('cart')) || [];
                cartData.push(...storedCartData);
            }

           
            const cartContentDiv = document.getElementById('cart-content');
            if (cartData.length > 0) {
                cartData.forEach(product => {
                    const card = createProductCard(product);
                    cartContentDiv.appendChild(card);
                });
            } else {
                cartContentDiv.innerHTML = '<p>Your cart is empty.</p>';
            }

            function createProductCard(product) {
                const card = document.createElement('div');
                card.classList.add('product-card');
                card.innerHTML = `
                  
                    <h2>${product.name}</h2>
              
                    <h3>Quantity: ${product.quantity}</h3>
                `;
                return card;
            }
        });