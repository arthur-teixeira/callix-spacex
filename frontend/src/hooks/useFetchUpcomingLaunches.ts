
import { useQuery } from "react-query";
import AxiosService from "../services/AxiosService";

export default () => {
  const fetchUpcomingLaunches = async () => {
      const service = new AxiosService();
      return service.get('upcoming');
  };

  const { isLoading, isError, data, error } = useQuery('upcomingLaunches', fetchUpcomingLaunches);

  return {
      isLoading,
      isError,
      data,
      error,
  }
};
