import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import CloseIcon from '@mui/icons-material/Close';
import "./CartItems.css"
const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img className="carticon-product-icon" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <CloseIcon className='closeicon' onClick={() => removeFromCart(e.id)} />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CartItems;
