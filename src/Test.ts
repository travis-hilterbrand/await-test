const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export class Test {
  private _generating = false;

  public generate = async (): Promise<void> => {
    if (this._generating) return;

    this._generating = true;
    await sleep(3000);
    this._generating = false;
  };

  public wait = async (): Promise<void> => {
    while (this._generating) {
      await sleep(100);
    }
  };
}
