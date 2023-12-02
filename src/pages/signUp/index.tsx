import React from "react";
import { Container, Logo, Title } from "./signUpStyles";
import SignUpForm from "./SignUpForm";
import logo from "@/assets/Logo.png";
import { useNavigate } from "react-router-dom";

export const Signup: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <Logo src={logo} alt="logo" onClick={() => navigate("/")} />
      </div>
      <Title>회원가입</Title>
      <SignUpForm />
    </Container>
  );
};

export default Signup;
