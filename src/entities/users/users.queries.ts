import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type usersResponse = {
  id: number;
  username: string;
  role: string;
};

export function useGetUsers() {
  return useQuery({
    queryKey: ["user"],
    queryFn: () =>
      axios.get<usersResponse[]>("http://localhost:3000/api/users"),
  });
}
