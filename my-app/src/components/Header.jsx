import React from "react";

const Header = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center pt-2 pb-20">
            {/*바로가기*/}
            <div className="flex justify-between w-full">
                <div className="space-x-6">
                    <button>⋯</button>
                    <button>pay</button>
                </div>

                <div className="space-x-6">
                    <button>💬</button>
                    <button>📢</button>
                    <button>shop</button>
                </div>
            </div>

            {/*검색*/}
            <div className="border-green-500 border-2 rounded-full w-1/2 py-2 px-7 flex justify-between items-center">
                <button className="text-green-500 font-bold text-3xl">
                    N
                </button>
                <input
                    type="text"
                    placeholder="검색어를 입력하세요."
                    className="flex-grow outline-none px-4 bg-transparent text-xl"
                />
                <div className="text-3xl space-x-4">
                    <button>⌨️</button>
                    <button>🔍</button>
                </div>
            </div>

            {/*메뉴*/}
            <div className="flex justify-evenly w-1/2 items-center py-2">
                <button className="flex flex-col items-center"> <p className="border-2 rounded-xl w-10 h-10 flex justify-center items-center">✉️</p><p className="flex justify-center">메일</p> </button>
                <button className="flex flex-col items-center"> <p className="border-2 rounded-xl w-10 h-10 flex justify-center items-center">☕️</p><p>카페</p> </button>
                <button className="flex flex-col items-center"> <p className="border-2 rounded-xl w-10 h-10 flex justify-center items-center">📚</p><p>블로그</p> </button>
                <button className="flex flex-col items-center"> <p className="border-2 rounded-xl w-10 h-10 flex justify-center items-center">🏪</p><p>스토어</p> </button>
                <button className="flex flex-col items-center"> <p className="border-2 rounded-xl w-10 h-10 flex justify-center items-center">📰</p><p>뉴스</p> </button>
                <button className="flex flex-col items-center"> <p className="border-2 rounded-xl w-10 h-10 flex justify-center items-center">💹</p><p>증권</p> </button>
                <button className="flex flex-col items-center"> <p className="border-2 rounded-xl w-10 h-10 flex justify-center items-center">🏠</p><p>부동산</p> </button>
                <button className="flex flex-col items-center"> <p className="border-2 rounded-xl w-10 h-10 flex justify-center items-center">🗺️</p><p>지도</p> </button>
                <button className="flex flex-col items-center"> <p className="border-2 rounded-xl w-10 h-10 flex justify-center items-center">📇</p><p>웹툰</p> </button>
                <button className="flex flex-col items-center"> <p className="border-2 rounded-xl w-10 h-10 flex justify-center items-center">📺</p><p>치지직</p> </button>
                <button className="flex flex-col items-center"> <p className="border-2 rounded-xl w-10 h-10 flex justify-center items-center">‧‧‧</p><p>&nbsp;</p></button>
            </div>
        </div>
    )
}

export default Header;