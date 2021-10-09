import React from 'react';

const ReviewItem = (props) => {
<<<<<<< HEAD
    const { name, price, quantity, key } = props.product;
=======
    const { name, quantity, price, key } = props.product;
>>>>>>> a6c8176989799e4d2cc89f0a7280911c03d2b41c
    const { handleRemove } = props;
    return (
        <div className="product">
            <div>
                <h4 className="product-name">{name}</h4>
<<<<<<< HEAD
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => handleRemove(key)} className="btn-regular">Remove</button>
=======
                <p>{price}</p>
                <p>{quantity}</p>
                <button onClick={() => handleRemove(key)}
                    className="btn-regular">Remove</button>
>>>>>>> a6c8176989799e4d2cc89f0a7280911c03d2b41c
            </div>
        </div>
    );
};

export default ReviewItem;