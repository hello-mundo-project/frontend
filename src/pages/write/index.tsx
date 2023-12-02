import { InnerWrapper, Wrapper, SectionMargin, ButtonWrapper, SubmitButton, CancelButton } from "./style";
import { PostInfo } from "./PostInfo";
import { PostIntroduce } from "./PostIntroduce";
import { Header } from "@/components/header/Header";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useNavigate } from "react-router-dom";
import { useEditor } from "@/hooks/useEditor";

export const Write = () => {
  const { twilightTheme } = useDarkMode();
  const navigate = useNavigate();
  const { dispatch } = useEditor();

  const cancelPostEdit = () => {
    if (!confirm("정말로 돌아가시겠습니까?\n작성 중이던 내용이 사라집니다.")) return;
    else {
      dispatch({ type: "CLEAR_CONTEXT" });
      navigate("/");
    }
  };

  const submitCeatePost = () => {
    alert("게시글이 생성되었습니다");
    navigate("/");
  };

  return (
    <Wrapper>
      <Header />
      <InnerWrapper>
        <PostInfo />
        <SectionMargin />
        <PostIntroduce />
        <ButtonWrapper>
          <CancelButton $twilightTheme={twilightTheme} onClick={cancelPostEdit}>
            취소
          </CancelButton>
          <SubmitButton $twilightTheme={twilightTheme} disabled onClick={submitCeatePost}>
            글 등록
          </SubmitButton>
        </ButtonWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};
