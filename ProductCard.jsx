import React, { useState } from 'react';

// Sample Product Data
const initialProducts = [
  {
    id: 1,
    name: 'iPhone 17 Pro',
    category: 'Mobile Phone',
    price: 999,
    stock: 5,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'MacBook Air M3',
    category: 'Laptop',
    price: 1199,
    stock: 3,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'AirPods Pro 2',
    category: 'Accessories',
    price: 249,
    stock: 0, // Out of stock example
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&auto=format&fit=crop&q=80',
  },
];

// Single Product Card Component
function ProductCard({ product, onAddToCart }) {
  const [isAdded, setIsAdded] = useState(false);
  const isOutOfStock = product.stock === 0;

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500); // Reset button feedback
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <div style={styles.details}>
        <span style={styles.category}>{product.category}</span>
        <h3 style={styles.title}>{product.name}</h3>
        <p style={styles.price}>${product.price.toLocaleString()}</p>
        
        <p style={styles.stockText(isOutOfStock)}>
          {isOutOfStock ? 'Out of Stock' : `In Stock: ${product.stock}`}
        </p>

        <div style={styles.actions}>
          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            style={styles.button(isOutOfStock, isAdded)}
          >
            {isOutOfStock ? 'Unavailable' : isAdded ? 'Added! ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

// Main Product List / Grid Component
export default function ProductCardSystem() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product) => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={{ margin: 0 }}>Product Store</h2>
        <div style={styles.cartBadge}>
          🛒 Cart: <strong>{cartCount}</strong>
        </div>
      </header>

      <div style={styles.grid}>
        {initialProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

// Inline Clean Styles
const styles = {
  container: {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '24px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '28px',
    paddingBottom: '12px',
    borderBottom: '1px solid #eaeaea',
  },
  cartBadge: {
    backgroundColor: '#f3f4f6',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '24px',
  },
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  details: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  category: {
    fontSize: '12px',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '4px',
  },
  title: {
    fontSize: '18px',
    margin: '0 0 8px 0',
    color: '#111827',
  },
  price: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#059669',
    margin: '0 0 12px 0',
  },
  stockText: (outOfStock) => ({
    fontSize: '13px',
    color: outOfStock ? '#dc2626' : '#4b5563',
    margin: '0 0 16px 0',
  }),
  actions: {
    marginTop: 'auto',
  },
  button: (disabled, added) => ({
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: disabled ? '#d1d5db' : added ? '#10b981' : '#2563eb',
    color: '#fff',
    fontWeight: '600',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background-color 0.2s ease',
  }),
};