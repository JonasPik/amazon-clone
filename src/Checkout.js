import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';


function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className="checkout__ad" src="https://m.media-amazon.com/images/G/02/UK_CBCC_PLAT/Peak20/PD20_Plat_30_-_Holiday_-_V2.jpg"
                    alt="" />

                <div>
                    <h3>Hello, {user ? user.email : 'Guest'}</h3>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {basket.map((item, i) => (
                        <CheckoutProduct key={i}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>

    )
}

export default Checkout
