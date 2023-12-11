import styles from "../styles/WorkerCard.module.css";
import Image from "next/image";

export default function WorkerCard(props: {
  portrait: any;
  description: string;
  name: string;
}) {
  return (
    <div className={styles.workerCard_container}>
      <div className={styles.worker_portrait}>
        <Image
          className={styles.worker_portrait_img}
          src={props.portrait}
          alt="Easy Freela logotipo"
        />
      </div>
      <div className={styles.worker_infos}>
        <h1 className={styles.workerName}>{props.name}</h1>
        <p className={styles.workerDescription}>{props.description}</p>
      </div>
    </div>
  );
}
