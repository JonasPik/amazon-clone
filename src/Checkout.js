import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';


function Checkout() {



    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className="checkout__ad" src="https://m.media-amazon.com/images/G/02/UK_CBCC_PLAT/Peak20/PD20_Plat_30_-_Holiday_-_V2.jpg"
                    alt="" />

                <div>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>

    )
}

export default Checkout
