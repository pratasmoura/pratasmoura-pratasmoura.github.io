// Função para adicionar produtos ao carrinho
function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Adiciona o produto ao carrinho
    cart.push({ name: productName, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Atualiza o contador do carrinho
    updateCartCount();
    
    alert('Produto adicionado ao carrinho!');
}

// Função para atualizar o contador do carrinho
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').textContent = cart.length;
}

// Carregar o contador ao abrir qualquer página
document.addEventListener('DOMContentLoaded', updateCartCount);

// Função para carregar o carrinho na página do carrinho
function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartTable = document.querySelector('#cart-items tbody');
    let totalPrice = 0;

    cart.forEach(item => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>1</td>
        `;
        cartTable.appendChild(row);
        totalPrice += item.price;
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Função para finalizar a compra
function finalizePurchase() {
    alert('Compra finalizada!');
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
}

// Carrega o carrinho ao abrir a página carrinho.html
if (window.location.pathname.endsWith('carrinho.html')) {
    loadCart();
}
