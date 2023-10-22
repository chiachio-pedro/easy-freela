import styles from '../styles/css.modules/worker-card.module.css'
import Image from "next/image";
import Logo from '../../public/images/Portrait_Placeholder.png'

export default function WorkerCard(Worker:any){
    return (
        <div className={styles.workerCard_container}>
            <div className={styles.worker_portrait}>
                <Image className={styles.worker_portrait_img} src={Worker.portrait} alt='Easy Freela logotipo'/>
            </div>
            <div className={styles.worker_infos}>
                <h1 className={styles.workerName}>{Worker.name}</h1>
                <p className={styles.workerDescription}>{Worker.description}</p>
            </div>
        </div>
    )
}