export type User = {
  email: string;
  password: string;
} | null;

export interface UserState {
  user: User;
  token?: string | null;
  loading: boolean;
  error: string;
}
