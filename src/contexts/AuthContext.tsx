import React, { createContext, useState, useEffect, useContext } from "react";
import { Children } from "@/types/children";
import instance from "@/apis";

// 인증 관련 상태 타입 정의
interface AuthState {
  isAuthenticated: boolean;
  user: object; // 유저 정보에 대한 타입
}

// 초기 상태
const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: {}
};

// Context 생성
export const AuthContext = createContext<{
  authState: AuthState;
  setAuthState: React.Dispatch<React.SetStateAction<AuthState>>;
}>({
  authState: initialAuthState,
  setAuthState: () => {}
});

// Provider 컴포넌트
export const AuthProvider = ({ children }: Children) => {
  const [authState, setAuthState] = useState<AuthState>(initialAuthState);

  //유저정보 요청하고 응답을 통해 상태를 저장
  useEffect(() => {
    // 예를 들어, 여기서 백엔드에서 로그인 상태를 체크하고 유저 정보를 가져오는 등의 로직 수행 가능
    const fetchUserData = async () => {
      try {
        const response = await instance.get("/user/myprofile");
        // console.log("유저정보 데이터", response.data);
        setAuthState({
          isAuthenticated: true,
          user: response.data
        });
        //error의 문제가 없는데 problems가 표시되어 무시주석을 작성함
        // eslint-disable-next-line
      } catch (error: any) {
        // console.error("유저정보 데이터 가져오기 오류", error);
        setAuthState({
          isAuthenticated: false,
          user: error
        });
      }
    };

    fetchUserData();
  }, []);

  return <AuthContext.Provider value={{ authState, setAuthState }}>{children}</AuthContext.Provider>;
};

// useContext를 사용한 커스텀 훅
export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }

  return context;
};
