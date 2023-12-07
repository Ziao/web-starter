import {
    Box,
    Button,
    Divider,
    FormControl,
    FormLabel,
    HStack,
    Input,
    ListItem,
    Stack,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
import { Field, useFormik } from "formik";
import { FC } from "react";
import { useTitle } from "react-use";
import { useAddTodoMutation } from "../../lib/mutations/addTodoMutation.ts";
import { useTodosQuery } from "../../lib/queries/useTodosQuery.ts";
import { ContainerLayout } from "../layouts/ContainerLayout.tsx";

interface HomeProps {}
export const Home: FC<HomeProps> = () => {
    const { data: todos, isLoading } = useTodosQuery();
    useTitle("Todo");

    const { mutate: addTodo } = useAddTodoMutation();

    const form = useFormik({
        initialValues: { task: "" },
        onSubmit: (values) => {
            addTodo({ task: values.task });
            form.resetForm();
        },
    });

    return (
        <ContainerLayout>
            <Stack as={"main"} bg={"white"} shadow={"sm"} p={8} borderRadius={"md"} gap={8}>
                <Text fontSize={"lg"} fontWeight={"semibold"}>
                    Todo
                </Text>

                <Divider />

                {isLoading && <p>Loading...</p>}
                {!isLoading && todos && (
                    <UnorderedList>
                        {todos.map((todo) => (
                            <ListItem key={todo.id}>{todo.task}</ListItem>
                        ))}
                    </UnorderedList>
                )}

                <form onSubmit={form.handleSubmit}>
                    <FormControl>
                        <FormLabel>Task</FormLabel>
                        <HStack>
                            <Input type="text" placeholder="Task" {...form.getFieldProps("task")} />
                            <Button type="submit" colorScheme={"primary"}>
                                Add
                            </Button>
                        </HStack>
                    </FormControl>
                </form>
            </Stack>
        </ContainerLayout>
    );
};
