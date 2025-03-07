import React from "react";
import sample from "../../../resources/sample.jpeg";

const MiddleMain = () => {
    const items = [
        "눈에 안보이던데 녹물이 나오네?!",
        "눈에 안보이던데 녹물이 나오네?!",
        "눈에 안보이던데 녹물이 나오네?!",
        "눈에 안보이던데 녹물이 나오네?!",
        "눈에 안보이던데 녹물이 나오네?!",
    ];

    return (
        <div className="flex flex-col space-y-4 p-4 w-full border-2 rounded-xl">
            {/*카테고리*/}
            <div className="flex justify-between items-center ">
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
            <div className="flex justify-center w-full space-x-8"> {/* 간격을 넓히기 위해 space-x-8 추가 */}
                <div className="w-1/3 flex flex-col space-y-4 justify-center items-center">
                    {/*마켓리스트*/}
                    <div className="flex flex-col space-y-4 justify-center ">
                        <div className="border-2 rounded-xl flex flex-col space-y-1 items-center justify-between p-2 text-xs text-gray-700 w-full">
                            <div className="flex justify-between w-full space-x-4">
                                <button>쿠팡</button>
                                <button>G마켓</button>
                                <button>옥션</button>
                                <button>올리브영</button>
                            </div>
                            <div className="flex justify-between w-full space-x-4">
                                <button>11번가</button>
                                <button>SSG닷컴</button>
                                <button>GS SHOP</button>
                            </div>
                            <div className="flex justify-between w-full space-x-4">
                                <button>하프클럽</button>
                                <button>CJ온스타일</button>
                                <button>패션플러스</button>
                            </div>
                        </div>

                        {/*바로가기*/}
                        <div className="flex justify-evenly items-center space-x-2 border-2 rounded-xl p-2 text-sm text-gray-700 w-full">
                            <button className="flex flex-col justify-center items-center text-xs h-full"><span>🧑‍💻</span><span>마이쇼핑</span></button>
                            <button className="flex flex-col justify-center items-center text-xs h-full"><span>🧑‍💻</span><span>마이쇼핑</span></button>
                            <button className="flex flex-col justify-center items-center text-xs h-full"><span>🧑‍💻</span><span>마이쇼핑</span></button>
                            <button className="flex flex-col justify-center items-center text-xs h-full"><span>🧑‍💻</span><span>마이쇼핑</span></button>
                        </div>

                        <button className="w-full flex flex-col justify-center space-y-2">
                            <img src={sample} alt="sample" className="w-full rounded-xl" />
                            <span className="text-sm font-semibold">폴리오 괴물 신상품 하체 전체 케어</span>
                        </button>
                    </div>
                </div>

                {/*상품리스트*/}
                <div className="flex flex-col w-2/3 rounded-xl text-sm">
                    <div className="flex flex-col rounded-xl text-sm space-y-4">
                        <div className="flex flex-col space-y-2">
                            {[...Array(2)].map((_, rowIndex) => (
                                <div key={rowIndex} className="flex justify-between space-x-2 w-full">
                                    {items.map((text, index) => (
                                        <button key={index} className="flex flex-col items-center flex-1 min-w-0 outline-none border-none bg-transparent">
                                            <img src={sample} alt="sample" className="rounded-xl w-full" />
                                            <p className="line-clamp-2 text-center">{text}</p>
                                        </button>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <button className="flex justify-start items-center bg-gray-100 rounded-xl gap-2 p-3 text-sm">
                <span className="font-bold">오늘의 혜택</span>
                <span className="font-bold text-red-600">Auction.</span>
                <span className="text-purple-500 font-semibold">옥션 더쎈 빅페스타!</span>
                <span className="font-semibold">무제한 12%쿠폰+브랜드 중복쿠폰까지!</span>
            </button>

            <div className="flex justify-center gap-4 items-center">
                <button className=" flex justify-center items-center rounded-full border w-6 h-6">←</button>
                <div className="space-x-1 text-sm">
                    <span className="text-purple-500">쇼핑아이템</span>
                    <span>더보기</span>
                    <span>1</span>
                    <span>/</span>
                    <span className="text-gray-500">25</span>
                </div>
                <button className=" flex justify-center items-center rounded-full border w-6 h-6">→</button>
            </div>
        </div>
    )
}

export default MiddleMain;