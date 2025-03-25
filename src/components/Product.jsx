import React from "react";
import "../css/product.css";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    description: "Experience the latest technology with the iPhone 15 Pro Max.",
    price: "$1299",
    image: "https://www.iphoned.nl/wp-content/uploads/2023/06/iphone-15-pro-kleur.jpg",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    description: "The future is here with Samsung Galaxy S24 Ultra.",
    price: "$1199",
    image: "https://m.media-amazon.com/images/I/71ZoDT7a2wL._AC_SL1500_.jpg",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    description: "Premium noise-canceling headphones with exceptional sound.",
    price: "$399",
    image: "https://th.bing.com/th/id/OIP.lPVi_g7FensHZtfYXDUAyQHaJ3?rs=1&pid=ImgDetMain",
  },
  {
    id: 4,
    name: "MacBook Air M3",
    description: "Powerful and lightweight, ideal for work and creativity.",
    price: "$1499",
    image: "https://th.bing.com/th/id/OIP.0o7VkcVo-woRKj0l5T9HVwHaEK?rs=1&pid=ImgDetMain",
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    description: "Stay connected and track your health with ease.",
    price: "$499",
    image: "https://th.bing.com/th/id/OIP.Rv1Gyyp1VOJugg9xnEsVNwHaG5?rs=1&pid=ImgDetMain",
  },
  {
    id: 6,
    name: "PlayStation 5",
    description: "Next-gen gaming console with stunning graphics.",
    price: "$499",
    image: "https://th.bing.com/th/id/OIP.YpTHqDYR3IPHmb3nX10kQgHaDo?rs=1&pid=ImgDetMain",
  },
];

const ProductPage = () => {
  const handleAddToCart = (product) => {
    alert(`✅ Added "${product.name}" to cart!`);
  };

  return (
    <div className="product-container">
      <h1 className="product-title">Explore Our Latest Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
