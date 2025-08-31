import React, { useState } from "react";
import "./ProductSelection.css";

import certificationsImage1 from "../assets/certifications1.png";
import certificationsImage2 from "../assets/certifications2.png";
import certificationsImage3 from "../assets/certifications3.png";
import certificationsImage4 from "../assets/certifications4.png";
import certificationsImage5 from "../assets/certifications5.png";
import certificationsImage6 from "../assets/certifications6.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";

const certifications = [
    { src: certificationsImage1, alt: "UMF Certified" },
    { src: certificationsImage2, alt: "UMF Certified" },
    { src: certificationsImage3, alt: "UMF Certified" },
    { src: certificationsImage4, alt: "UMF Certified" },
    { src: certificationsImage5, alt: "UMF Certified" },
    { src: certificationsImage6, alt: "UMF Certified" }
];

const productOptions = [
    { src: product1, alt: "Jar 1" },
    { src: product5, alt: "Jar 5" },
    { src: product6, alt: "Jar 6" },
    { src: product2, alt: "Jar 2" },
    { src: product7, alt: "Jar 7" },
    { src: product4, alt: "Jar 4" },
    { src: product3, alt: "Jar 3" },
];

export default function ProductSelection() {
    const [selectedProduct, setSelectedProduct] = useState(0);
    const [payment, setPayment] = useState("one-time");

    return (
        <div className="product-selection-section">
            {/* Certifications */}
            <div className="cert-row">
                {certifications.map((c, idx) => (
                    <img key={idx} src={c.src} alt={c.alt} className="cert-icon" />
                ))}
            </div>

            {/* Size Selector */}
            <div className="size-row">
                <span className="variant-info">SIZE (SELECT ONE)</span>
                <span className="variant-info">Variant: 125g | 4.4oz</span>
            </div>

            {/* Product Thumbnails */}
            <div className="product-thumb-row">
                {productOptions.map((opt, idx) => (
                    <div
                        key={idx}
                        className={`product-thumb ${selectedProduct === idx ? "selected" : ""}`}
                        onClick={() => setSelectedProduct(idx)}
                    >
                        <img src={opt.src} alt={opt.alt} />
                    </div>
                ))}
            </div>

            {/* Payment Options */}
            <div className="pay-row-label">PAYMENT OPTIONS (SELECT ONE)</div>
            <div className="payment-options-row">
                <button
                    className={`pay-option ${payment === "one-time" ? "selected" : ""}`}
                    onClick={() => setPayment("one-time")}
                >
                    <span className="pay-type">One-time purchase</span>
                    <span className="pay-price">$55.88 USD</span>
                </button>
                <button
                    className={`pay-option ${payment === "subscribe" ? "selected" : ""}`}
                    onClick={() => setPayment("subscribe")}
                >
                    <span className="pay-type">Subscribe & save 20%</span>
                    <span className="pay-price">$44.70 USD</span>
                </button>
            </div>
            <div className="subscription-hint-row">
                <span className="refresh-circ" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 20 20">
                        <path d="M5.5 5A7 7 0 1 1 3 10" fill="none" stroke="#888" strokeWidth="1.5" strokeLinecap="round" />
                        <polyline points="4.2,4.7 5.6,5.1 5.2,6.5" fill="none" stroke="#888" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
                <span className="subscription-hint">What is a Subscription?</span>
            </div>
        </div>
    );
}
