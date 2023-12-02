import instance from "@/apis";
import { Email } from "@/hooks/useAccount";

export async function checkDuplicateEmail(email: Email) {
  const response = await instance.post("/account/email-duplicate", { email });
  return response;
}
