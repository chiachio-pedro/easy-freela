import { Button, FormControl, FormLabel } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Image from "next/image";
import Logo from '../../public/images/logo-small-removebg-preview.png'
import styles from '../styles/css.modules/login.module.css';

export default function LoginPage(){

    const handleSubmit = () => {
        alert("submit");
    }

    return (
        <div className={styles.login_container}>

            <div className={styles.login_form_wrapper}>

                <Link to='/'>
                    <Image className={styles.logo_image} src={Logo} alt='Easy Freela logotipo'/>
                </Link>
                
                <div className={styles.login_form}>

                    <h1 className={styles.title}>Login</h1>
                    <div className={styles.login_form_itens}>
                        
                        <FormControl>
                            <FormLabel className={styles.form_label} >Email</FormLabel>
                            <input type='email' className={styles.form_input} placeholder='Insira seu email' />

                            <FormLabel className={styles.form_label} >Senha</FormLabel>
                            <input type='password' className={styles.form_input} placeholder='Insira sua senha' />
                        </FormControl>
                        <Link className={styles.forgot_password_link} to='/signup'>Esqueci minha senha!</Link>
                        <Button onClick={handleSubmit} className={styles.button_login} variant="unstyled">
                            <p>Login</p>
                        </Button>

                    </div>

                </div>

            </div>

            <div className={styles.signup_option}>

                <h1 className={styles.title_black}>Olá, amigo!</h1>
                <p>Se você ainda não possui uma conta conosco, crie sua conta já e aproveite nossa plataforma!</p>
                <Button className={styles.button_signup} variant="unstyled">
                    <Link to='/signup'>Criar Conta</Link>
                </Button>

            </div>

        </div>
    )
}