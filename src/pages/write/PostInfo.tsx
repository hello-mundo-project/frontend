import {
  Section,
  PostContentWrapper,
  ContentIndexBackground,
  ContentIndex,
  ContentText,
  InputList,
  ListItem,
  InfoSelect,
  SelectOption
} from "./style";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useSkillDatas } from "@/hooks/useSkill";
import { useCategories } from "@/hooks/useCategory";
import { useCareers } from "@/hooks/useCareer";
import { Input } from "@/components/input/Input";
import { InputLabel } from "@/components/input/inputStyle";
import { DatePickerBar } from "@/components/DatePickerBar";
import { DropDown } from "@/components/dropDown/DropDown";
import { GroupDropDown } from "@/components/dropDown/GroupDropDown";
import { Skill } from "@/types/skill.d";
import { Career } from "@/types/career.d";
import { Category } from "@/types/category.d";
import { useEditor } from "@/hooks/useEditor";
import { Dayjs } from "dayjs";
import { GroupData, InputProps } from "@/types/postEditor.d";

export const PostInfo = () => {
  const { twilightTheme } = useDarkMode();
  const headcounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const durations = [0, 1, 2, 3, 4, 5, 6];
  const skills = useSkillDatas();
  const categories = useCategories();
  const careers = useCareers();

  const { editorData, dispatch } = useEditor();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    dispatch({ type: "INPUT_CHANGE", payload: { name, value } });
  };

  const handleDateChange = (date: Dayjs) => {
    dispatch({ type: "DATE_CHANGE", payload: { date } });
  };

  const handleDropDownChange = (data: InputProps) => {
    const { name, value } = data;
    dispatch({ type: "DROPDOWN_CHANGE", payload: { name, value } });
  };

  const handleGroupDropDownChange = (data: GroupData[], name: string) => {
    dispatch({ type: "GROUP_DROPDOWN_CHANGE", payload: { data, name } });
  };

  return (
    <Section>
      <PostContentWrapper $twilightTheme={twilightTheme}>
        <ContentIndexBackground>
          <ContentIndex $twilightTheme={twilightTheme}>1</ContentIndex>
        </ContentIndexBackground>
        <ContentText>프로젝트 기본 정보를 입력해주세요.</ContentText>
      </PostContentWrapper>
      <InputList>
        <ListItem>
          <InputLabel>모집 구분</InputLabel>
          <DropDown<Category>
            name="category"
            placeholder="스터디/프로젝트"
            options={!categories.isLoading || !categories.error ? categories.data : []}
            onChange={handleDropDownChange}
          />
        </ListItem>
        <ListItem>
          <InputLabel>모집 인원</InputLabel>
          <InfoSelect
            $twilightTheme={twilightTheme}
            name="headcount"
            value={editorData?.headcount}
            placeholder="인원 미정 ~ 10명 이상"
            onChange={handleInputChange}
            required
          >
            {headcounts.map((headcount) => {
              if (headcount != 10) {
                return (
                  <SelectOption key={headcount} $twilightTheme={twilightTheme} value={headcount}>
                    {headcount}명
                  </SelectOption>
                );
              } else {
                return (
                  <SelectOption key={headcount} $twilightTheme={twilightTheme} value={headcount}>
                    10명 이상
                  </SelectOption>
                );
              }
            })}
          </InfoSelect>
        </ListItem>
      </InputList>
      <InputList>
        <ListItem>
          <InputLabel>진행 기간</InputLabel>
          <InfoSelect
            $twilightTheme={twilightTheme}
            name="duration"
            value={editorData?.duration}
            placeholder="인원 미정 ~ 10명 이상"
            onChange={handleInputChange}
            required
          >
            {durations.map((duration) => {
              if (duration != 0) {
                return (
                  <SelectOption key={duration} $twilightTheme={twilightTheme} value={duration}>
                    {duration}개월
                  </SelectOption>
                );
              } else {
                return (
                  <SelectOption key={duration} $twilightTheme={twilightTheme} value={duration}>
                    상시 모집
                  </SelectOption>
                );
              }
            })}
            ;
          </InfoSelect>
        </ListItem>
        <ListItem>
          <InputLabel>모집 마감일</InputLabel>
          <DatePickerBar onChange={handleDateChange} />
        </ListItem>
      </InputList>
      <InputList>
        <ListItem>
          <InputLabel>진행 방식</InputLabel>
          <InfoSelect
            $twilightTheme={twilightTheme}
            name="progress_way"
            value={editorData?.progress_way}
            placeholder="온라인/오프라인/온오프라인"
            onChange={handleInputChange}
            required
          >
            <SelectOption $twilightTheme={twilightTheme} value={"online"}>
              온라인
            </SelectOption>
            <SelectOption $twilightTheme={twilightTheme} value={"offline"}>
              오프라인
            </SelectOption>
            <SelectOption $twilightTheme={twilightTheme} value={"onoffline"}>
              온오프라인
            </SelectOption>
          </InfoSelect>
        </ListItem>
        <ListItem>
          <InputLabel>연락 링크</InputLabel>
          <Input
            name="contact"
            placeholder="오픈톡 링크 주소 등..."
            value={editorData?.contact || null}
            onChange={handleInputChange}
          />
        </ListItem>
      </InputList>
      <InputList>
        <ListItem>
          <InputLabel>사용 기술</InputLabel>
          <GroupDropDown<Skill>
            name="skill"
            placeholder="프로젝트 사용 기술"
            options={!skills.isLoading || !skills.error ? skills.data : []}
            onChange={(skill) => handleGroupDropDownChange(skill, "skill")}
          />
        </ListItem>
        <ListItem>
          <InputLabel>모집 포지션</InputLabel>
          <GroupDropDown<Career>
            name="career"
            placeholder="디자이너, 기획자..."
            options={!careers.isLoading || !careers.error ? careers.data : []}
            onChange={(data) => handleGroupDropDownChange(data, "career")}
          />
        </ListItem>
      </InputList>
    </Section>
  );
};
