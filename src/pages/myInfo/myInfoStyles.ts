import styled from "styled-components";
import { StylesConfig } from "react-select";

export const LogoImage = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 20px;
  padding-top: 10px;
`;

export const InfoContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  padding-bottom: 100px;
  margin: 0 auto;
`;

export const InfoTitle = styled.div`
  color: #000;
  text-align: center;
  font-size: 26px;
  font-weight: 500;
  line-height: 150%;
  margin: 30px 0 40px 0;

  @media screen and (max-width: 400px) {
    display: none;
  }
`;

export const InfoForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
`;

export const InfoInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`;

export const StackInputGroup = styled(InfoInputGroup)`
  align-items: flex-start;
  width: 100%;
`;

export const InfoLabel = styled.label`
  color: #333;
  font-size: 14px;
  font-weight: 700;
`;

export const InfoInput = styled.input`
  width: 100%;
  font-size: 16px;
  height: 48px;
  padding: 15px 13px;
  border-radius: 5px;
  border: 1px solid #e1e2e3;
  background-color: #edf2f7;
`;

export const InfoSelect = styled.select`
  background-color: #edf2f7;
  width: 100%;
  padding: 15px 13px;
  font-size: 14px;
  border: 1px solid #e1e2e3;
  border-radius: 4px;
`;

export const InfoTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 15px 13px;
  border-radius: 5px;
  border: 1px solid #e1e2e3;
  resize: none;
  background-color: #edf2f7;
`;

export const InfoButton = styled.button`
  height: 48px;
  width: 100%;
  border-radius: 5px;
  background: #04d98b;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  border: none;
`;

// export const InfoButton = styled.button`
//   height: 48px;
//   width: 100%;
//   border-radius: 30px;
//   background: #6ed1c0;
//   color: #fff;
//   font-size: 14px;
//   font-weight: 700;
//   cursor: pointer;
// `;

export const InfoButtonSmall = styled(InfoButton)`
  padding: 0 20px;
  width: 75px;
`;

export const TagContainer = styled.div`
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const InfoTag = styled.span`
  border: 1px solid #ccc;
  display: inline-block;
  margin: 0.25rem;
  padding: 0.25rem 0.5rem;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background-color: #bbb;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 5px;

  & > div {
    flex: 1;
  }
`;

export const SelectContainer = styled.div`
  width: 100%;
`;

export const SelectStyles: StylesConfig<unknown, true> = {
  control: (base: any) => ({
    ...base,
    backgroundColor: "#edf2f7",
    borderColor: "#e1e2e3",
    fontSize: "16px",
    height: "48px",
    minHeight: "48px",
    borderRadius: "5px",
    boxShadow: "none",
    "&:hover": {
      borderColor: "lightgray"
    }
  }),
  option: (styles, { isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected ? "#6ed1c0" : isFocused ? "lightgray" : undefined,
      color: "#333",
      cursor: "pointer"
    };
  }
};

// 새 기술 부분 디자인에 - 넣기
// export const Input = styled.input<{ $twilightTheme?: TwilightPalette; $skill?: boolean }>`
//   padding: 8px;
//   border-radius: 6px;
//   background-color: ${(props) => props.$twilightTheme?.background_gray};
//   border: none;
//   width: 100%;
//   color: ${(props) => props.$twilightTheme?.text_primary};
//   font-size: ${(props) => props.theme.fontSizes.sm};
//   flex: ${(props) => (props.$skill ? "3" : "1")};

//   &:focus {
//     outline-color: ${(props) => props.$twilightTheme?.outline_gray};
//   }
// `;

// export const Select = styled.select<{ $twilightTheme?: TwilightPalette }>`
//   padding: 8px;
//   border-radius: 6px;
//   background-color: ${(props) => props.$twilightTheme?.background_gray};
//   border: none;
//   width: 100%;
//   color: ${(props) => props.$twilightTheme?.text_primary};
//   font-size: ${(props) => props.theme.fontSizes.sm};

//   &:focus {
//     outline-color: ${(props) => props.$twilightTheme?.outline_gray};
//   }
// `;

export const NewSkillContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

export const NewSkillInput = styled.input`
  flex: 3;
  font-size: 16px;
  height: 48px;
  padding: 15px 13px;
  border-radius: 6px;
  border: 1px solid #e1e2e3;
  background-color: #edf2f7;
`;

// export const AddSkillButton = styled.button`
//   height: 48px;
//   width: 75px;
//   border-radius: 5px;
//   background: #04d98b;
//   color: #fff;
//   font-size: 14px;
//   font-weight: 700;
//   cursor: pointer;
//   border: none;
// `;

export const AddSkillButton = styled.button`
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
