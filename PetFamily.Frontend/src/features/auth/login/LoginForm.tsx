import { CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { getUsersAsync } from "../../../shared/api/requests";

export function LoginForm() {
  const [users, setUsers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const users = await getUsersAsync();
        setUsers(users);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col h-full w-full py-6 px-10 justify-center items-start gap-4">
      <NavLink to="/" className="text-xl text-main-color font-mono">
        ← Обратно на Главную
      </NavLink>

      <div className="flex flex-col flex-1 min-w-80 mx-auto items-center justify-center gap-9">
        {isLoading ? (
          <CircularProgress color="error" />
        ) : (
          users.map((user, i) => <div key={i}>{user}</div>)
        )}
      </div>
    </div>
  );
}
