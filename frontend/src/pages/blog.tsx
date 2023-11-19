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
      <div className={styles.blogContainer}>
        <div className={styles.blog_home}>
          <h1 className={styles.blogTitle}>Blog</h1>
          <br />
          <p>
            Praesent cursus bibendum nisl tempor efficitur. Pellentesque eget
            aliquet lorem. Praesent fringilla justo sit amet diam sollicitudin
            elementum. Mauris sed pharetra.
          </p>
          <br />
        </div>
      </div>

      <div className={styles.blogPage}>
        <div
          style={{
            background: 'gray',
            display: 'inline-block',
            borderRadius: '8px',
            textAlign: 'left',
            padding: '20px',
            margin: '20px 0',
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, purus et
            tincidunt viverra, libero lectus egestas tortor, laoreet porta magna felis
            eget dolor. Etiam in metus eu arcu pulvinar auctor ut quis nibh. Praesent
            auctor et nisl in euismod. Maecenas nec urna pulvinar, maximus leo sit amet,
            posuere sapien. Quisque at massa libero. Integer dignissim metus quis lectus
            porta iaculis. Nam turpis lectus, maximus in ornare vitae, bibendum id nulla.{' '}
          </span>

          <div style={{ marginTop: '10px', textAlign: 'center' }}>
    <Button colorScheme="teal" onClick={handleOpen}>
      Continuar lendo...
    </Button>
  </div>

          <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
            <span style={{ marginRight: '5px', display: 'inline-block' }}>
              <div
                style={{
                  borderRadius: '8px',
                  backgroundColor: '#58D5D3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '5px',
                  color: 'black',
                }}
              >
                #backend
              </div>
            </span>
            <span style={{ marginRight: '5px', display: 'inline-block' }}>
              <div
                style={{
                  borderRadius: '8px',
                  backgroundColor: '#58D5D3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '5px',
                  color: 'black',
                }}
              >
                #java
              </div>
            </span>
          </div>

          <Modal isOpen={isOpen} onClose={handleClose} size="xl">
            <ModalOverlay />
            <ModalContent style={{ background: '#4e5252', color: 'white', width: '90%', maxWidth: '1200px' }}>
              <ModalHeader style={{ fontSize: '28px' }}>Lorem ipsum dolor</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, purus et tincidunt viverra, libero lectus egestas tortor, laoreet porta magna felis eget dolor. Etiam in metus eu arcu pulvinar auctor ut quis nibh. Praesent auctor et nisl in euismod. Maecenas nec urna pulvinar, maximus leo sit amet, posuere sapien. Quisque at massa libero. Integer dignissim metus quis lectus porta iaculis. Nam turpis lectus, maximus in ornare vitae, bibendum id nulla.
                <br></br>
                <div style={{ display: 'flex', marginTop: '20px' }}>
                  <div style={{ flex: 1, marginRight: '10px', height: '140px', background: 'rgba(255, 255, 255, 0.9)' }}>
                    <div style={{ borderRadius: '4px', padding: '15px', height: '100%', marginBottom: '20px', textAlign: 'center' }}>
                      <p style={{ fontWeight: 'bold', color: 'black', fontSize: '16px', margin: 0 }}>Imagem</p>
                    </div>
                  </div>
                  <div style={{ flex: 1, height: '140px', background: 'rgba(255, 255, 255, 0.9)' }}>
                    <div style={{ borderRadius: '4px', padding: '15px', height: '100%', marginBottom: '20px', textAlign: 'center' }}>
                      <p style={{ fontWeight: 'bold', color: 'black', fontSize: '16px', margin: 0 }}>Imagem</p>
                    </div>
                  </div>
                </div>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, purus et tincidunt viverra, libero lectus egestas tortor, laoreet porta magna felis eget dolor. Etiam in metus eu arcu pulvinar auctor ut quis nibh. Praesent auctor et nisl in euismod. Maecenas nec urna pulvinar, maximus leo sit amet, posuere sapien. Quisque at massa libero. Integer dignissim metus quis lectus porta iaculis. Nam turpis lectus, maximus in ornare vitae, bibendum id nulla.
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </div>

      <div className={styles.blogPage}>
        <div
          style={{
            background: 'gray',
            display: 'inline-block',
            borderRadius: '8px',
            textAlign: 'left',
            padding: '20px',
            margin: '20px 0',
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, purus et
            tincidunt viverra, libero lectus egestas tortor, laoreet porta magna felis
            eget dolor. Etiam in metus eu arcu pulvinar auctor ut quis nibh. Praesent
            auctor et nisl in euismod. Maecenas nec urna pulvinar, maximus leo sit amet,
            posuere sapien. Quisque at massa libero. Integer dignissim metus quis lectus
            porta iaculis. Nam turpis lectus, maximus in ornare vitae, bibendum id nulla.{' '}
          </span>

          <div style={{ marginTop: '10px', textAlign: 'center' }}>
    <Button colorScheme="teal" onClick={handleOpen}>
      Continuar lendo...
    </Button>
  </div>

          <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
            <span style={{ marginRight: '5px', display: 'inline-block' }}>
              <div
                style={{
                  borderRadius: '8px',
                  backgroundColor: '#58D5D3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '5px',
                  color: 'black',
                }}
              >
                #frontend
              </div>
            </span>
            <span style={{ marginRight: '5px', display: 'inline-block' }}>
              <div
                style={{
                  borderRadius: '8px',
                  backgroundColor: '#58D5D3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '5px',
                  color: 'black',
                }}
              >
                #html
              </div>
            </span>
          </div>

          <Modal isOpen={isOpen} onClose={handleClose} size="xl">
            <ModalOverlay />
            <ModalContent style={{ background: '#4e5252', color: 'white', width: '90%', maxWidth: '1200px' }}>
              <ModalHeader style={{ fontSize: '28px' }}>Lorem ipsum dolor</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, purus et tincidunt viverra, libero lectus egestas tortor, laoreet porta magna felis eget dolor. Etiam in metus eu arcu pulvinar auctor ut quis nibh. Praesent auctor et nisl in euismod. Maecenas nec urna pulvinar, maximus leo sit amet, posuere sapien. Quisque at massa libero. Integer dignissim metus quis lectus porta iaculis. Nam turpis lectus, maximus in ornare vitae, bibendum id nulla.
                <br></br>
                <div style={{ display: 'flex', marginTop: '20px' }}>
                  <div style={{ flex: 1, marginRight: '10px', height: '140px', background: 'rgba(255, 255, 255, 0.9)' }}>
                    <div style={{ borderRadius: '4px', padding: '15px', height: '100%', marginBottom: '20px', textAlign: 'center' }}>
                      <p style={{ fontWeight: 'bold', color: 'black', fontSize: '16px', margin: 0 }}>Imagem</p>
                    </div>
                  </div>
                  <div style={{ flex: 1, height: '140px', background: 'rgba(255, 255, 255, 0.9)' }}>
                    <div style={{ borderRadius: '4px', padding: '15px', height: '100%', marginBottom: '20px', textAlign: 'center' }}>
                      <p style={{ fontWeight: 'bold', color: 'black', fontSize: '16px', margin: 0 }}>Imagem</p>
                    </div>
                  </div>
                </div>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, purus et tincidunt viverra, libero lectus egestas tortor, laoreet porta magna felis eget dolor. Etiam in metus eu arcu pulvinar auctor ut quis nibh. Praesent auctor et nisl in euismod. Maecenas nec urna pulvinar, maximus leo sit amet, posuere sapien. Quisque at massa libero. Integer dignissim metus quis lectus porta iaculis. Nam turpis lectus, maximus in ornare vitae, bibendum id nulla.
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </>
  );
}
