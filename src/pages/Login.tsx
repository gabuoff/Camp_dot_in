import React, { useState } from "react";

import loginTitle from "../assets/images/log-in.svg";
import "../styles/Login.css";

export function Login() {
  return (
    <form>
      <div className="title-login">
        <picture>
          <img src={loginTitle} alt="login title img" />
        </picture>
        <h1>Faça seu login</h1>
      </div>

      <span>Entre com suas informações de cadastro</span>
      <fieldset className="">
        <label>E-mail</label>
        <input type="email" name="uname" placeholder="Digite seu e-mail" />
      </fieldset>

      <fieldset className="">
        <label>Senha </label>
        <input type="password" name="pass" placeholder="Digite sua senha" />
      </fieldset>

      <div className="checkbox">
        <input type="checkbox" name="remember" id="remember" />
        <label>Lembre-me</label>
      </div>
    </form>
  );
}
