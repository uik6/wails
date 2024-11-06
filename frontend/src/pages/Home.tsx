import { useState } from "react";
import { Button } from "antd";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1>Vite + React</h1>
        <div className="card" style={{placeItems: "center"}}>
          <Button type="primary" size="large" onClick={() => setCount(count + 1)}>
            count is {count}
          </Button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </div>
    </>
  );
}

export default Home;
