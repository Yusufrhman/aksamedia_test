function getUser() {
  const user = localStorage.getItem("user");
  return JSON.parse(user);
}

export { getUser };
