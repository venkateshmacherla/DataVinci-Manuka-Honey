import React, { useState } from "react";
import "./BundleSection.css";

import bundleImage1 from "../assets/bundleImage1.png";
import bundleImage2 from "../assets/bundleImage2.png";
import bundleImage3 from "../assets/bundleImage3.png";

export default function BundleSection() {
    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };
    const handleIncrease = () => setQuantity(quantity + 1);

    return (

        <div className="bundle-section">
            <div className="pay-row-label">SELECT QUANTITY</div>
            <div className="bundle-action-row">
                <div className="qty-group">
                    <button className="qty-btn" onClick={handleDecrease}>-</button>
                    <span className="qty-num">{quantity}</span>
                    <button className="qty-btn" onClick={handleIncrease}>+</button>
                </div>
                <button className="bundle-add-cart-btn">ADD TO CART</button>
            </div>
            <div className="bundle-title-row plain">
                <div className="bundle-title-row plain">
                    <span className="bundle-arrow left">&#60;</span>
                    <span className="bundle-title">Beauty Bundle</span>
                    <span className="bundle-arrow right">&#62;</span>
                </div>
            </div>


            <div className="bundle-row">
                <div className="bundle-items">
                    <div className="bundle-product">
                        <img src={bundleImage1} alt="UMF 20+" />
                        <div className="bundle-label">UMF 20+</div>
                        <select className="bundle-select">
                            <option>250g</option>
                            <option>500g</option>
                        </select>
                    </div>
                    <div className="bundle-plus">+</div>
                    <div className="bundle-product">
                        <img src={bundleImage2} alt="UMF 24+" />
                        <div className="bundle-label">UMF 24+</div>
                        <select className="bundle-select">
                            <option>250g</option>
                            <option>500g</option>
                        </select>
                    </div>
                    <div className="bundle-plus">+</div>
                    <div className="bundle-product">
                        <img src={bundleImage3} alt="Wooden Spoon" />
                        <div className="bundle-label">Wooden Spoon</div>
                    </div>
                </div>
                <div className="bundle-summary">
                    <div className="bundle-pricing">
                        <span className="oldprice">$478.75 USD</span>
                        <span className="bundle-price">$430.88 USD</span>
                        <span className="bundle-save">Save 10%</span>
                    </div>
                    <button className="bundle-add-btn">ADD BUNDLE TO CART</button>
                </div>
            </div>
        </div>
    );
}
