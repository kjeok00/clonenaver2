import React from "react";
import sample from "../../../resources/sample.jpeg";

const ClipAd = () => {
    return (
        <div className="flex border-2 rounded-xl p-4 w-full justify-start items-center space-x-4">
            <button>
                <img 
                    src={"https://s.pstatic.net/static/www/mobile/edit/20250211_1095/upload_1739261220495dFIto.png"} alt="clipad" className=""
                />
            </button>
            <button className="flex flex-col items-start">
                <p className="text-sm font-bold">클립 크리에이터 되고 싶다면?</p>
                <p className="text-sm font-medium text-gray-500">클립 챌린저 하세요!</p>
            </button>
        </div>
    )
}

export default ClipAd;