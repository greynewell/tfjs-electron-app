// global.d.ts
export {};

declare global {
  interface Window {
    electronAPI: {
      runPrediction: (input: number) => Promise<number>;
    }
  }
}