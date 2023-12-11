import styles from "../styles/Login.module.css";

import { Button, FormControl, FormLabel } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import Logo from "../../public/images/logo-small-removebg-preview.png";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");

  const handleSubmit = async () => {
    const userData = {
      email: email,
      password: password
    };

    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post(
        process.env.BASE_URL + "/auth/login",
        userData
      );
      localStorage.setItem("account_type", response.data.session.accountType);
      localStorage.setItem("token", response.data.session.token);
      localStorage.setItem("user_id", response.data.session.userId)
      window.location.href = "/getting-started";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_wrapper}>
        <Link href="/">
          <Image
            className={styles.logo_image}
            src={Logo}
            alt="Easy Freela logotipo"
          />
        </Link>

        <div className={styles.login_form}>
          <h1 className={styles.title}>Login</h1>
          <div className={styles.login_form_itens}>
            <FormControl>
              <FormLabel className={styles.form_label}>Email</FormLabel>
              <input
                type="email"
                className={styles.form_input}
                placeholder="Insira seu email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <FormLabel className={styles.form_label}>Senha</FormLabel>
              <input
                type="password"
                className={styles.form_input}
                placeholder="Insira sua senha"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Link className={styles.forgot_password_link} href="/signup">
              Esqueci minha senha!
            </Link>
            <Button
              onClick={handleSubmit}
              className={styles.button_login}
              variant="unstyled"
            >
              <p>Login</p>
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.signup_option}>
        <h1 className={styles.title_black}>Olá, amigo!</h1>
        <p>
          Se você ainda não possui uma conta conosco, crie sua conta já e
          aproveite nossa plataforma!
        </p>
        <Button className={styles.button_signup} variant="unstyled">
          <Link href="/signup">Criar Conta</Link>
        </Button>
      </div>
    </div>
  );
}
