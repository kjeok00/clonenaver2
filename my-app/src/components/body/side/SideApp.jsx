import React from "react";
import Login from "./Login";
import NaverAd from "./NaverAd";
import ShoppingAd from "./ShoppingAd";
import Weather from "./Weather";
import Stock from "./Stock";
import Widget from "./Widget";
import ClipAd from "./ClipAd";

const SideApp = () => {
    return (
        <div className="w-1/3 flex flex-col space-y-6 sticky top-14">
            <Login />
            <NaverAd />
            <ShoppingAd />
            <Weather />
            <Stock />
            <Widget />
            <ClipAd />
        </div>
    )
}

export default SideApp;