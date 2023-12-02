import { useQuery, useQueries } from "@tanstack/react-query";
import { getSkills, getSkillCategoryOfSkills } from "@/apis/skill";
import { SkillCategory } from "@/types/skillCategory.d";

type SkillProps = {
  _id: string;
  name: string;
  skillCategory_id: string;
};

export function useSkillDatas() {
  return useQuery<SkillProps[]>({ queryKey: ["allSkills"], queryFn: getSkills });
}

export function useSkillCategoryOfSkills() {
  const skillCategories: SkillCategory[] = [
    "language",
    "frontend",
    "backend",
    "designer",
    "crossPlatform",
    "gameEngine",
    "other",
    "custom"
  ];
  const skillCategoryOfSkillQueries = skillCategories.map((skillCategory) => ({
    queryKey: ["skillCategoryOfSKills", skillCategory],
    queryFn: () => getSkillCategoryOfSkills(skillCategory)
  }));

  return useQueries<SkillProps[]>({
    queries: skillCategoryOfSkillQueries
  });
}
