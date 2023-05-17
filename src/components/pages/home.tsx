import { FC, useState } from "react";

interface HomeProps {}
export const Home: FC<HomeProps> = () => {
    const [counter, setCounter] = useState(0);
    return (
        <main className="card shadow-2xl shadow-sky-400 bg-white w-96">
            <div className="card-body">
                <h2 className="card-title">Home</h2>
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
