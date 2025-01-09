import { useDispatch, useSelector } from "react-redux";
import { IoCloudyNight, IoDesktop, IoSunny } from "react-icons/io5";
import { setTheme } from "../features/ThemeSlice";

const options = [
  {
    mode: "light",
    icon: <IoSunny size={24} />,
  },
  {
    mode: "dark",
    icon: <IoCloudyNight size={24} />,
  },
  {
    mode: "system",
    icon: <IoDesktop size={24} />,
  },
];

export default function DarkModeOptions() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  function changeTheme(selectedTheme) {
    dispatch(setTheme(selectedTheme));
  }

  return (
    <ul className="flex items-center justify-center gap-4">
      {options.map((option, index) => (
        <li key={index}>
          <button
            onClick={() => changeTheme(option.mode)}
            className={`flex items-center justify-center p-2 rounded-full transition-transform transform hover:scale-110 focus:outline-none ${
              theme === option.mode
                ? "bg-white text-teal-600 shadow-lg"
                : "bg-teal-500 text-teal-100"
            }`}
          >
            {option.icon}
          </button>
        </li>
      ))}
    </ul>
  );
}
