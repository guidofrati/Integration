import style from "./Form.module.css";
import React from "react";
import { validate } from "./validation";

export default function Form(props) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(userData);
  };

  return (
    <div>
      <div className={style.container}>
        <form className={style.formulario} onSubmit={handleSubmit}>
          <label className={style.foropad}>Username:</label>
          <input
            name="username"
            type="text"
            placeholder="guido@gmail.com"
            value={userData.username}
            onChange={handleInputChange}
          />
          <p style={{ color: "red" }}>{errors.username}</p>
          <label className={style.foropad}>Password:</label>
          <input
            name="password"
            type="text"
            placeholder="1guido"
            value={userData.password}
            onChange={handleInputChange}
          />
          <p style={{ color: "red" }}>{errors.password}</p>
          <button>LOGIN</button>
        </form>
      </div>
    </div>
  );
}
