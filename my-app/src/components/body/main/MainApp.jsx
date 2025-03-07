import React from "react";
import TopMain from "./TopMain";
import MiddleMain from "./MiddleMain";
import BottomMain from "./BottomMain";

const MainApp = () => {
    return (
        <div className="w-2/3 space-y-6">
            <TopMain />
            <MiddleMain />
            <BottomMain />
        </div>
    )
}

export default MainApp