import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, rating, image }) {
  const [, dispatch] = useStateValue();

  const addToCart = () => {
    // Add item in Cart
    dispatch({
      type: 'ADD_TO_CART',
      item: { id, title, price, rating, image },
    });
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_) => (
              <span key={Math.random()}>{`⭐`}</span>
            ))}
        </div>
      </div>

      <img src={image} alt={title} />

      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Product;
