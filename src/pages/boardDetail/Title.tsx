import { useDarkMode } from "@/hooks/useDarkMode";
import theme from "@/styles/theme";
import { CiShare2 } from "react-icons/ci";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import {
  TitleWrapper,
  TitleTop,
  TitleStyle,
  IconGroup,
  TitleBottom,
  UserInfoAndWriteAt,
  ViewWrapper,
  NickName,
  PostCreatedAt
} from "./boardDetailStyles";
import { PostTitleType } from "@/types/post.d";

export const Title = ({
  title = "K해커톤11 메타버스플랫폼 참여 팀원 두 분 모집 :)",
  nickname = "userNickname",
  createdAt = "2023-11-14 12:00:12",
  viewcount = 100
}: PostTitleType) => {
  const { twilightTheme } = useDarkMode();
  const bookmarked = true;
  return (
    <TitleWrapper>
      <TitleTop>
        <TitleStyle>{title}</TitleStyle>
        <IconGroup>
          <CiShare2 size="28px" />
          {bookmarked ? <IoBookmarkOutline size="28px" /> : <IoBookmark size="28px" color={theme.colors.primary} />}
        </IconGroup>
      </TitleTop>
      <TitleBottom>
        <UserInfoAndWriteAt>
          <NickName>{nickname}</NickName>
          <PostCreatedAt $twilightTheme={twilightTheme}>{createdAt}</PostCreatedAt>
        </UserInfoAndWriteAt>
        <ViewWrapper $twilightTheme={twilightTheme}>조회 {viewcount}</ViewWrapper>
      </TitleBottom>
    </TitleWrapper>
  );
};
