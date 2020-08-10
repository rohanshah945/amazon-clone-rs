import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  };

  return (
    <div className='checkoutProduct'>
      <img className='chekoutProduct__image' src={image} alt={title} />

      <div className='checkoutProductInfo'>
        <p className='chekoutProduct__title'>{title}</p>

        <p className='chekoutProduct__price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <div className='chekoutProduct__rating'>
          {Array(rating)
            .fill()
            .map((_) => (
              <span key={Math.random()}>{`⭐`}</span>
            ))}
        </div>

        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
