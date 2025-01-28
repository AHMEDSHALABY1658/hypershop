import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import'./About.css'
export default function AboutSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleInfo = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const boxes = [
        {
            title: "About Us",
            content: [
                "We at [ HyperShop ] strive to provide a multi-shopping experience to meet the basic needs of customers. We offer a wide range of high-quality products at competitive prices, ensuring customer satisfaction with every purchase.",
                
            ],
        },
        {
            title: "Policy",
            content: [
                "We kindly request you to try on the items upon delivery and check their size, material, and quality on the spot.",
                "If you decide not to keep the item, you will only be charged for the shipping.",
                "There is no exchange or refund once you receive the item.",
                "However, in the case of damaged or torn items, no shipping fees will be charged.",
            ],
        },
        {
            title: " Contact Us",
            content: [
                "We are here to help! If you have any questions or concerns, please feel free to contact us via:",
                "Email: support@HyperShop.com",
                "Phone: 01508590031",
                "Social Media: HyperShop",
            ],
        },
    ];

    return (
        <div>
            {/* Google Maps Embed */}
            <div style={{ margin: "auto", width: "70%" }} className="map boder-top">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13803.625212936073!2d31.319837899999996!3d30.1254945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1736862919077!5m2!1sar!2seg"
                    width="600"
                    height="400"
                    style={{ border: "0", width: "100%" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Embed"
                ></iframe>
            </div>

            {/* About Section */}
            <div className="about" style={{ margin: "auto", width: "70%" }}>
                {boxes.map((box, index) => (
                    <div key={index} className={`box ${activeIndex === index ? "active" : ""}`}>
                        <button onClick={() => toggleInfo(index)} className={activeIndex === index ? "rotate-icon" : ""}>
                            {box.title} <FaChevronDown />
                        </button>
                        <ul className="info">
                            {box.content.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
