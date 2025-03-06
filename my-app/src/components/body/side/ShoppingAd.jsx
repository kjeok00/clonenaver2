import React from "react";
import sample from "../../../resources/sample.jpeg";

const ShoppingAd = () => {
    return (
        <button className="flex w-full p-4 border-2 rounded-xl justify-evenly gap-6">
            <div className="flex flex-col justify-start items-start text-lg font-bold">
                <p>오늘</p>
                <p>이런 상품</p>
                <p>어때요?</p>
            </div>
            <div className="flex w-3/4 gap-2 text-sm font-medium">
                <button>
                    <img src={sample} alt="sample" className="rounded-lg" />
                    <p className="line-clamp-2">민트리 두피스케일러 두피각질케어</p>
                </button>
                <button>
                    <img src={sample} alt="sample" className="rounded-lg" />
                    <p className="line-clamp-2">듀크레이 텍시안 메드크림 100mls/</p>
                </button>
                <button>
                    <img src={sample} alt="sample" className="rounded-lg" />
                    <p className="line-clamp-2">루나 룽래스팅 컨실떡상 쿠션 150mg</p>
                </button>
            </div>
        </button>
    )
}

export default ShoppingAd;