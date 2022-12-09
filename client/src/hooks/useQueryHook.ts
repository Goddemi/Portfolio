import { useQuery } from "@tanstack/react-query";

export const useQueryHook = (key: string, fn: any) => {
  return useQuery({ queryKey: [key], queryFn: () => fn });
};
