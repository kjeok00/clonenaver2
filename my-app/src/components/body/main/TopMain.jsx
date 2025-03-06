import React from "react";
import sports from "../../../resources/sports.png";

const TopMain = () => {
    return (
        <div className="flex flex-cold flex-col space-y-4 p-4 w-full border-2 rounded-xl">
            {/*카테고리*/}
            <div className="flex justify-start space-x-4 text-gray-400 font-semibold">
                <button>뉴스스텐드</button>
                <button>엔터</button>
                <button className="text-black font-bold">스포츠</button>
                <button>경제</button>
                <button>쇼핑투데이</button>
            </div>

            {/*베너*/}
            <div className="flex justify-between text-black text-sm font-normal bg-red-100 rounded-md p-4">
                <div className="space-x-4">
                    <button>야구</button>
                    <button>헤외축구</button>
                    <button>축구</button>
                    <button>농구</button>
                    <button>배구</button>
                    <button>N골프</button>
                    <button>일반</button>
                    <button>e스포츠</button>
                </div>
                <button className="font-bold">스포츠홈</button>
            </div>

            <div className="flex w-full justify-between space-x-4">
                {/*이미지뉴스*/}
                <div className="flex flex-col space-y-4 w-2/5">
                    <div className="flex justify-evenly  space-x-2">
                        <img
                            src={sports} alt="sports" className="rounded-lg"
                        />
                        <div className="text-xs flex flex-col space-y-2 items-start justify-center">
                            <button className="line-clamp-2">뮌헨 찾는 FW, 손흥민 딱인데 이적료가 큰 암초네!…"30대 선수를 돈 주고 사라고?</button>
                            <div className="flex justify-between w-full">
                                <span className="text-gray-500">액스포츠뉴스 43분 전</span>
                                <button>📘</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-evenly space-x-2">
                        <img
                            src={sports} alt="sports" className="rounded-lg"
                        />
                        <div className="text-xs flex flex-col space-y-2 items-start justify-center">
                            <button className="line-clamp-2">"김혜성, 타석에서 좀 편해졌다"는 로버츠, 마이너행 구상 접었나? "타격코치들과는 잘 지내"</button>
                            <div className="flex justify-between w-full">
                                <span className="text-gray-500">스포츠조선 26분 전</span>
                                <button>📘</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*기사 리스트*/}
                <div className="flex flex-col space-y-2 w-3/5 justify-center">
                    <div className="flex justify-between text-xs w-full">
                        <button className="truncate text-left flex-1 min-w-0">
                            [오피셜]화성FC, '잉글랜드 러브콜' 유망 DF 함선우 '임대 영입'
                        </button>
                        <span className="whitespace-nowrap mx-4">스포츠조선</span>
                        <button>📘</button>
                    </div>

                    <div className="flex justify-between text-xs w-full">
                        <button className="truncate text-left flex-1 min-w-0">
                            봤냐? 김민재 1점! "실수 많고 위기"→완전 헛소리 스스로 입증…콤파니 감독, 발목 다쳐도 뺄 수가 없었다
                        </button>
                        <span className="whitespace-nowrap mx-4">스포츠조선</span>
                        <button>📘</button>
                    </div>

                    <div className="flex justify-between text-xs w-full">
                        <button className="truncate text-left flex-1 min-w-0">
                            더블 보기에도 3언더…반전 기회 잡은 윤이나
                        </button>
                        <span className="whitespace-nowrap mx-4">스포츠조선</span>
                        <button>📘</button>
                    </div>

                    <div className="flex justify-between text-xs w-full">
                        <button className="truncate text-left flex-1 min-w-0">
                            한국 축구 최강 향한 1∼5부 팀의 도전…코리아컵 8일 개막
                        </button>
                        <span className="whitespace-nowrap mx-4">스포츠조선</span>
                        <button>📘</button>
                    </div>

                    <div className="flex justify-between text-xs w-full">
                        <button className="truncate text-left flex-1 min-w-0">
                            1,450,000,000,000원! 어마어마하네…울산HD 이거 먹으러 갑니다→클럽월드컵 우승 상금 '초대박'
                        </button>
                        <span className="whitespace-nowrap mx-4">스포츠조선</span>
                        <button>📘</button>
                    </div>

                    <div className="flex justify-between text-xs w-full">
                        <button className="truncate text-left flex-1 min-w-0">
                            유망주 랭킹 1위인데 김혜성에 당했다…1할대 타율에도 쓸모있는 선수인 이유
                        </button>
                        <span className="whitespace-nowrap mx-4">스포츠조선</span>
                        <button>📘</button>
                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center border-t-2 pt-4 text-sm font-semibold gap-2">
                <button className="flex justify-center items-center rounded-full w-8 h-8 border-2">←</button>
                <span className="text-blue-600">스포츠 소식</span>
                <span>더보기</span>
                <div>
                    <span>1</span>
                    <span className="text-gray-500">/3</span>
                </div>
                <button className="flex justify-center items-center rounded-full w-8 h-8 border-2">→</button>
            </div>
        </div>
    )
}

export default TopMain;