import react from "react";
import sample from "../../../resources/sample.jpeg";

const ShoppingAd = () => {
    return (
        <button className="flex w-full p-4 border-2 rounded-xl justify-envenly gap-6">
            <div className="flex flex-col justify-start items-start text-lg font-bold">
                <p>오늘</p>
                <p>이런 상품</p>
                <p>어때요?</p>
            </div>
            <div className="flex w-3/4 gap-2 text-sm font-medium">
                <button>
                    <img src={sample} alt="sample" className="" />
                    <p>1+1 bMW 틈새</p>
                    <p>쿠션 사이드커</p>
                </button>
                <button>
                    <img src={sample} alt="sample" className="" />
                    <p>1+1 bMW 틈새</p>
                    <p>쿠션 사이드커</p>
                </button>
                <button>
                    <img src={sample} alt="sample" className="" />
                    <p>1+1 bMW 틈새</p>
                    <p>쿠션 사이드커</p>
                </button>
            </div>
        </button>
    )
}

export default ShoppingAd;