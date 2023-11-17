That's just a markdown document to save the chakra ui routing method if necessary in the future. 
I'm just saving it to prevent the risk of needing to reewrite it from zero.

------------------------------------------------------------------------------------------------


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
