import {
  Wrapper,
  Logo,
  TextWrapper,
  Text404,
  PageNotFoundText1,
  PageNotFoundText2,
  Button
} from "./pageNotFoundStyles";
import logoImage from "@/assets/Logo.png";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <Wrapper>
      <Logo src={logoImage} />
      <TextWrapper>
        <Text404>404</Text404>
        <PageNotFoundText1>요청한 페이지를 찾을 수 없습니다.</PageNotFoundText1>
        <PageNotFoundText2>페이지가 존재하지 않거나 링크가 잘못 설정 되었습니다</PageNotFoundText2>
        <Button as={Link} to="/">
          홈으로 가기
        </Button>
      </TextWrapper>
    </Wrapper>
  );
};
