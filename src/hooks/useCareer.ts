import { useQuery } from "@tanstack/react-query";
import { getCareers } from "@/apis/career";

type CareerProps = {
  _id: string;
  name: string;
};

export function useCareers() {
  return useQuery<CareerProps[]>({ queryKey: ["allCareers"], queryFn: getCareers });
}
