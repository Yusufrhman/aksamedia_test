import { redirect } from "react-router";
import { getUser } from "./user";

function login(username, password) {
  const user = getUser();
  const usernameIsValid = checkUserName(username);
  const passwordIsValid = checkPassword(password);

  if (!usernameIsValid) {
    return {
      ok: false,
      error: { username: "User tidak terdaftar", password: "" },
    };
  }

  if (!passwordIsValid) {
    return { ok: false, error: { username: "", password: "Password salah" } };
  }
  return { ok: true, user };
}
function checkUserName(username) {
  const user = getUser();

  return username.toLowerCase() === user.username.toLowerCase();
}
function checkPassword(password) {
  const user = getUser();
  return password === user.password;
}

function isLoggedIn() {
  const isLoggedIn = localStorage.getItem("auth");
  return JSON.parse(isLoggedIn);
}

function checkAuthLoader() {
  const isAuth = isLoggedIn();
  if (!!!isAuth) {
    return redirect("/login");
  }
}

export { login, checkUserName, checkPassword, isLoggedIn, checkAuthLoader };
