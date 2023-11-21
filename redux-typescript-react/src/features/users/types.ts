export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserState {
  loading: boolean;
  users: Array<User>;
  error: string | undefined;
}
