import React from "react";

const Footer = () => {
    return (
        <div className="w-full flex flex-col bg-gray-100 text-xs">
            <div className="flex justify-center items-center py-4 border-b">
                &nbsp;
            </div>
            <div className="flex justify-between items-center py-4 font-bold border-b">
                <button>공지사항</button>
                <button>서비스 전체보기</button>
            </div>
            <div className="flex justify-between items-center py-4">
                <div className="flex flex-col justify-start  space-y-2">
                    <div className="flex space-x-4">
                        <button>프로젝트 꽃</button>
                        <button>네이버 비즈니스</button>
                        <button>네이버 광고</button>
                        <button>스토어 개설</button>
                        <button>지역업체 등록</button>
                        <button>액스퍼트 등록</button>
                    </div>
                    <div className="space-x-4">
                        <button>네이버 개발자 센터</button>
                        <button>오픈 API</button>
                        <button>오픈소스</button>
                        <button>네이버 D2</button>
                        <button>네이버 랩스</button>
                        <button>네이버 D2SF</button>
                    </div>
                </div>
                <div className="space-x-2">
                    <span>웨일 브라우저</span>
                    <span>기업 사이트</span>
                </div>
            </div>
            <div className="flex justify-center items-center py-4 space-x-4">
                <button>회사소개</button>
                <button>인재채용</button>
                <button>제휴제안</button>
                <button>이용약관</button>
                <button>개인정보처리방침</button>
                <button>청소년보호정책</button>
                <button>네이버 정책</button>
                <button>고객센터</button>
                <button className="bold">@Naver Corp.</button>
            </div>
        </div>
    )
}

export default Footer;