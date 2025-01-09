import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./dropdown/Dropdown";
import DropdownItem from "./dropdown/DropdownItem";
import { Link } from "react-router";
import { signOut } from "../features/auth/authSlice";
import DarkModeOptions from "./DarkModeOptions";

export default function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <header className="bg-gradient-to-r from-teal-400 to-teal-600 dark:from-teal-600 dark:to-teal-800 w-full sticky top-0 py-4 shadow-md z-50">
      <div className="flex items-center justify-center sm:justify-end gap-8 w-[90%] mx-auto">
        <DarkModeOptions />
        <Dropdown className={"text-sm w-fit items-right"}>
          <Dropdown.Title className="py-2 text-white text-base hover:text-teal-100 transition-colors duration-300">
            {user.username || "Guest"}
          </Dropdown.Title>
          <Dropdown.Menu className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 flex flex-col w-fit right-0 shadow-lg rounded-md">
            <Link
              to={"/dashboard"}
              className="text-white text-sm hover:text-teal-100 transition-colors duration-300"
            >
              <Dropdown.Item className="hover:bg-teal-100 dark:hover:bg-teal-700 transition-colors duration-300">
                Dashboard
              </Dropdown.Item>
            </Link>
            <Link to={"/edit-profile"}>
              <Dropdown.Item className="hover:bg-teal-100 dark:hover:bg-teal-700 transition-colors duration-300">
                Edit Profile
              </Dropdown.Item>
            </Link>
            <DropdownItem
              onClick={() => {
                dispatch(signOut());
              }}
              className="hover:bg-teal-100 dark:hover:bg-teal-700 transition-colors duration-300"
            >
              Logout
            </DropdownItem>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  );
}
