import React, { useRef, useState } from 'react';
import ProductModal from '../ProductModal/ProductModal';
import CartToast from '../CartToast/CartToast';
import './ProductShelf.scss';
import productsData from '../../data/products.json';

const ProductShelf = () => {
  const data = productsData.products;
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showToast, setShowToast] = useState(false);
  const [lastQty, setLastQty] = useState(0);

  const handleFinishPurchase = (qty: number) => {
    setLastQty(qty);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="product-shelf-container">
      <div className="carousel-wrapper">
        <button className="arrow left" onClick={() => scroll('left')}>&lt;</button>
        
        <div className="carousel-content" ref={carouselRef}>
          {data.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="image-container">
                <img src={product.photo} alt={product.productName} />
              </div>
              <div className="product-details">
                <p className="name">{product.productName}</p>
                <p className="old-price">R$ 30,90</p>
                <p className="price">
                  {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </p>
                <p className="installments">ou 2x de R$ {(product.price / 2).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} sem juros</p>
                <p className="shipping">Frete grátis</p>
                <button className="buy-button" onClick={() => setSelectedProduct(product)}>COMPRAR</button>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={() => scroll('right')}>&gt;</button>
      </div>
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onConfirm={handleFinishPurchase}
        />
      )}
      <CartToast quantity={lastQty} isVisible={showToast} />
    </div>
  );
};

export default ProductShelf;