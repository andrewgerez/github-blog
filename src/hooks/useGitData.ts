import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axios";
import { GitData } from "../interfaces/gitData";

export const useGitData = () => {
  const fetchGitData = async () => {
    const response: GitData = await api.get('users/andrewgerez');
  
    return response.data;
  }
  
  const { data: gitUser } = useQuery({
    queryKey: ['gitUser'],
    queryFn: fetchGitData,
  });
  
  return gitUser;
}