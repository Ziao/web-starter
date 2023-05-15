import { ClockIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <ClockIcon className="h-6 w-6 text-blue-500" />
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    );
}

export default App;
