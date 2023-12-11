import styles from "../../styles/Navbar.module.css";

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/images/logo-small-removebg-preview.png";
import { NavItem } from "./NavItem";

export function NavBar() {
  const [mounted, setMounted] = useState(false);
  const [accountType, setAccountType] = useState<string | undefined>();
  const [token, setToken] = useState<string | undefined>();

  useEffect(() => {
    setMounted(true);

    const userToken = localStorage.getItem("token") || "";
    const userAccountType = localStorage.getItem("account_type") || "";

    setToken(userToken);
    setAccountType(userAccountType);

    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <header className={styles.navbar_container}>
      <div className={styles.navbar_itens}>
        <div className={styles.menu_itens}>
          <Image
            className={styles.navbar_logo_image}
            src={Logo}
            alt="Easy Freela logotipo"
          />
          <ul className={styles.navbar_links_list}>
            {!token && !accountType && (
              <>
                <NavItem href="/" title="Home" />
                <NavItem href="/about-us" title="Sobre nós" />
              </>
            )}
            {token && (
              <>
                <NavItem href="/getting-started" title="Getting Started" />
                <NavItem href="/mydemands" title="Meus Projetos" />
              </>
            )}
            {token && accountType === "Freelancer" && (
              <>
                <NavItem href="/jobsfreelancer" title="Oportunidades" />
                <NavItem href="/roadmaps" title="Roadmaps" />
                <NavItem href="/blog" title="Blog" />
              </>
            )}

            {token && accountType === "Contratante" && (
              <>
                <NavItem href="/createjob" title="Novo Projeto" />
              </>
            )}

          </ul>
        </div>
      </div>

      <div className={styles.login_signup_user}>
        {accountType == null || accountType == "" ? (
          <>
            <Link className={styles.nav_buttons_links} href="/login">
              <Button className={styles.nav_buttons} variant="unstyled">
                Login
              </Button>

            </Link>
            <Link className={styles.nav_buttons_links} href="/signup">
              <Button className={styles.nav_buttons} variant="unstyled">
                Signup
              </Button>
            </Link>
          </>
        ) : accountType === "Freelancer" ? (
          <div className={styles.user_account_loged}>
            <p>
              Olá, <span className={styles.user_account}>Freelancer</span>
            </p>
            <HamburgerIcon h={6} w={6} />
          </div>
        ) : accountType === "Contratante" ? (
          <div className={styles.user_account_loged}>
            <p>
              Olá, <span className={styles.user_account}>Contratante</span>
            </p>
            <HamburgerIcon h={6} w={6} />
          </div>
        ) : null}
      </div>

      {/* <div className={styles.login_signup_user}>
      {accountType == null ? (
        <>
          <Button className={styles.nav_buttons} variant="unstyled">
            <Link className={styles.nav_buttons_links} to="/login">
              Login
            </Link>
          </Button>
          <Button className={styles.nav_buttons} variant="unstyled">
            <Link className={styles.nav_buttons_links} to="/signup">
              Signup
            </Link>
          </Button>
        </>
      ) : accountType === "Freelancer" ? (
        <div className={styles.user_account_loged}>
          <p>
            Olá, <span className={styles.user_account}>Freelancer</span>
          </p>
          <HamburgerIcon h={6} w={6} />
        </div>
      ) : accountType === "Contratante" ? (
        <div className={styles.user_account_loged}>
          <p>
            Olá,{" "}
            <span className={styles.user_account}>Contratante</span>
          </p>
          <HamburgerIcon h={6} w={6} />
        </div>
      ) : (
        <p>Erro inesperado!</p>
      )}
    </div> */}
    </header>
  );
}
