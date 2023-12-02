import instance from "@/apis";

export async function getAllCategory() {
  const response = await instance.get("/category");
  return response.data;
}
