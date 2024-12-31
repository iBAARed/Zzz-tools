// global.d.ts
interface Window {
    startFunction: {
      invoke: (methodName: string, ...args: any[]) => Promise<any>;
    };
  }
  