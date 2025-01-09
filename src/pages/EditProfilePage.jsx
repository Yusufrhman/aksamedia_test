import { useDispatch, useSelector } from "react-redux";
import InputField from "../components/InputField";
import MainButton from "../components/MainButton";
import { validateUpdateUserInput } from "../util/validation";
import { useState } from "react";
import { updateUser } from "../features/userSlice";
import { checkPassword } from "../util/auth";

export default function EditProfilePage() {
  const userData = useSelector((state) => state.user);

  const [error, setError] = useState({});
  const [user, setUser] = useState({ ...userData });
  const [updateStatus, setUpdateStatus] = useState(""); 
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredData = Object.fromEntries(formData.entries());
    setError({});

    const errorInput = validateUpdateUserInput(
      enteredData.fullname,
      enteredData.username
    );

    if (errorInput.fullname || errorInput.username) {
      setError(errorInput);
      return;
    }
    const isCorrectPassword = checkPassword(enteredData.password);
    if (!isCorrectPassword) {
      setError({ ...error, password: "Password salah" });
      return;
    }

    dispatch(updateUser(enteredData));
    setUpdateStatus("User updated successfully!"); 
  }

  return (
    <main className="w-full flex items-center justify-center  transition-colors duration-300">
      <div className="max-w-sm w-full p-6 bg-white dark:bg-gray-800 shadow-xl rounded-lg mx-5 my-10 transition-all duration-300">
        <h1 className="text-2xl font-semibold text-teal-600 dark:text-teal-400 mb-4 text-center">
          Edit Profil
        </h1>
        {updateStatus && (
          <div className="p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded mb-4 text-center transition-all duration-300">
            {updateStatus}
          </div>
        )}
        <form onSubmit={onSubmit} className="space-y-4">
          <InputField
            id="fullname"
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={user.fullname}
            onChange={(e) => {
              setUser({ ...user, fullname: e.target.value });
            }}
            error={error.fullname}
          />
          <InputField
            id="username"
            label="Username"
            type="text"
            placeholder="Enter your username"
            value={user.username}
            onChange={(e) => {
              setUser({ ...user, username: e.target.value });
            }}
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
            className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-medium py-2 rounded-lg shadow-md transition-all duration-300"
          >
            Save
          </MainButton>
        </form>
      </div>
    </main>
  );
}
