import { useEffect, useState } from "react";
type UserType = {
  name: string;
};

type filterType = {
  id: number;
  nama?: string;
};

const Users = () => {
  const [user, setUser] = useState<UserType[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [filter, setFilter] = useState<filterType>({ id: 1 });

  const handleFilter = () => {
    setFilter({
      id: 2,
    });
  };

  console.log("user", user);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${filter.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setUser((prev) => [...prev, data]);
      })
      .catch(() => setError("error fetch users"));
  }, [filter]);

  return (
    <div>
      <h1>users</h1>
      {error && <p>{error}</p>}
      <ul>
        {user?.map((user) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
      <button type="button" onClick={handleFilter}></button>
    </div>
  );
};
export default Users;
