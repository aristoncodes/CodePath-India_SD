// Strategy Pattern — swappable code execution backends
export interface TestResult {
  passed: boolean;
  stdout: string;
  stderr: string;
  time: number;
  memory: number;
  status: string;
}

export interface IExecutionStrategy {
  execute(code: string, language: string, input: string): Promise<TestResult>;
}
