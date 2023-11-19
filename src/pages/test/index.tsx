import { useUnit } from "effector-react";
import viteLogo from "/vite.svg";

import { $counter, buttonClicked } from "model";

const TestPage = () => {
  const [counter, handleClick] = useUnit([$counter, buttonClicked]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>

      <h1>Effector + Vite + React</h1>

      <div className="card">
        <button onClick={handleClick}>count is {counter}</button>

        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Effector, Vite, and React logos to learn more
      </p>
    </>
  );
};

export default TestPage;
