import { useDarkMode } from "@/hooks/useDarkMode";
import {
  DescriptionChip,
  DescriptionChipWrapper,
  DescriptionContainer,
  DescriptionInnerWrapper,
  DescriptionTag,
  DescriptionTagWrapper,
  DescriptionText,
  DescriptionTextWrapper,
  DescriptionTitle,
  DescriptionWrapper
} from "./boardDetailStyles";
import { PostDescriptionTypeExtendExpectedDate, Skill } from "@/types/post.d";
import { Category } from "@/types/category";

export const Description = ({
  career_id = [
    { _id: "dwds23", name: "백엔드" },
    { _id: "asdasd23", name: "게임엔진" }
  ],
  skill_id = [
    { _id: "dwd21321s23", name: "Python" },
    { _id: "asdas22adsd23", name: "Unity" }
  ],
  duration = 3,
  expected_date = "2023-12-31",
  headcount = 2
}: PostDescriptionTypeExtendExpectedDate | any) => {
  const { twilightTheme } = useDarkMode();
  const formattedCareers = career_id.map((career: Category) => {
    return (
      <DescriptionChip key={career?._id} $twilightTheme={twilightTheme}>
        {career?.name}
      </DescriptionChip>
    );
  });
  const formattedSkills = skill_id.map((skill: Skill) => {
    return <DescriptionTag key={skill?._id}>{`#${skill?.name}`}</DescriptionTag>;
  });
  return (
    <DescriptionWrapper>
      <DescriptionInnerWrapper>
        <DescriptionContainer>
          <DescriptionTitle $twilightTheme={twilightTheme}>모집 직무</DescriptionTitle>
          <DescriptionChipWrapper>{formattedCareers}</DescriptionChipWrapper>
        </DescriptionContainer>
        <DescriptionContainer>
          <DescriptionTitle $twilightTheme={twilightTheme}>사용 기술</DescriptionTitle>
          <DescriptionTagWrapper>{formattedSkills}</DescriptionTagWrapper>
        </DescriptionContainer>
        <DescriptionContainer>
          <DescriptionTitle $twilightTheme={twilightTheme}>모집 인원</DescriptionTitle>
          <DescriptionTextWrapper>
            <DescriptionText>{headcount}명</DescriptionText>
          </DescriptionTextWrapper>
        </DescriptionContainer>
        <DescriptionContainer>
          <DescriptionTitle $twilightTheme={twilightTheme}>시작 예정</DescriptionTitle>
          <DescriptionTextWrapper>
            <DescriptionText>{expected_date}</DescriptionText>
          </DescriptionTextWrapper>
        </DescriptionContainer>
        <DescriptionContainer>
          <DescriptionTitle $twilightTheme={twilightTheme}>예상 기간</DescriptionTitle>
          <DescriptionTextWrapper>
            <DescriptionText>{duration}개월</DescriptionText>
          </DescriptionTextWrapper>
        </DescriptionContainer>
      </DescriptionInnerWrapper>
    </DescriptionWrapper>
  );
};
