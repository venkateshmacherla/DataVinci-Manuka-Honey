import React, { useState } from "react";
import "./ProductDetails.css";

export default function ProductDetails() {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="product-details">
            <div className="product-title-block">
                <div className="product-title-main">Manuka Honey</div>
                <div className="product-tags">
                    <span className="umf">
                        UMF<sup>™</sup> 24+
                    </span>
                    <span className="mgo">MGO 1122+</span>
                </div>
            </div>
            <button
                className="info-btn"
                onClick={() => setShowInfo((show) => !show)}
            >
                <span className="info-icon" aria-hidden="true"></span>
                What is UMF and MGO?
            </button>
            {showInfo && (
                <div className="info-modal">
                    <h4><b>UMF</b> is the strength and purity rating of Manuka honey.</h4>
                    <div className="scale-row">
                        <span className="umf-tag umf10">10+</span>
                        <span className="umf-tag umf15">15+</span>
                        <span className="umf-tag umf20">20+</span>
                        <span className="umf-tag umf24">24+</span>
                        <span className="umf-tag umf26">26+</span>
                        <span className="umf-tag umf28">28+</span>
                        <span className="umf-tag umf30">30+</span>
                    </div>
                    <p className="modal-desc">
                        The higher the number, the greater the potency and rarity of Manuka honey.
                    </p>
                    <h4><b>MGO</b> is the key natural compound that gives Manuka honey its special antibacterial strength.</h4>
                    <div className="scale-row">
                        <span className="mgo-tag mgo263">263+</span>
                        <span className="mgo-tag mgo514">514+</span>
                        <span className="mgo-tag mgo829">829+</span>
                        <span className="mgo-tag mgo1122">1122+</span>
                        <span className="mgo-tag mgo1282">1282+</span>
                        <span className="mgo-tag mgo1450">1450+</span>
                        <span className="mgo-tag mgo1620">1620+</span>
                    </div>
                    <p className="modal-desc">
                        The higher the number, the higher the antibacterial properties in the honey.
                    </p>
                </div>
            )}
            <div className="review-header">
                <div className="review-title">The Optimiser</div>
                <div className="review-ratings">
                    <span className="stars">💛💛💛💛💛</span>
                    <span className="reviews-count">825 REVIEWS</span>
                </div>
            </div>
            <p className="description-box">
                For those times in life when quality comes first. This pure UMF<sup>™</sup> 24+ Manuka Honey is powerfully active, sourced from wild and rugged locations around Aotearoa New Zealand and great for almost all uses. It has a full, delicious flavour and your body will love you for it.
            </p>
        </div>
    );
}
