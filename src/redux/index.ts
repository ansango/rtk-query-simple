import {
  type Action,
  configureStore,
  type ThunkAction,
  ConfigureStoreOptions,
} from "@reduxjs/toolkit";
import { userApi } from "./services";

import modules from "./modules";

export function makeStore(
  options?: ConfigureStoreOptions["preloadedState"] | undefined
) {
  return configureStore({
    reducer: {
      modules,
      [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([userApi.middleware]),
    ...options,
  });
}

export const store = makeStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
