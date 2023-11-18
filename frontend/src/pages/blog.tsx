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
                <div style={{ background: 'gray', display: 'inline-block', borderRadius: '8px', textAlign: 'left', padding: '10px', margin: '10px 0', maxWidth: '1000px' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Lorem ipsum dolor</div>
                    <span style={{ fontSize: '14px' }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, purus et tincidunt viverra, libero lectus egestas tortor, laoreet porta magna felis eget dolor. Etiam in metus eu arcu pulvinar auctor ut quis nibh. Praesent auctor et nisl in euismod. Maecenas nec urna pulvinar, maximus leo sit amet, posuere sapien. Quisque at massa libero. Integer dignissim metus quis lectus porta iaculis. Nam turpis lectus, maximus in ornare vitae, bibendum id nulla. </span>
                </div>
            </div>

            <div className={styles.buttons_not}>
                <div style={{ background: 'gray', display: 'inline-block', borderRadius: '8px', textAlign: 'left', padding: '10px', margin: '10px 0', maxWidth: '1000px' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Lorem ipsum dolor</div>
                    <span style={{ fontSize: '14px' }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, purus et tincidunt viverra, libero lectus egestas tortor, laoreet porta magna felis eget dolor. Etiam in metus eu arcu pulvinar auctor ut quis nibh. Praesent auctor et nisl in euismod. Maecenas nec urna pulvinar, maximus leo sit amet, posuere sapien. Quisque at massa libero. Integer dignissim metus quis lectus porta iaculis. Nam turpis lectus, maximus in ornare vitae, bibendum id nulla. </span>
                </div>
            </div>
        </>
    )
}
