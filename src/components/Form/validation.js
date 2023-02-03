const regexUser = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /\d/;

export function validate(userData) {
  let errors = {};

  if (!regexUser.test(userData.username))
    errors.username = "El usuario debe ser un email";
  else if (!userData.username)
    errors.username = "Este campo no puede quedar vacio";
  else if (userData.username.length > 35)
    errors.username =
      "El nombre de usuario no puede tener mas de 35 caracteres";
  else if (!regexPassword.test(userData.password))
    errors.password = "La contraseña debe tener al menos un numero";
  else if (userData.password.length < 6 && userData.password.length > 10)
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres";

  return errors;
}
