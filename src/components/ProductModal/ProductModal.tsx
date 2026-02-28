import React, { useState } from 'react';
import './ProductModal.scss';

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ModalProps {
  product: Product;
  onClose: () => void;
  onConfirm: (qty: number) => void;
}

const ProductModal: React.FC<ModalProps> = ({ product, onClose, onConfirm }) => {
  const [quantity, setQuantity] = useState(1);

  // Funções de controle de quantidade
  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleBuy = () => {
    onConfirm(quantity); 
    
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✕</button>
        <div className="modal-content">
          <div className="image-side">
            <img src={product.photo} alt={product.productName} />
          </div>
          <div className="info-side">
            <h3 className="product-name">{product.productName}</h3>
            <p className="modal-price">
              {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
            <p className="modal-description">
              Many desktop publishing packages and web page editors now many desktop publishing
            </p>
            <a href="#" className="view-details">Veja mais detalhes do produto &gt;</a>
            <div className="modal-actions">
              <div className="quantity-control">
                <button onClick={decrement}>-</button>
                <span>{quantity.toString().padStart(2, '0')}</span>
                <button onClick={increment}>+</button>
              </div>
              <button className="confirm-buy" onClick={handleBuy}>
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;