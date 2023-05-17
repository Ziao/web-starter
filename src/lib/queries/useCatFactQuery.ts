import axios from "axios";
import { useQuery } from "react-query";

export const useCatFactQuery = () => {
    return useQuery({
        queryKey: "catFact",
        queryFn: async () => {
            const response = await axios.get<CatFactResponse>("https://cat-fact.herokuapp.com/facts/random");
            const { text } = response.data;
            return text;
        },
    });
};
