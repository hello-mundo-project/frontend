import { useQuery } from "@tanstack/react-query";
import { getAllCategory } from "@/apis/category";

type CategoryProps = {
  _id: string;
  name: string;
};

export function useCategories() {
  return useQuery<CategoryProps[]>({ queryKey: ["allCategory"], queryFn: getAllCategory });
}
