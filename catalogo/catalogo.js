/* catalogo.js - Manage catalog and product creation dynamically */

const catalogContainerId = 'catalog-container';

// Product data for each catalog page
const productsData = {
    'hogar.html': [
        { id: 1, name: 'Sofá Moderno', description: 'Cómodo sofá para sala de estar', price: '$300.00', image: '/src/images/muebles.jpg' },
        { id: 2, name: 'Mesa de Centro', description: 'Mesa elegante para tu sala', price: '$150.00', image: '/src/images/muebles.jpg' },
        { id: 3, name: 'Lámpara de Pie', description: 'Iluminación cálida y moderna', price: '$80.00', image: '/src/images/muebles.jpg' },
        // Add more hogar products up to 20
    ],
    'herramientas.html': [
        { id: 1, name: 'Taladro Eléctrico', description: 'Potente taladro para todo uso', price: '$120.00', image: '/src/images/herramientas.jpg' },
        { id: 2, name: 'Juego de Destornilladores', description: 'Set completo para reparaciones', price: '$40.00', image: '/src/images/herramientas.jpg' },
        { id: 3, name: 'Sierra Manual', description: 'Ideal para cortes precisos', price: '$60.00', image: '/src/images/herramientas.jpg' },
        // Add more herramientas products up to 20
    ],
    'ropa.html': [
        { id: 1, name: 'Camiseta Casual', description: 'Camiseta cómoda y fresca', price: '$20.00', image: '/src/images/ropa.jpg' },
        { id: 2, name: 'Jeans Ajustados', description: 'Jeans de moda para todos', price: '$50.00', image: '/src/images/ropa.jpg' },
        { id: 3, name: 'Chaqueta Ligera', description: 'Perfecta para clima fresco', price: '$70.00', image: '/src/images/ropa.jpg' },
        { id: 5, name: 'Camiseta Casual', description: 'Camiseta cómoda y fresca', price: '$20.00', image: '/src/images/ropa.jpg' },
        { id: 6, name: 'Jeans Ajustados', description: 'Jeans de moda para todos', price: '$50.00', image: '/src/images/ropa.jpg' },
        { id: 7, name: 'Chaqueta Ligera', description: 'Perfecta para clima fresco', price: '$70.00', image: '/src/images/ropa.jpg' },        { id: 1, name: 'Camiseta Casual', description: 'Camiseta cómoda y fresca', price: '$20.00', image: '/src/images/ropa.jpg' },
        { id: 8, name: 'Jeans Ajustados', description: 'Jeans de moda para todos', price: '$50.00', image: '/src/images/ropa.jpg' },
        { id: 9, name: 'Chaqueta Ligera', description: 'Perfecta para clima fresco', price: '$70.00', image: '/src/images/ropa.jpg' },
        { id: 10, name: 'Camiseta Casual', description: 'Camiseta cómoda y fresca', price: '$20.00', image: '/src/images/ropa.jpg' },

        // Add more ropa products up to 20
    ]
};

// Function to create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    const img = document.createElement('img');
    img.className = 'product-image';
    img.src = product.image;
    img.alt = product.name;

    const info = document.createElement('div');
    info.className = 'product-info';

    const name = document.createElement('h3');
    name.className = 'product-name';
    name.textContent = product.name;

    const desc = document.createElement('p');
    desc.className = 'product-description';
    desc.textContent = product.description;

    const price = document.createElement('p');
    price.className = 'product-price';
    price.textContent = product.price;

    info.appendChild(name);
    info.appendChild(desc);
    info.appendChild(price);

    card.appendChild(img);
    card.appendChild(info);

    return card;
}

// Function to render catalog products based on current page
function renderCatalog() {
    const container = document.getElementById(catalogContainerId);
    if (!container) {
        console.error('Catalog container not found');
        return;
    }
    container.innerHTML = ''; // Clear existing content

    // Get current page filename
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1);

    const products = productsData[page] || [];

    products.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
}

// Initialize catalog on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
});
