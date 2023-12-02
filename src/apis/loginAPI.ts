import instance from "@/apis";

const loginApi = async (email: string, password: string) => {
  const response = await instance.post("/account/login", {
    email,
    password
  });
  return response;
};

export default loginApi;
