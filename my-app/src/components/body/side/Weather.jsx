import React from "react";
import sample from "../../../resources/sample.jpeg";

const Weather = () => {
    return (
        <div className="flex flex-col border-2 rounded-xl p-4 w-full">
            <div className="flex justify-between items-center border-b-2 pb-2">
                <div className="space-x-2">
                    <button className="text-xl font-bold">날씨</button>
                    <button className="border-2 rounded-xl px-2 text-gray-500">예보 비교</button>
                </div>
                <span className="text-gray-500 font-semibold">제주시 이도일동</span>
            </div>
            <div className="flex justify-center items-center space-x-4 pt-2">
                <button>
                    <img
                        src={sample} alt="weather" className="rounded-xl"
                    />
                </button>
                <button>
                    <img
                        src={sample} alt="weather" className="rounded-xl"
                    />
                </button>
            </div>

        </div>
    )
}

export default Weather;