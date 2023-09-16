import { useMutation } from "@tanstack/react-query";
import { CreateTodoDto } from "../../api";
import { api } from "../app/api.ts";
import { queryClient } from "../app/queryClient.ts";

export const useAddTodoMutation = () => {
    return useMutation({
        mutationKey: ["createTodo"],
        mutationFn: async (todo: CreateTodoDto) => {
            const res = await api.todoControllerCreate(todo);
            return res.data;
        },
        onSuccess: async (data) => {
            await queryClient.invalidateQueries(["todos"]);
            console.log("onSuccess", data);
        },
    });
};
