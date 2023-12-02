import { useMutation } from "@tanstack/react-query";
import { checkDuplicateEmail } from "@/apis/account";

export type Email = string;
export type DuplicateEmail = { email: string };

export function useDuplicateEmail() {
  return useMutation({
    mutationFn: ({ email }: DuplicateEmail) => checkDuplicateEmail(email),
    mutationKey: ["duplicateEmail"]
  });
}
