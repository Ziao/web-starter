import { useQuery } from "react-query";
import { api } from "../app/axios.ts";

export const useCatFactQuery = () => {
    return useQuery({
        queryKey: "catFact",
        queryFn: async () => {
            const response = await api.get<CatFactResponse>("facts/random");
            const { text } = response.data;
            return text;
        },
    });
};
