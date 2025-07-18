import { Test } from "./Test";

const test = new Test();

export const ClassTestView = () => {
  const handleTest = async () => {
    test.generate();
    console.info("handle trigger");
    await test.wait();
    console.info("handle wait complete");
    await test.generate();
    console.info("handle wait until generate");
  };

  return (
    <div>
      <button onClick={handleTest}>Test</button>
    </div>
  );
};
