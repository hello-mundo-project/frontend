import { useQueryClient } from "@tanstack/react-query";
import { getSkillCategories } from "@/apis/skillCategory";

type SkillCategoryProps = {
  _id: string;
  name: string;
};

export function useSkillCategories() {
  const queryClient = useQueryClient();
  return queryClient.prefetchQuery<SkillCategoryProps[]>({
    queryKey: ["allSkillCategories"],
    queryFn: getSkillCategories
  });
}
