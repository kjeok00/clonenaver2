import React from 'react';
import sample from '../../../resources/sample.jpeg';

const Widget = () => {
    return (
        <div className="flex flex-col border-2 rounded-xl p-4 w-full space-y-4">
            <span className="flex justify-start text-lg font-bold">위젯 보드</span>
            <button>
                <img
                    src={sample} alt="widget" className="rounded-xl"
                />
            </button>
            <div className="flex justify-between items-center space-x-2">
                <button>
                    <img 
                        src={sample} alt="widget" className="rounded-xl"
                    />
                </button>
                <button>
                    <img 
                        src={sample} alt="widget" className="rounded-xl"
                    />
                </button>
            </div>
            <button className="flex justify-between items-center text-base font-medium">
                <span>N 모바일 네이버 메인 열기</span>
                <span>→</span>
            </button>
        </div>
    )
}

export default Widget;