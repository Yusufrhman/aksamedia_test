import { useEffect, useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter, redirect } from "react-router";
import LoginPage from "./pages/LoginPage";
import { useSelector } from "react-redux";
import DashboardPage from "./pages/DashboardPage";
import { checkAuthLoader, isLoggedIn } from "./util/auth";
import RootLayout from "./pages/RootLayout";
import EditProfilePage from "./pages/EditProfilePage";
import { seedDBIfEmpty } from "./util/indexedDB";

function App() {
  const theme = useSelector((state) => state.theme);
  const [systemTheme, setSystemTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const element = document.documentElement;
    element.classList.remove("light", "dark");
    if (theme !== "system") {
      element.classList.add(theme);
    } else {
      element.classList.add(systemTheme);
    }
  }, [theme, systemTheme]);

  // Inisialisasi data product jika belum ada di indexeddb
  useEffect(() => {
    seedDBIfEmpty();
  }, []);

  // Inisialisasi data user jika belum ada di localStorage
  useEffect(() => {
    const staticUser = {
      username: "aksamedia",
      password: "aaaaaa",
      fullname: "Muhammad Yusuf Rahman",
    };

    const user = localStorage.getItem("user");
    if (!user || user === null) {
      localStorage.setItem("user", JSON.stringify(staticUser));
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
      loader: () => {
        const isAuth = isLoggedIn();
        if (isAuth) {
          return redirect("/dashboard");
        }
      },
    },
    {
      path: "/",
      element: <RootLayout />,
      loader: checkAuthLoader,
      children: [
        {
          path: "",
          loader: () => {
            return redirect("/dashboard");
          },
        },
        {
          path: "dashboard/:page?",
          element: <DashboardPage />,
        },
        {
          path: "edit-profile",
          element: <EditProfilePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
