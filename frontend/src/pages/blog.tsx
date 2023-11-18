import styles from '../styles/css.modules/blog.module.css'
import { Button } from '@chakra-ui/react'

export default function Blog() {
    return (
        <>
            <div className={styles.blog_container1}>
                <div className={styles.blog_home}>
                    <h1 className={styles.title}>Blog</h1>
                    <br></br>
                    <p>Praesent cursus bibendum nisl tempor efficitur. Pellentesque eget aliquet lorem. Praesent fringilla justo sit amet diam sollicitudin elementum. Mauris sed pharetra.</p>
                    <br></br>
                </div>
            </div>

            <div className={styles.buttons_not}>
                <div style={{ background: 'gray', display: 'inline-block', borderRadius: '8px', textAlign: 'left', padding: '10px', margin: '10px 0' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Lorem ipsum dolor</div>
                    <br></br>
                    Noticia/Imagem - MODALNoticia/Imagem - MODALNoticia/Imagem - MODALNoticia/Imagem - MODAL
                </div>
            </div>

            <div className={styles.buttons_not}>
                <div style={{ background: 'gray', display: 'inline-block', borderRadius: '8px', textAlign: 'left', padding: '10px', margin: '10px 0' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Lorem ipsum dolor</div>
                    <br></br>
                    Noticia/Imagem - MODALNoticia/Imagem - MODALNoticia/Imagem - MODALNoticia/Imagem - MODAL
                </div>
            </div>
        </>
    )
}
