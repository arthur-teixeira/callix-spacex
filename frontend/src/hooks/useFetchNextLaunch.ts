import { useQuery } from "react-query";
import AxiosService from "../services/AxiosService";
import { Launch } from "../types/Launch";

export default () => {
  const fetchNextLaunch = async () => {
      const service = new AxiosService();
      return service.get<Launch>('next');
  };

  const { isLoading, isError, data, error } = useQuery('nextLaunch', fetchNextLaunch);

  return {
      isLoading,
      isError,
      data,
      error,
  }
};
