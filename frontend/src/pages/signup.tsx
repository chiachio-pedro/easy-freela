import { Button, FormControl, FormLabel } from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import Image from "next/image";
import Logo from '../../public/images/logo-small-removebg-preview.png'
import styles from '../styles/css.modules/signup.module.css';
import { useState } from 'react';

export default function SignupPage(){

    const [accountType, setAccountType] = useState('');

    const handleSubmit = () => {
        alert("submit");
    }

    return (
        <div className={styles.signup_container}>

            <div className={styles.login_option}>

                <Link to='/'>
                    <Image className={styles.logo_image} src={Logo} alt='Easy Freela logotipo'/>
                </Link>
                
                <div className={styles.login_itens}>
                    <h1 className={styles.title_black}>Bem vindo!</h1>
                    <p>Se você já possui uma conta conosco, basta fazer login!</p>
                    <Button className={styles.button_login} variant="unstyled">
                        <Link to='/login'>Login</Link>
                    </Button>
                </div>
                
            </div>

            <div className={styles.signup_form_wrapper}>

                <div className={styles.signup_form}>

                    <h1 className={styles.title}>Criar Conta!</h1>
                    <div className={styles.signup_form_itens}>
                        
                        <FormControl className={styles.form_control}>
                            
                            <FormLabel className={styles.form_label} >Email</FormLabel>
                            <input type='email' className={styles.form_input} placeholder='Insira seu email' />

                            <FormLabel className={styles.form_label} >Senha</FormLabel>
                            <input type='password' className={styles.form_input} placeholder='Insira sua senha' />

                            <FormLabel className={styles.form_label} >Confirmação</FormLabel>
                            <input type='password' className={styles.form_input} placeholder='Confirme sua senha' />

                            <RadioGroup className={styles.account_type_selection} onChange={setAccountType}>
                        
                                <Radio value='Freelancer' colorScheme='teal' borderWidth='1px' borderRadius='md' boxShadow='md' px={3} py={1}><p>Quero trabalhar!</p></Radio>
                                <Radio value='Contratante' colorScheme='teal' borderWidth='1px' borderRadius='md' boxShadow='md' px={3} py={1}><p>Quero contratar!</p></Radio>
                          
                            </RadioGroup>

                        </FormControl>

                        <Button onClick={handleSubmit} className={styles.button_signup} variant="unstyled">
                            <p>Signup</p>
                        </Button>

                    </div>

                </div>

            </div>

        </div>
    )
}