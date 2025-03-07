import React from 'react';
import sample from '../../../resources/sample.jpeg';

const BottomMain = () => {
    const todayWebtoon = [
        { id: 1, title: "오늘의 웹툰", author: "작가", img: sample },
        { id: 2, title: "오늘의 웹툰", author: "작가", img: sample },
        { id: 3, title: "오늘의 웹툰", author: "작가", img: sample },
        { id: 4, title: "오늘의 웹툰", author: "작가", img: sample },
        { id: 5, title: "오늘의 웹툰", author: "작가", img: sample },
        { id: 6, title: "오늘의 웹툰", author: "작가", img: sample },
        { id: 7, title: "오늘의 웹툰", author: "작가", img: sample },
        { id: 8, title: "오늘의 웹툰", author: "작가", img: sample },
        { id: 9, title: "오늘의 웹툰", author: "작가", img: sample },
        { id: 10, title: "오늘의 웹툰", author: "작가", img: sample },
    ];
    const todayNovel = [
        { id: 1, title: "작품", author: "작가", img: sample },
        { id: 2, title: "작품", author: "작가", img: sample },
        { id: 3, title: "작품", author: "작가", img: sample },
        { id: 4, title: "작품", author: "작가", img: sample },
        { id: 5, title: "작품", author: "작가", img: sample },
    ];

    return (
        <div className="flex flex-col space-y-4 p-4 w-full border-2 rounded-xl">
            {/* 카테고리 리스트 */}
            <div className="flex justify-start items-center space-x-4 text-base text-gray-400 font-semibold">
                <button>추천/구독</button>
                <button>자동차</button>
                <button className="text-black font-bold">웹툰</button>
                <button>패션뷰티</button>
                <button>푸드</button>
                <button>리빙</button>
                <button>책방</button>
                <button>지식</button>
                <button>건강</button>
                <button>게임</button>
            </div>

            {/* 웹툰 구분 */}
            <div className="flex justify-start items-center bg-gray-100 rounded-md p-2 gap-2 text-sm font-medium">
                <button>웹툰홈</button>
                <button>요일별웹툰</button>
                <button>베스트도전</button>
                <button>웹소설홈</button>
                <button>시리즈에디션</button>
                <button>베스트리그</button>
                <button>시리즈홈</button>
                <button>웹소설</button>
                <button>만화</button>
            </div>

            {/* 웹툰 리스트 */}
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-4 border-b-2 py-2">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-bold">금요웹툰</span>
                        <button className="text-xs text-gray-500">금요웹툰 전체보기</button>
                    </div>

                    {/* 오늘 웹툰 리스트 (5x2 Grid) */}
                    <div className="grid grid-cols-5 gap-4 w-full">
                        {todayWebtoon.map((webtoon) => (
                            <button
                                key={webtoon.id}
                                className="flex flex-col items-center text-center appearance-none focus:outline-none"
                            >
                                <img src={webtoon.img} alt={webtoon.title} className="object-cover rounded-md shadow-lg" />
                                <span className="text-sm font-bold mt-2">{webtoon.title}</span>
                                <span className="text-xs text-gray-500">{webtoon.author}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col space-y-4 border-b-2 py-2">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-bold">이번주 가장 많이 본 웹툰</span>
                    </div>

                    {/* 이번주 가장 많이 본 웹툰 (5x2 Grid) */}
                    <div className="grid grid-cols-5 gap-4 w-full">
                        {todayNovel.map((webtoon) => (
                            <button
                                key={webtoon.id}
                                className="flex flex-col items-center text-center appearance-none focus:outline-none"
                            >
                                <img src={webtoon.img} alt={webtoon.title} className="object-cover rounded-md shadow-lg" />
                                <span className="text-sm font-bold mt-2">{webtoon.title}</span>
                                <span className="text-xs text-gray-500">{webtoon.author}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col space-y-4 border-b-2 py-2">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-bold">시리즈 에디션</span>
                    </div>

                    {/* 시리즈 에디션 (5x2 Grid) */}
                    <div className="grid grid-cols-5 gap-4 w-full">
                        {todayNovel.map((webtoon) => (
                            <button
                                key={webtoon.id}
                                className="flex flex-col items-center text-center appearance-none focus:outline-none"
                            >
                                <img src={webtoon.img} alt={webtoon.title} className="object-cover rounded-md shadow-lg" />
                                <span className="text-sm font-bold mt-2">{webtoon.title}</span>
                                <span className="text-xs text-gray-500">{webtoon.author}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col space-y-4 border-b-2 py-2">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-bold">이번주 가장 많이 본 웹소설</span>
                    </div>

                    {/* 이번주 가장 많이 본 웹소설 (5x2 Grid) */}
                    <div className="grid grid-cols-5 gap-4 w-full">
                        {todayNovel.map((webtoon) => (
                            <button
                                key={webtoon.id}
                                className="flex flex-col items-center text-center appearance-none focus:outline-none"
                            >
                                <img src={webtoon.img} alt={webtoon.title} className="object-cover rounded-md shadow-lg" />
                                <span className="text-sm font-bold mt-2">{webtoon.title}</span>
                                <span className="text-xs text-gray-500">{webtoon.author}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <button>펼쳐보기 +</button>
        </div>
    );
};

export default BottomMain;