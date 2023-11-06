"use client"
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import IndexHomepage from '@/pages/home';
import Aboutus from '@/pages/about-us';
import LoginPage from '@/pages/login';
import SignupPage from '@/pages/signup';
import GettingStarted from '@/pages/getting-started';
import Roadmaps from '@/pages/roadmaps';
import Image from "next/image";
import Logo from '../../public/images/logo-small-removebg-preview.png'
import styles from '../styles/css.modules/navbar.module.css';
import { Button, Spinner } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'


export default function Navbar(){

  const [mounted, setMounted] = useState(false); // page load
  const [accountType, setAccountType] = useState(null); //account logged in???

  useEffect(() => {
      setMounted(true)

      return () => {
          setMounted(false)
      }
  }, []);
      
    return(
      <div className={styles.page}>
        {mounted?

        <Router>
          <div className={styles.navbar_container}>
            <div className={styles.navbar_itens}>

              <div className={styles.menu_itens}>
                <Image className={styles.navbar_logo_image} src={Logo} alt='Easy Freela logotipo'/>
                <ul className={styles.navbar_links_list}>
                    <li className={styles.navbar_links_itens}>
                      <Link className={styles.navbar_links} to="/">Home</Link>
                    </li>
                    <li className={styles.navbar_links_itens}>
                      <Link className={styles.navbar_links} to="/about-us">Sobre nós</Link>
                    </li>
                    <li className={styles.navbar_links_itens}>
                      <Link className={styles.navbar_links} to="/getting-started">Getting Started</Link>
                    </li>
                    <li className={styles.navbar_links_itens}>
                      <Link className={styles.navbar_links} to="/roadmaps">Roadmaps</Link>
                    </li>
                  </ul>
              </div> 
              
            </div>
          
            <div className={styles.login_signup_user}>
              {accountType == null ? 
                <><Button className={styles.nav_buttons} variant="unstyled">
                  <Link className={styles.nav_buttons_links} to="/login">Login</Link>
                </Button>
                <Button className={styles.nav_buttons} variant="unstyled">
                  <Link className={styles.nav_buttons_links} to="/signup">Signup</Link>
                </Button></>
              : 
                accountType === "Freelancer" ? 
                  <div className={styles.user_account_loged}>
                    <p>Olá, <span className={styles.user_account}>Freelancer</span></p>
                    <HamburgerIcon h={6} w={6}/>
                  </div>
                : accountType === "Contratante" ? 
                    <div className={styles.user_account_loged}>
                      <p>Olá, <span className={styles.user_account}>Contratante</span></p>
                      <HamburgerIcon h={6} w={6}/>
                    </div>
                  : <p>Erro inesperado!</p>
              }
              
            </div>
          </div>
        
          <Routes>
            <Route path="/" element={<IndexHomepage />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/roadmaps" element={<Roadmaps />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>

        </Router>

        :<div className={styles.page_loading}>
          <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.800' size='xl'/>
        </div>}

      </div>
    )
}