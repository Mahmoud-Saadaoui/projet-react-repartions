import { memo } from "react";

function CartItem({ item, onChangeQty, onRemove }) {
  const { product, qty } = item;

  return (
    <div className="cart-item">
      <img src={product.img} alt={product.name} loading="lazy" decoding="async" />

      <div className="info">
        <div className="title">{product.name}</div>
        <div className="price">{product.price} DH</div>
      </div>

      <div className="quantity">
        <button onClick={() => onChangeQty(product.id, -1)}>-</button>
        <span>{qty}</span>
        <button onClick={() => onChangeQty(product.id, 1)}>+</button>
      </div>

      <div className="remove" onClick={() => onRemove(product.id)}>
        🗑️
      </div>
    </div>
  );
}

export default memo(CartItem);