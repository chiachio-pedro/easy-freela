import { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import styles from '../styles/css.modules/blog.module.css';

export default function Blog() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className={styles.blog_container1}>
        <div className={styles.blog_home}>
          <h1 className={styles.title}>Blog</h1>
          <br />
          <p>
            Praesent cursus bibendum nisl tempor efficitur. Pellentesque eget
            aliquet lorem. Praesent fringilla justo sit amet diam sollicitudin
            elementum. Mauris sed pharetra.
          </p>
          <br />
        </div>
      </div>

      <div className={styles.buttons_not}>
        <div
          style={{
            background: 'gray',
            display: 'inline-block',
            borderRadius: '8px',
            textAlign: 'left',
            padding: '10px',
            margin: '10px 0',
            maxWidth: '1000px',
          }}
        >
          <div
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '10px',
            }}
          >
            Lorem ipsum dolor
          </div>
          <span style={{ fontSize: '14px' }}>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            commodo, purus et tincidunt viverra, libero lectus egestas tortor,
            laoreet porta magna felis eget dolor. Etiam in metus eu arcu
            pulvinar auctor ut quis nibh. Praesent auctor et nisl in euismod.
            Maecenas nec urna pulvinar, maximus leo sit amet, posuere sapien.
            Quisque at massa libero. Integer dignissim metus quis lectus porta
            iaculis. Nam turpis lectus, maximus in ornare vitae, bibendum id
            nulla.{' '}
          </span>

          <Button colorScheme="teal" mt={4} onClick={handleOpen}>
            Abrir
          </Button>

          <Modal isOpen={isOpen} onClose={handleClose} size="xl">
            <ModalOverlay />
            <ModalContent style={{ background: '#4e5252', color: 'white', width: '90%', maxWidth: '1200px' }}>
              <ModalHeader>Lorem ipsum dolor</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                commodo, purus et tincidunt viverra, libero lectus egestas
                tortor, laoreet porta magna felis eget dolor. Etiam in metus eu
                arcu pulvinar auctor ut quis nibh. Praesent auctor et nisl in
                euismod. Maecenas nec urna pulvinar, maximus leo sit amet,
                posuere sapien. Quisque at massa libero. Integer dignissim
                metus quis lectus porta iaculis. Nam turpis lectus, maximus in
                ornare vitae, bibendum id nulla.
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </div>

      <div className={styles.buttons_not}>
        <div
          style={{
            background: 'gray',
            display: 'inline-block',
            borderRadius: '8px',
            textAlign: 'left',
            padding: '10px',
            margin: '10px 0',
            maxWidth: '1000px',
          }}
        >
          <div
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '10px',
            }}
          >
            Lorem ipsum dolor
          </div>
          <span style={{ fontSize: '14px' }}>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            commodo, purus et tincidunt viverra, libero lectus egestas tortor,
            laoreet porta magna felis eget dolor. Etiam in metus eu arcu
            pulvinar auctor ut quis nibh. Praesent auctor et nisl in euismod.
            Maecenas nec urna pulvinar, maximus leo sit amet, posuere sapien.
            Quisque at massa libero. Integer dignissim metus quis lectus porta
            iaculis. Nam turpis lectus, maximus in ornare vitae, bibendum id
            nulla.{' '}
          </span>

          <Button colorScheme="teal" mt={4} onClick={handleOpen}>
            Abrir
          </Button>

          <Modal isOpen={isOpen} onClose={handleClose} size="xl">
            <ModalOverlay />
            <ModalContent style={{ background: '#4e5252', color: 'white', width: '90%', maxWidth: '1200px' }}>
              <ModalHeader>Lorem ipsum dolor</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                commodo, purus et tincidunt viverra, libero lectus egestas
                tortor, laoreet porta magna felis eget dolor. Etiam in metus eu
                arcu pulvinar auctor ut quis nibh. Praesent auctor et nisl in
                euismod. Maecenas nec urna pulvinar, maximus leo sit amet,
                posuere sapien. Quisque at massa libero. Integer dignissim
                metus quis lectus porta iaculis. Nam turpis lectus, maximus in
                ornare vitae, bibendum id nulla.
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </div>

    </>
  );
}