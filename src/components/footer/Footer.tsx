import logoImage from "@/assets/Logo.png";
import { useDarkMode } from "@/hooks/useDarkMode";
import { FooterWrapper, FooterText, Logo } from "./footerStyles";
import { TwilightTheme } from "@/types/twilightTheme";

export const Footer: React.FC<TwilightTheme> = () => {
  const { twilightTheme } = useDarkMode();

  return (
    <FooterWrapper>
      <FooterText $twilightTheme={twilightTheme}>
        ⚠️ 해당 사이트는 학습용으로 만들어진 것이며, 학습용도 외에 상업용으로 쓰이지 않습니다.⚠️
      </FooterText>
      <FooterText $twilightTheme={twilightTheme}>주소 : 서울특별시 강남구 선릉로 433, 신관 6층,</FooterText>
      <FooterText $twilightTheme={twilightTheme}>
        대표자 김재원 | 통신판매업 신고번호 제2022-서울강남-04515호 | 직업정보제공사업 신고번호: J1200020220004 |
      </FooterText>
      <FooterText $twilightTheme={twilightTheme}>
        사업자등록번호 581-88-00303| 전화 070-4633-2017 | 이메일 contact@elice.io
      </FooterText>
      <FooterText $twilightTheme={twilightTheme}>Copyright ⓒ 2016 - 2023 Elice Inc. All Rights Reserved.</FooterText>
      <Logo src={logoImage} />
    </FooterWrapper>
  );
};
