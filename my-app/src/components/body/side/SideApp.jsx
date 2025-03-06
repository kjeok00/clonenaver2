import react from "react";
import Login from "./Login";
import NaverAd from "./NaverAd";
import ShoppingAd from "./ShoppingAd";
import Weather from "./Weather";

const SideApp = () => {
    return (
        <div className="w-1/3 flex flex-col justify-center items-center">
            <Login />
            <NaverAd />
            <ShoppingAd />
            <Weather />
        </div>
    )
}

export default SideApp;