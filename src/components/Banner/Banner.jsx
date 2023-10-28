import React from "react";

const Banner = ({ imageSrc, altText, bannerTitle, bannerSubtitle, className }) => {
    return (
        <section className={`banner ${className}`}>
            <img src={imageSrc} alt={altText} />
            { bannerTitle && 
                <h1 className="bannerTitle">
                    <span>{bannerTitle}</span>
                    { bannerSubtitle && <span>{bannerSubtitle}</span>}
                </h1>
            }
        </section>
    );
};

export default Banner;