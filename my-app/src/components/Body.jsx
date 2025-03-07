import React from "react";
import MainApp from "./body/main/MainApp";
import SideApp from "./body/side/SideApp";

const Body = () => {
    return (
        <div className="flex justify-center w-full space-x-6">
            <MainApp />
            <SideApp />
        </div>
    )
}

export default Body;