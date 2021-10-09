import React from 'react';
<<<<<<< HEAD
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
=======
import useProducts from '../Hooks/useProducts';
import useCart from '../../components/useCart'
>>>>>>> a6c8176989799e4d2cc89f0a7280911c03d2b41c
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
<<<<<<< HEAD
=======

>>>>>>> a6c8176989799e4d2cc89f0a7280911c03d2b41c
    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
<<<<<<< HEAD
        setCart(newCart);
=======
        setCart(newCart)
>>>>>>> a6c8176989799e4d2cc89f0a7280911c03d2b41c
        removeFromDb(key);
    }

    const handlePlaceOrder = () => {
<<<<<<< HEAD
        setCart([]);
        clearTheCart();
        history.push('/placeorder');
=======
        history.push("/PlaceOrder");
        setCart([]);
        clearTheCart();
>>>>>>> a6c8176989799e4d2cc89f0a7280911c03d2b41c
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
<<<<<<< HEAD
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="btn-regular">Place Order</button>
=======

                <Cart cart={cart}>
                    <button
                        onClick={handlePlaceOrder}
                        className="btn-regular">Place Order</button>
>>>>>>> a6c8176989799e4d2cc89f0a7280911c03d2b41c
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;