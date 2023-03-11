import { useQuery } from "react-query";
import AxiosService from "../services/AxiosService";
import { Launch } from "../types/Launch";

export default () => {
  const fetchUpcomingLaunches = async () => {
      const service = new AxiosService();
      return service.get<Launch[]>('upcoming');
  };

  const { isLoading, isError, data, error } = useQuery('upcomingLaunches', fetchUpcomingLaunches);

  return {
      isLoading,
      isError,
      data,
      error,
  }
};
