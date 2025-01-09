// validasi fullname
export function isValidFullname(fullname) {
  return fullname.length > 3;
}

// validasi username
export function isValidUsername(username) {
  return username.length > 3;
}

//validasi password
export function isValidPassword(password) {
  return password.length >= 6;
}

// validasi utama
export function validateCredentials(username, password) {
  let error = {};
  if (!isValidUsername(username)) {
    error.username = "Username tidak valid";
  }
  if (!isValidPassword(password)) {
    error.password = "Password minimal 6 karakter";
  }
  return error;
}

export function validateUpdateUserInput(fullname, username) {
  let error = {};
  if (!isValidFullname(fullname)) {
    error.fullname = "Fullname tidak valid";
  }
  if (!isValidUsername(username)) {
    error.username = "Username tidak valid";
  }
  return error;
}
