import Aboutus from '@/pages/about-us';
import IndexHomepage from '@/pages/home';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button } from '@chakra-ui/react';
import styles from '../styles/css.modules/navbar.module.css';
import Image from "next/image";
import Logo from '../../public/images/logo-small-removebg-preview.png'

export default function Navbar(){
    return(
         <Tabs variant="unstyled" className={styles.navbar_container}>

          <TabList className={styles.navbar_itens}>
          
            <div className={styles.menu_itens}>
              <Image className={styles.navbar_logo_image} src={Logo} alt='Easy Freela logotipo'/>
              <Tab className={styles.tab_iten}>Home</Tab>
              <Tab className={styles.tab_iten}>Sobre nós</Tab>
            </div>  

            <div className={styles.login_signup_user}>
              <Button className={styles.nav_buttons} variant="unstyled">
                <p>Login</p>
              </Button>
              <Button className={styles.nav_buttons} variant="unstyled">
                <p>Signup</p>
              </Button>
            </div>
          
          </TabList>

          <TabPanels>
          
            <TabPanel>
               <IndexHomepage/>
            </TabPanel>
          
            <TabPanel>
               <Aboutus/>
            </TabPanel>
          
          </TabPanels>
        
        </Tabs>
    )
}



/*
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import IndexHomepage from '@/pages/home';
import Aboutus from '@/pages/about-us';
import Image from "next/image";
import Logo from '../images/logo-small-removebg-preview.png'

<div className={styles.page}>
  <Router>
    <div className={styles.navbar_container}>
      <div className={styles.navbar_itens}>
        <Image className={styles.navbar_logo_image} src={Logo} alt='Easy Freela logotipo'/>
        <ul className={styles.navbar_links_list}>
          <li className={styles.navbar_links_itens}>
            <Link className={styles.navbar_links} to="/">Home</Link>
          </li>
          <li className={styles.navbar_links_itens}>
            <Link className={styles.navbar_links} to="/about">Sobre nós</Link>
          </li>
        </ul>
      </div>
    
      <div className={styles.login_signup_user}>
        <p>login</p>
        <p>signup</p>
      </div>
    </div>
  
    <Routes>
      <Route path="/about" element={<Aboutus />} />
      <Route path="/" element={<IndexHomepage />} />
    </Routes>

  </Router>     
    </div>
*/  