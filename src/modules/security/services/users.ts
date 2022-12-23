import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "api/user",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "users",
      providesTags: (result) =>
        result ? result.map(({ id }) => ({ type: "User", id })) : [],
    }),
    getUser: builder.query<User, string>({
      query: (id) => `users/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
    createUser: builder.mutation<User, Partial<User>>({
      query: (body) => ({
        url: "users",
        method: "POST",
        body,
      }),
    }),
    updateUser: builder.mutation<void, Pick<User, "id"> & Partial<User>>({
      query: ({ id, ...patch }) => ({
        url: `users/${id}`,
        method: "PUT",
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          userApi.util.updateQueryData("getUser", id, (draft) => {
            Object.assign(draft, patch);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    deleteUser: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "User", id }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
