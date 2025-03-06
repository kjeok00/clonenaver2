import React from "react";
import TopMain from "./TopMain";
import MiddleMain from "./MiddleMain";

const MainApp = () => {
    return (
        <div className="w-2/3 space-y-6">
            <TopMain />
            <MiddleMain />
        </div>
    )
}

export default MainApp