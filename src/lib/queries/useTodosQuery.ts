import { useQuery } from "@tanstack/react-query";
import { api } from "../app/api.ts";

export const useTodosQuery = () => {
    return useQuery({
        queryKey: ["todos"],
        queryFn: async () => {
            const res = await api.todoControllerList();
            return res.data;
        },
    });
};
