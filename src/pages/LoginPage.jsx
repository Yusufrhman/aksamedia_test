import { useEffect, useState } from "react";
import InputField from "../components/InputField";
import { validateCredentials } from "../util/validation";
import { login } from "../util/auth";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../features/auth/authSlice";
import { useNavigate } from "react-router";
import MainButton from "../components/MainButton";
import { updateUser } from "../features/userSlice";

export default function LoginPage() {
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn]);

  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredData = Object.fromEntries(formData.entries());
    setError({});
    const error = validateCredentials(
      enteredData.username,
      enteredData.password
    );
    if (error.username || error.password) {
      setError(error);
      return;
    }
    const res = login(enteredData.username, enteredData.password);
    if (!res.ok) {
      setError(res.error);
      return;
    }
    dispatch(signIn());
    dispatch(updateUser(res.user));
  }

  return (
    <main className="w-full h-[100svh] flex items-center justify-center transition-colors duration-300">
      <div className="max-w-sm w-full p-6 bg-white dark:bg-gray-800 shadow-xl rounded-lg mx-5 transition-all duration-300">
        <h1 className="text-2xl font-semibold text-teal-600 dark:text-teal-600 mb-4 text-center">
          Login
        </h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <InputField
            id="username"
            label="Username"
            type="text"
            placeholder="Enter your username"
            error={error.username}
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            error={error.password}
          />
          <MainButton
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 rounded-lg shadow-md transition-all duration-300 dark:bg-teal-500 dark:hover:bg-teal-600"
          >
            Login
          </MainButton>
        </form>
      </div>
    </main>
  );
}
