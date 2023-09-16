import { useMutation } from "@tanstack/react-query";
import { CreateTodoDto } from "../../api";
import { api } from "../app/api.ts";

export const useCreateTodoMutation = () => {
    return useMutation({
        mutationKey: ["createTodo"],
        mutationFn: async (todo: CreateTodoDto) => {
            const res = await api.todoControllerCreate(todo);
            return res.data;
        },
    });
};
