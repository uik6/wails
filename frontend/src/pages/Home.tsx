import { useState } from "react";
import { Button } from "antd";
import { Greet } from "../../wailsjs/go/app/App";

function Home() {
  const [count, setCount] = useState(0);

  async function btn1(count: number) {
    let result = await Greet(count);
    setCount(result);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Vite + React</h1>
      <div className="card" style={{ placeItems: "center" }}>
        <Button type="primary" size="large" onClick={() => btn1(count)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default Home;
