import styles from "../styles/Home.module.css";

import { Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar/NavBar";
import Logo from "../../public/images/logo-homepage.png";

export default function HomePage() {
  return (
    <>
      <main>
        <NavBar />
        <div className={styles.homepage_container}>
          <div className={styles.homepage_content}>
            <h1 className={styles.title}>Bem vindo!</h1>

            <div className={styles.text_wrapper}>
              <p>
                Está em busca de um Dev? Na Easy Freela você encontra
                desenvolvedores de todas as áreas para ajudar no seu projeto!{" "}
              </p>
              <p>
                Você é Dev iniciante e quer trabalhar? Aqui você encontra
                diversas oportunidades de trabalho para você que está começando
                agora e quer provar o seu valor!
              </p>
            </div>

            <Text className={styles.login_link}>
              Já tem uma conta?{" "}
              <Link className={styles.link} href="/login">
                Faça Login
              </Link>
            </Text>

            <div className={styles.buttons_wrapper}>
              <Button className={styles.nav_buttons} variant="unstyled">
                <Link href={"/signup"}>
                  <p>Quero contratar!</p>
                </Link>
              </Button>
              <Button className={styles.nav_buttons} variant="unstyled">
                <Link href={"/signup"}>
                  <p>Quero trabalhar!</p>
                </Link>
              </Button>
            </div>
          </div>

          <div className={styles.logo_img_wrapper}>
            <Image
              className={styles.logo_img}
              src={Logo}
              alt="Easy Freela logotipo"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
