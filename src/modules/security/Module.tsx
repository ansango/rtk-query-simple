import { useGetUserQuery, useGetUsersQuery } from "./services/users";

const SecurityModule = () => {
  const { data } = useGetUsersQuery();

  return (
    <div>
      {data?.map(({ email, id, name }) => (
        <div key={`${name}-${id}`}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default SecurityModule;
