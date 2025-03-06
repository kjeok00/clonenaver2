import react from "react";
import sample from "../../../resources/sample.jpeg";

const NaverAd = () => {
    return (
        <button className="border-2 rounded-xl w-full">
            <img
                src={sample} alt="ad" className="w-full rounded-xl"
            />
        </button>
    )
}

export default NaverAd;