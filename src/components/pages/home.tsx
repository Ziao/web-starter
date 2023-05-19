import { FC, useState } from "react";
import { useTitle } from "react-use";
import { useCatFactQuery } from "../../lib/queries/useCatFactQuery.ts";

interface HomeProps {}
export const Home: FC<HomeProps> = () => {
    const [counter, setCounter] = useState(0);

    const { data: fact, isLoading } = useCatFactQuery();
    useTitle("Home");

    return (
        <main className="card shadow-2xl shadow-sky-400 bg-white w-96">
            <div className="card-body">
                <h2 className="card-title">Home</h2>
                <p>Random cat fact: {isLoading ? "..." : fact}</p>
                <p>
                    Counter: <span data-cy="home-counter">{counter}</span>
                </p>
                <button
                    className="btn btn-ghost bg-gray-100"
                    onClick={() => setCounter(counter + 1)}
                    data-cy="home-button"
                >
                    Increment
                </button>
            </div>
        </main>
    );
};
