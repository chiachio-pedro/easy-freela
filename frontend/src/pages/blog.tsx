import styles from '../styles/css.modules/blog.module.css'
import { Button } from '@chakra-ui/react'

export default function Blog(){
    return(
        <><div className={styles.blog_container1}>

            <div className={styles.blog_home}>
                <h1 className={styles.title}>Blog</h1>
                <br></br>
                <p>Praesent cursus bibendum nisl tempor efficitur. Pellentesque eget aliquet lorem. Praesent fringilla justo sit amet diam sollicitudin elementum. Mauris sed pharetra.</p>
                <br></br>
            </div>
        </div>
        
        <div className={styles.buttons_not}> 
    <div className={styles.not_buttons} style={{ background: 'gray', display: 'inline-block', borderRadius: '8px' }}>
        <h1>Lorem ipsum dolor</h1>
        <br></br>
        Noticia/Imagem - MODALNoticia/Imagem - MODALNoticia/Imagem - MODALNoticia/Imagem - MODAL
    </div>
</div>
</>

        
        
    )
}