import instance from "@/apis";

export async function getSkillCategories() {
  const response = await instance.get("/skillCategory");
  return response.data;
}
