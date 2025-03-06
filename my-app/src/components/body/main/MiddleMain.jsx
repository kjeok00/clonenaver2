import React from "react";

const MiddleMain = () => {
    return (
        <div className="flex flex-col space-y-4 p-4 w-full border-2 rounded-xl">
            {/*카테고리*/}
            <div className="flex justify-between items-center">
                <div className="flex justify-start text-sm space-x-4 text-gray-400 font-semibold">
                    <button className="text-black font-bold">쇼핑</button>
                    <button>맨즈</button>
                    <button>원뿔딜</button>
                    <button>쇼핑라이브</button>
                </div>
                <div>
                    <div className="text-xs text-gray-400 font-semibold flex items-center">
                        <span className="text-black">1</span>
                        <span>/</span>
                        <span>25</span>

                        <div className="ml-2">
                            <button className="border-2 p-1 rounded-sm">
                                <span>◀</span>
                            </button>
                            <button className="border-2 p-1 rounded-sm">
                                <span>▶</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <dev>

            </dev>
            {/*마켓리스트*/}
            <div className="border-2 rounded-xl">


            </div>
        </div>
    )
}

export default MiddleMain;