import { useQuery } from "react-query";
import AxiosService from "../services/AxiosService";

export default () => {
  const fetchPastLaunches = async () => {
      const service = new AxiosService();
      return service.get('past');
  };

  const { isLoading, isError, data, error } = useQuery('pastLaunches', fetchPastLaunches);

  return {
      isLoading,
      isError,
      data,
      error,
  }
};
