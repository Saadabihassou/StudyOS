export type Session = {
  id?: string;
  subject: string;
  duration: number;
  date: string;
};

export type Analytics = {
  totalBySubject: Record<string, number>;
  totalStudyTime: number;
  averageSessionDuration: number;
  totalSessions: number;
  topSubject: { name: string; duration: number } | null;
};
