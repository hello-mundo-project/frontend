/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useContext } from "react";
import { DarkModeContext } from "@/contexts/DarkModeContext";

import { ProgressWay, Category, Duration, Career, Skill, City, District, Dates, Times } from "../../types/component";
import { useNavigate } from "react-router-dom";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";

import {
  ProgressWayTag,
  CardContainer,
  CardHeader,
  CardTextWrapper,
  CardTitle,
  CardContent,
  CardFooter,
  CategoryTag,
  SkillTag,
  DeadlineTag,
  TagContainer,
  // CreatedTag,
  BookmarkIconContainer,
  DividerLine,
  //isDarkMode,
  CareerTag
} from "./cardStyles";

export interface CardProps {
  //id: number;
  progress_way: ProgressWay;
  category: Category;
  duration: Duration;
  title: string;
  career: Career;
  skill: Skill[];
  city: City | null | string;
  district: District | null | string;
  deadline: Dates | string;
  created?: (Dates & Times) | string;
  headcount: number;
  expected_date?: Dates | string;
  recruit_status: boolean;
  deleted?: Dates | null | string | undefined;
  contact: string;
  tags: string[];
  //timestamp: string;
  content: string;
  onRemoveBookmark?: () => Promise<void>;
}

export const Card: React.FC<CardProps | any> = ({
  //content,
  id,
  title,
  category,
  tags,
  progress_way,
  deadline,
  career,
  onRemoveBookmark,
  onClick
  //created
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const darkModeContext = useContext(DarkModeContext);

  if (darkModeContext === null) {
    throw new Error("DarkModeContext 요소를 불러오지 못했습니다");
  }

  // 여기는 클릭 이벤트 핸들러 부분임! 로그인이 됐다면, 북마크를 누르면 북마크 폴더에서 볼 수 있음!!
  const handleBookmarkIconClick = () => {
    setIsBookmarked(!isBookmarked);

    if (onRemoveBookmark) {
      onRemoveBookmark();
      // 이 부분도 북마크 파일에서 마저 작성해 줄 것.
    }
  };

  // //유저 아이디를 사용한다면?? 이건 고려해보고 적용
  // const handleBookmarkClick = () => {
  //   const userId = getCurrentUserId();
  // };
  const handleMovePostDetail = () => {
    if (onClick) onClick(id);
  };

  return (
    <CardContainer onClick={handleMovePostDetail}>
      <CardHeader>
        <CategoryTag category={category.name}>⚒️{category.name}</CategoryTag>
        <BookmarkIconContainer>
          {isBookmarked ? <IoBookmarkOutline size="28px" /> : <IoBookmark size="28px" />}
        </BookmarkIconContainer>
      </CardHeader>
      <CardTextWrapper>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          {/* <p>{content}</p> */}

          <TagContainer>
            {tags.map((tag, index) => (
              <SkillTag key={index}>{`#${tag}`}</SkillTag>
            ))}
          </TagContainer>

          <CareerTag>{`#${career.name}`}</CareerTag>

          {/* 오프라인일 경우, 오프라인 아이콘 다르게 주기  */}
          <ProgressWayTag>🧑‍💻 {progress_way}</ProgressWayTag>
        </CardContent>
      </CardTextWrapper>

      <CardFooter>
        <DividerLine />
        <DeadlineTag> ⚠️ 마감일 | 2023년 12월 7일</DeadlineTag>

        {/* <CreatedTag>생성일: 12시간 전{created.dates} {created.times}
        </CreatedTag> */}
      </CardFooter>
    </CardContainer>
  );
};
