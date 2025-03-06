import React from "react";
import sample from "../../../resources/sample.jpeg";

const Stock = () => {
    return (
        <div className="flex flex-col border-2 rounded-xl p-4 w-full">
            <div className="flex justify-between items-center border-b-2 pb-2">
                <div className="space-x-2 flex justify-center items-center">
                    <button className="text-xl font-bold">증시</button>
                    <button className="border-2 rounded-full w-6 h-6 px-2 text-gray-500">!</button>
                </div>
                <span className="text-gray-500 font-semibold">제주시 이도일동</span>
            </div>
            
            <div className="flex justify-center items-center space-x-4">
                <button className="w-1/2 pt-2">
                    <img
                        src={sample} alt="stock" className="rounded-xl"
                    />
                </button>
                <div className="flex flex-col space-y-2 w-1/2">
                    <button className="flex justify-between items-center border-b-2 pb-2">
                        <span>금양</span>
                        <div className="space-x-1">
                            <span className="text-blue-400 font-semibold">↓24.20%</span>
                            <span>13,470</span>
                        </div>
                    </button>
                    <button className="flex justify-between items-center border-b-2 pb-2">
                        <span>HLB</span>
                        <div className="space-x-1">
                        <span className="text-blue-400 font-semibold">↓4.31%</span>
                        <span>85,450</span>
                        </div>
                    </button>
                    <button className="flex justify-between items-center border-b-2 pb-2">
                        <span>삼성전자</span>
                        <div className="space-x-1">
                        <span className="text-red-400 font-semibold">↑0.19%</span>
                        <span>54,100</span>
                        </div>
                    </button>
                    <button className="flex justify-between items-center border-b-2 pb-2 text-gray-500">
                        <span>인기종목 더보기</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Stock;