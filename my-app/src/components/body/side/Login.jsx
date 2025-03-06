import react from "react";

const Login = () => {
    return (
        <div className="border-2 border-gray-200 rounded-xl px-4 w-full flex flex-col">
            <span className="py-4 text-sm font-medium">네이버를 더 안전하고 편리하게 이용하세요</span>
            <button className="bg-green-500 text-white  rounded-lg flex justify-center items-center space-x-2 p-2">
                <span className="text-xl font-extrabold">NAVER</span>
                <span className="text-sm font-extrabold">로그인</span>
            </button>
            <div className="py-4 text-xs space-x-4">
                <button>아이디 찾기</button>
                <button>비밀번호 찾기</button>
                <button>회원가입</button>
            </div>
        </div>
    )
}

export default Login;