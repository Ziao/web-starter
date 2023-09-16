import { FC } from "react";
import { useTitle } from "react-use";
import { useTodosQuery } from "../../lib/queries/useTodosQuery.ts";
import { DefaultLayout } from "../layouts/defaultLayout.tsx";

interface HomeProps {}
export const Home: FC<HomeProps> = () => {
    const { data: todos, isLoading } = useTodosQuery();
    useTitle("Todo");

    return (
        <DefaultLayout>
            <div className="container grow flex justify-center items-center">
                <main className="card shadow-2xl shadow-gray-300 bg-white w-96">
                    <div className="card-body">
                        <h2 className="card-title">Todo</h2>
                        {isLoading && <p>Loading...</p>}
                        {!isLoading && todos && (
                            <ul>
                                {todos.map((todo) => (
                                    <li key={todo.id}>{todo.task}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </main>
            </div>
        </DefaultLayout>
    );
};
