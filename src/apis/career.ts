import instance from "@/apis";

export async function getCareers() {
  const response = await instance.get("/career");
  return response.data;
}
