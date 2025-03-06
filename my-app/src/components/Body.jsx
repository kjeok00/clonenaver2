import React from "react";
import MainApp from "./body/main/MainApp";
import SideApp from "./body/side/SideApp";

const Body = () => {
    return (
        <div className="flex justify-center w-full items-center">
            <MainApp />
            <SideApp />
        </div>
    )
}

export default Body;