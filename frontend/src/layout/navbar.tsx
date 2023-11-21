"use client";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IndexHomepage from "@/pages/home";
import Aboutus from "@/pages/about-us";
import LoginPage from "@/pages/login";
import SignupPage from "@/pages/signup";
import GettingStarted from "@/pages/getting-started";
import Roadmaps from "@/pages/roadmaps";
import Blog from "@/pages/blog";
import Image from "next/image";
import Logo from "../../public/images/logo-small-removebg-preview.png";
import styles from "../styles/css.modules/navbar.module.css";
import { Button, Spinner } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
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
    <div className={styles.page}>
      {mounted ? (
        <Router>
          <div className={styles.navbar_container}>
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
                      <li className={styles.navbar_links_itens}>
                        <Link className={styles.navbar_links} to="/">
                          Home
                        </Link>
                      </li>
                      <li className={styles.navbar_links_itens}>
                        <Link className={styles.navbar_links} to="/about-us">
                          Sobre nós
                        </Link>
                      </li>
                    </>
                  )}
                  {token && (
                    <li className={styles.navbar_links_itens}>
                      <Link
                        className={styles.navbar_links}
                        to="/getting-started"
                      >
                        Getting Started
                      </Link>
                    </li>
                  )}
                  {token && accountType === "Freelancer" && (
                    <>
                      <li className={styles.navbar_links_itens}>
                        <Link className={styles.navbar_links} to="/roadmaps">
                          Roadmaps
                        </Link>
                      </li>
                      <li className={styles.navbar_links_itens}>
                        <Link className={styles.navbar_links} to="/blog">
                          Blog
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            <div className={styles.login_signup_user}>
              {accountType === "Freelancer" ? (
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
              )}
            </div>
          </div>

          <Routes>
            {!token && !accountType && (
              <>
                <Route path="/" element={<IndexHomepage />} />
                <Route path="/about-us" element={<Aboutus />} />
              </>
            )}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            {token && (
              <>
                <Route path="/" element={<GettingStarted />} />
                <Route path="/getting-started" element={<GettingStarted />} />
              </>
            )}
            {token && accountType === "Freelancer" && (
              <>
                <Route path="/roadmaps" element={<Roadmaps />} />
                <Route path="/blog" element={<Blog />} />
              </>
            )}

            {token && accountType === "Contratante" && <>Rotas contratante</>}
          </Routes>
        </Router>
      ) : (
        <div className={styles.page_loading}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.800"
            size="xl"
          />
        </div>
      )}
    </div>
  );
}
