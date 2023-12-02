import styled from "styled-components";

//signupForm 스타일
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 30px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const Input = styled.input<{ $twilightTheme?: TwilightPalette; $skill?: boolean }>`
  padding: 8px;
  border-radius: 6px;
  background-color: ${(props) => props.$twilightTheme?.background_gray};
  border: none;
  width: 100%;
  color: ${(props) => props.$twilightTheme?.text_primary};
  font-size: ${(props) => props.theme.fontSizes.sm};
  flex: ${(props) => (props.$skill ? "3" : "1")};

  &:focus {
    outline-color: ${(props) => props.$twilightTheme?.outline_gray};
  }
`;

export const Select = styled.select<{ $twilightTheme?: TwilightPalette }>`
  padding: 8px;
  border-radius: 6px;
  background-color: ${(props) => props.$twilightTheme?.background_gray};
  border: none;
  width: 100%;
  color: ${(props) => props.$twilightTheme?.text_primary};
  font-size: ${(props) => props.theme.fontSizes.sm};

  &:focus {
    outline-color: ${(props) => props.$twilightTheme?.outline_gray};
  }

  & option {
    background-color: ${(props) => props.$twilightTheme?.background_primary};
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  width: 100%;
  border-radius: 6px;
  padding: 10px;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  flex: 1;

  &:hover {
    background-color: #00c37c;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Modal = styled.div<{ $twilightTheme?: TwilightPalette }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background-color: ${(props) => props.$twilightTheme?.background_primary};
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.5);
  padding: 50px;
  border: 5px solid #04d98b;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #000;
  display: inline;
`;

export const InputSkillWrapper = styled.div`
  display: flex;
`;

export const Span = styled.span<{ $red?: boolean }>`
  font-size: 16px;
  color: ${(props) => (props.$red ? "#EF4444" : "inherit")};
`;

export const SkillAddButton = styled.button`
  display: inline-block;
  line-height: 16px;
`;
//index 스타일
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 400px;
  height: 100vh;
  background-color: inherit;
`;

export const Logo = styled.img`
  width: 200px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;
