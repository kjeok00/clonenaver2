import React from "react";
import sample from "../../../resources/sample.jpeg";
import imageLink from "../../../resources/image.json";

const NaverAd = () => {
    return (
        <button className="border-2 rounded-xl w-full">
            <img
                src={imageLink.naverAd} alt="ad" className="w-full rounded-xl"
            />
        </button>
    )
}

export default NaverAd;