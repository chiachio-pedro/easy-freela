import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
  } from '@chakra-ui/react';
import { useState } from 'react';
import styles from '../styles/css.modules/roadmap-iten.module.css';

export default function RoadmapIten(props: {roadname:string, roadlink: string}){
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <>
        <button onClick={handleOpen} className={styles.roadmap_iten}>
            {props.roadname}
        </button>

        <Modal isOpen={isOpen} onClose={handleClose} size={'xxl'}>
            <ModalOverlay bg='none' backdropFilter='blur(10px) hue-rotate(90deg)' backdropInvert='80%' backdropBlur='2px'/>
                
            <ModalContent style={{color: 'white', width: '1200px', border: '2px solid #58D5D3', borderRadius: '10px'}}>

                <ModalHeader style={{ fontSize: '35px', padding: '10px 30px 30px',margin: '0px', background: 'linear-gradient(to right, #111111, #1F1F1F, #2A2A2A)', borderRadius: '9px 9px 0px 0px'}} className={styles.title}>Roadmap - {props.roadname}</ModalHeader>

                <ModalHeader style={{ fontSize: '15px', fontWeight: 'lighter' , padding: '0px 40px 30px', margin: '0px', background: 'linear-gradient(to right, #111111, #1F1F1F, #2A2A2A)' }} className={styles.text}>Bem vindo ao roadmap da trilha {props.roadname}, aqui você poderá acessar de forma detalhada todos os passos a serem seguidos para que você se desenvolva com sucesso! Agora é com você. Foco nos estudos e boa sorte!</ModalHeader>

                <ModalBody>
                    <iframe className={styles.iframe_Roadmap} src={`https://roadmap.sh/${props.roadlink}`}></iframe>
                </ModalBody>

                <ModalFooter style={{background: 'linear-gradient(to right, #111111, #1F1F1F, #2A2A2A)', borderRadius: '0px 0px 9px 9px'}}>
                    <button className={styles.roadmap_close} onClick={handleClose}>
                        Sair
                    </button>
                </ModalFooter>

            </ModalContent>

        </Modal>
        </>
    )
}