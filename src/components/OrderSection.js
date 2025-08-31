import React from "react";
import "./OrderSection.css";

import earnLogo from "../assets/earnLogo.png";

export default function OrderSection() {
    return (
        <div className="order-section">
            <div className="rewards-row">
                <img
                    src={earnLogo}
                    alt=""
                    className="rewards-icon"
                />
                <span className="rewards-text">
                    Colourclub members earn up to
                </span>
                <span className="rewards-points">56</span>
                <span className="rewards-desc">
                    reward points when buy this item. <a href="#">Sign up or log in</a>
                </span>
            </div>
            <div className="delivery-details">
                <div>
                    <div className="label">DELIVERY</div>
                    <div className="value">FREE DELIVERY ON ORDERS OVER $30</div>
                </div>
                <div>
                    <div className="label">ESTIMATED DELIVERY DATE:</div>
                    <div className="value">Jun 9 - Jun 13</div>
                </div>
            </div>
            <hr></hr>
            <div className="afterpay-row">
                <span className="afterpay-label">AFTER PAY</span>
                <div className="afterpay-desc">
                    or 4 interest-free payments of $13.97 with
                    <span className="afterpay-logo-wrap">
                        <span className="afterpay-logo">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <rect x="1" y="1" width="22" height="22" rx="5" fill="#12DC57" />
                                <text x="11.5" y="16" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fff" fontFamily="Arial">$</text>
                            </svg>
                        </span>
                        <span className="afterpay-text">Afterpay</span>
                        <span className="afterpay-info">
                            <svg width="16" height="16" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="7.2" stroke="#ccc" strokeWidth="1.4" fill="none" />
                                <text x="8" y="12" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#888" fontFamily="Arial">i</text>
                            </svg>
                        </span>
                    </span>
                </div>
            </div>
            <hr></hr>
            <div className="umf-scale-row">
                <div className="umf-scale-label">UMF™ SCALE</div>
                <div className="umf-scale-bar">
                    <span className="umf10">UMF™ 10+</span>
                    <span className="umf15">UMF™ 15+</span>
                    <span className="umf20">UMF™ 20+</span>
                    <span className="umf24 umf-active">UMF™ 24+</span>
                    <span className="umf26">UMF™ 26+</span>
                    <span className="umf28">UMF™ 28+</span>
                    <span className="umf30">UMF™ 30+</span>
                </div>
            </div>
            <div className="taste-profile-row">
                <div className="taste-profile-label">TASTE PROFILE</div>
                <div className="taste-profile-bar">
                    <span>Clean & Intense</span>
                    <input type="range" min="0" max="100" value="54" readOnly />
                    <span>Bold & Intense</span>
                </div>
            </div>
        </div>
    );
}
