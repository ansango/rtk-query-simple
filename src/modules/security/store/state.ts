export type SecurityState = {
  value: {} | null;
  status: "idle" | "loading" | "failed";
  users: User[] | null;
};

export const initialState: SecurityState = {
  value: null,
  status: "idle",
  users: null,
};
