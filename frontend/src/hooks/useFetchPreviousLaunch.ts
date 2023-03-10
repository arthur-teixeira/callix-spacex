import { useQuery } from "react-query";
import AxiosService from "../services/AxiosService";

export default () => {
  const fetchPreviousLaunch = async () => {
      const service = new AxiosService();
      return service.get('previous');
  };

  const { isLoading, isError, data, error } = useQuery('previousLaunch', fetchPreviousLaunch);

  return {
      isLoading,
      isError,
      data,
      error,
  }
}
