import React from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { useDarkMode } from "@/hooks/useDarkMode";
import {
  Section,
  PostContentWrapper,
  ContentIndexBackground,
  ContentIndex,
  ContentText,
  ContentEditorWrapper,
  ContentEditorContainer
} from "./style";
import { InputLabel } from "@/components/input/inputStyle";
import { Input } from "@/components/input/Input";
import { useEditor } from "@/hooks/useEditor";
import theme from "@/styles/theme";

export const PostIntroduce = () => {
  const { twilightTheme } = useDarkMode();
  const { editorData, dispatch } = useEditor();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch({ type: "INPUT_CHANGE", payload: { name, value } });
  };

  const handleContentChange = (event: ContentEditableEvent) => {
    const updateContent = event.target.value;
    dispatch({ type: "INPUT_CHANGE", payload: { name: "content", value: updateContent } });
  };

  const contentEditable = React.useRef<HTMLElement | null>(null);

  return (
    <Section>
      <PostContentWrapper $twilightTheme={twilightTheme}>
        <ContentIndexBackground>
          <ContentIndex $twilightTheme={twilightTheme}>2</ContentIndex>
        </ContentIndexBackground>
        <ContentText>프로젝트에 대해 소개해주세요.</ContentText>
      </PostContentWrapper>
      <Section>
        <InputLabel>제목</InputLabel>
        <Input
          name="title"
          placeholder="글 제목을 입력해주세요."
          value={editorData?.title || null}
          onChange={handleChange}
        />
        <ContentEditorWrapper>
          <ContentEditorContainer $twilightTheme={twilightTheme}>
            <ContentEditable
              innerRef={contentEditable}
              html={editorData?.content || ""}
              disabled={false}
              onChange={handleContentChange}
              tagName="article"
              style={{
                padding: "1rem",
                minHeight: "480px",
                fontSize: theme.fontSizes.xs,
                lineHeight: 1.3
              }}
            />
          </ContentEditorContainer>
        </ContentEditorWrapper>
      </Section>
    </Section>
  );
};
