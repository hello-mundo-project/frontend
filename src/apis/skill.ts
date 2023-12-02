import instance from "@/apis";

export async function getSkills() {
  const response = await instance.get("/skill");
  return response.data;
}

export async function getSkillCategoryOfSkills(skillCategory: string) {
  const response = await instance.get(`/skill/${skillCategory}`);
  return response.data;
}
