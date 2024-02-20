import * as C from "./styles";
import { Input } from "../Input/styles";
import useAuth from "../../contexts/auth/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function RegistrationForm() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfig, setEmailConfig] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { register } = useAuth();

  const handleRegister = () => {
    if (!username || !email || !password || !emailConfig) {
      setError("Ops! Você não esqueceu nada?!");
      return;
    } else if (email !== emailConfig) {
      setError("Por favor, digite o mesmo email para confirmar");
      return;
    }

    const validation = register(username, email, password);

    if (validation) {
      setError(validation);
      return;
    }

    alert("Parabéns! Agora você faz parte do nosso time.");
    navigate("/");
  };

  return (
    <C.Form>
      <C.Label>Registre-se e receba ofertas exclusivas!</C.Label>
      <Input
        type="text"
        placeholder="Digite seu nome completo"
        value={username}
        onChange={(e) => [setUsername(e.target.value), setError("")]}
      />
      <Input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => [setEmail(e.target.value), setError("")]}
      />
      <Input
        type="email"
        placeholder="Confirme seu E-mail"
        value={emailConfig}
        onChange={(e) => [setEmailConfig(e.target.value), setError("")]}
      />
      <Input
        type="password"
        placeholder="Digite uma senha"
        value={password}
        onChange={(e) => [setPassword(e.target.value), setError("")]}
      />
      <C.LabelError>{error}</C.LabelError>
      <C.Button type="button" onClick={handleRegister}>
        Inscrever-se
      </C.Button>
      <C.LabelLogin>
        Já tem uma conta?
        <C.Strong>
          <Link to="/">&nbsp;Entre</Link>
        </C.Strong>
      </C.LabelLogin>
    </C.Form>
  );
}

export default RegistrationForm;
