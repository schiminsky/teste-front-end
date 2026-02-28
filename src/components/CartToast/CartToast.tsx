import React from 'react';
import './CartToast.scss';

interface CartToastProps {
  quantity: number;
  isVisible: boolean;
}

const CartToast: React.FC<CartToastProps> = ({ quantity, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="cart-toast">
      <p>{quantity} {quantity > 1 ? 'itens adicionados' : 'item adicionado'} ao carrinho!</p>
    </div>
  );
};

export default CartToast;