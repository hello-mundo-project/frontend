import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LogInForm from "./LogInForm";
import * as S from "./logInStyles";
import logo from "@/assets/Logo.png";
import { useDarkMode } from "@/hooks/useDarkMode";

export const Login: React.FC = () => {
  const { twilightTheme } = useDarkMode();
  const navigate = useNavigate();

  return (
    <S.LoginPageContainer>
      <div>
        <S.LogoImage src={logo} alt="Logo" onClick={() => navigate("/")} />
      </div>
      <S.Title>로그인</S.Title>
      <LogInForm />
      {/* <S.LinksContainer $twilightTheme={twilightTheme}>
        <Link to="/search-id">아이디 찾기</Link>
        <span>/</span>
        <Link to="/search-pw">비밀번호 찾기</Link>
      </S.LinksContainer> */}
      <S.SignUpContainer $twilightTheme={twilightTheme}>
        <span>계정이 없으신가요?</span>
        <Link to="/signup">회원가입</Link>
      </S.SignUpContainer>
    </S.LoginPageContainer>
  );
};
