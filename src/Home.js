import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TruthSeekersS1/TSKR_S1_GWBleedingHero_P_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB418070590_.jpg"
                    alt="" className="home__image"
                />

                <div className="home__row">
                    <Product id="1" title="All-new Echo Dot (4th generation)" price={49.99} image="https://m.media-amazon.com/images/I/71Q9d6N7xkL._AC_UY218_.jpg" rating={5} />
                    <Product id="2" title="New Apple MacBook Pro (13-inch, 8GB RAM, 256GB SSD Storage, Magic Keyboard)" price={1210.00} image="https://m.media-amazon.com/images/I/71luKYldpwL._AC_UY218_.jpg" rating={4} />
                </div>

                <div className="home__row">
                    <Product id="3" title="AMD Ryzen 9 5900X Processor (12C/24T, 70MB Cache, up to 4.8 GHz Max Boost)" price={649.99} image="https://m.media-amazon.com/images/I/616VM20+AzL._AC_UY218_.jpg" rating={5} />
                    <Product id="4" title="HUAWEI MateBook 14 2020, Laptop 2K FullView Display Ultrabook" price={949} image="https://m.media-amazon.com/images/I/519C0RcS6aL._AC_UY218_.jpg" rating={5} />
                    <Product id="5" title="iiyama G-MASTER GB3461WQSU-B1" price={378.84} image="https://m.media-amazon.com/images/I/41HIzVwmSXL._AC_SY200_.jpg" rating={4} />
                </div>

                <div className="home__row">
                    <Product id="5" title="Samsung LC49HG90DMUXEN 49' Curved Ultra Wide LED Monitor" price={833.97} image="https://m.media-amazon.com/images/I/419e8BJn7uL._AC_SY200_.jpg" rating={3} />
                </div>
            </div>
        </div>
    )
}

export default Home
