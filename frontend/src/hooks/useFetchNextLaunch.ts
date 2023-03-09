import { useQuery } from "react-query";
import AxiosService from "../services/AxiosService";

export default () => {
  const fetchNextLaunch = async () => {
      const service = new AxiosService();
      return service.get('next');
  };

  const { isLoading, isError, data, error } = useQuery('nextLaunch', fetchNextLaunch);

  return {
      isLoading,
      isError,
      data,
      error,
  }
};
