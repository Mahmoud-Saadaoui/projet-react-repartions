import { memo } from "react";

function ProductCard({ product, onAdd }) {
  const { name, price, img, inStock } = product;

  return (
    <div className="product-card">
      <img src={img} alt={name} loading="lazy" decoding="async" />

      <div className="product-info">
        <h3>{name}</h3>
        <div className="price">{price} DH</div>

        <div className={`stock-badge ${inStock ? "stock-available" : "stock-unavailable"}`}>
          {inStock ? "En Stock" : "Rupture de Stock"}
        </div>
      </div>

      {inStock && (
        <div className="add-to-cart" onClick={() => onAdd(product)}>
          Ajouter au panier
        </div>
      )}
    </div>
  );
}

export default memo(ProductCard);