import { useState } from "react";
import loginApi from "@/apis/loginAPI";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await loginApi(email, password);
      if (response.status === 200) {
        console.log("로그인 성공!");
        navigate("/");
        window.location.reload();
      }
      //error의 문제가 없는데 problems가 표시되어 무시주석을 작성함
      // eslint-disable-next-line
    } catch (error: any) {
      console.error(error);
      if (error.response.data.status === 401) {
        setError("이메일 또는 비밀번호를 잘못 입력했습니다. 입력한 내용을 다시 확인해주세요.");
      }
    }
  };

  return { error, handleLogin };
};

export default useLogin;
