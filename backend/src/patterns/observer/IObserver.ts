// Observer Pattern — notify services after submission verdict
export interface SubmissionEvent {
  studentId: string;
  challengeId: string;
  verdict: string;
  runtime: number;
  memory: number;
}

export interface IObserver {
  update(event: SubmissionEvent): Promise<void>;
}

export interface ISubject {
  attach(observer: IObserver): void;
  detach(observer: IObserver): void;
  notify(event: SubmissionEvent): Promise<void>;
}
