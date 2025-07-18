import "./App.css";
import { ClassTestView } from "./ClassTestView";

const sleep = (ms: number, label: string): Promise<void> =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.info(`sleep end(${label})`);
      resolve();
    }, ms)
  );

function App() {
  const awaitTest1 = async (): Promise<number> => {
    console.info("awaitTest1 1");
    return 1;
  };
  const awaitTest2 = async (): Promise<number> => {
    console.info("awaitTest2 1");
    await sleep(2000, "awaitTest2");
    console.info("awaitTest2 2");
    return 1;
  };
  const awaitTest3 = async (): Promise<number> => {
    console.info("awaitTest3 1");
    await sleep(2000, `awaitTest3 ${1}`);
    console.info("awaitTest3 2");
    sleep(2000, `awaitTest3 ${2}`);
    return 1;
  };

  return (
    <div>
      App
      <hr />
      <button
        onClick={async () => {
          const response = await awaitTest1();
          console.info(`onClick1(${response})`);
        }}
      >
        Test 1
      </button>
      <button
        onClick={async () => {
          const response = await awaitTest2();
          console.info(`onClick2(${response})`);
        }}
      >
        Test 2
      </button>
      <button
        onClick={async () => {
          const response = await awaitTest3();
          console.info(`onClick3(${response})`);
        }}
      >
        Test 3
      </button>
      <hr />
      <ClassTestView />
    </div>
  );
}

export default App;
