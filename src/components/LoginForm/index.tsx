import { Input } from "../Input/styles";
import useAuth from "../../contexts/auth/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import * as C from "./styles";

function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Ops! Você não esqueceu nada?!");
      return;
    }

    const validation = login(email, password);

    if (validation) {
      setError(validation);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Form>
      <p>Usuário:</p>
      <Input
        type="email"
        placeholder="Digite seu E-mail"
        value={email}
        onChange={(e) => [setEmail(e.target.value), setError("")]}
      />
      <p>Senha:</p>
      <Input
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => [setPassword(e.target.value), setError("")]}
      />
      <C.LabelError>{error}</C.LabelError>
      <C.Button type="button" onClick={handleLogin}>
        Entrar
      </C.Button>
      <C.LabelLogout>
        Ainda não tem uma conta?
        <C.Strong>
          <Link to="registration">&nbsp;Registre-se</Link>
        </C.Strong>
      </C.LabelLogout>
    </C.Form>
  );
}

export default LoginForm;
