import React, { useState } from "react";
import * as S from "./logInStyles";
import { useDarkMode } from "@/hooks/useDarkMode";
import useLogin from "@/hooks/useLogin";

const LoginForm: React.FC = () => {
  const { twilightTheme } = useDarkMode();

  const { error, handleLogin } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.InputWrapper $twilightTheme={twilightTheme}>
        <label htmlFor="email">이메일</label>
        <S.Input
          $twilightTheme={twilightTheme}
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력해 주세요."
          required
        />
      </S.InputWrapper>
      <S.InputWrapper $twilightTheme={twilightTheme}>
        <label htmlFor="password">비밀번호</label>
        <S.Input
          $twilightTheme={twilightTheme}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해 주세요."
          required
        />
      </S.InputWrapper>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      <S.SubmitButton type="submit">로그인하기</S.SubmitButton>
    </S.Form>
  );
};

export default LoginForm;
