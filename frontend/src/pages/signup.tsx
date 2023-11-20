import { Button, FormControl, FormLabel } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Image from "next/image";
import Logo from "../../public/images/logo-small-removebg-preview.png";
import styles from "../styles/css.modules/signup.module.css";
import { useState } from "react";
import axios from "axios";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [accountType, setAccountType] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    const userData = {
      email: email,
      password: password,
      accountType: accountType,
    };

    if (!email || !password || !confirmPassword || !accountType) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/sign-up",
        userData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.login_option}>
        <Link to="/">
          <Image
            className={styles.logo_image}
            src={Logo}
            alt="Easy Freela logotipo"
          />
        </Link>

        <div className={styles.login_itens}>
          <h1 className={styles.title_black}>Bem vindo!</h1>
          <p>Se você já possui uma conta conosco, basta fazer login!</p>
          <Button className={styles.button_login} variant="unstyled">
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </div>

      <div className={styles.signup_form_wrapper}>
        <div className={styles.signup_form}>
          <h1 className={styles.title}>Criar Conta!</h1>
          <div className={styles.signup_form_itens}>
            <FormControl className={styles.form_control}>
              <FormLabel className={styles.form_label}>Email</FormLabel>
              <input
                id="email"
                type="email"
                className={styles.form_input}
                placeholder="Insira seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <FormLabel className={styles.form_label}>Senha</FormLabel>
              <input
                id="password"
                type="password"
                className={styles.form_input}
                placeholder="Insira sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <FormLabel className={styles.form_label}>Confirmação</FormLabel>
              <input
                id="confirmPassword"
                type="password"
                className={styles.form_input}
                placeholder="Confirme sua senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <RadioGroup
                className={styles.account_type_selection}
                onChange={setAccountType}
              >
                <Radio
                  value="Freelancer"
                  colorScheme="teal"
                  borderWidth="1px"
                  borderRadius="md"
                  boxShadow="md"
                  px={3}
                  py={1}
                >
                  <p>Quero trabalhar!</p>
                </Radio>
                <Radio
                  value="Contratante"
                  colorScheme="teal"
                  borderWidth="1px"
                  borderRadius="md"
                  boxShadow="md"
                  px={3}
                  py={1}
                >
                  <p>Quero contratar!</p>
                </Radio>
              </RadioGroup>
            </FormControl>

            <Button
              onClick={handleSubmit}
              className={styles.button_signup}
              variant="unstyled"
            >
              <p>Signup</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
