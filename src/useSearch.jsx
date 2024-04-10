import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";

const useSearch = () => {
  const results = useQuery(["search", requestParams], fetchSearch);

  return results?.data?.pets ?? [];
};
export default useSearch;
