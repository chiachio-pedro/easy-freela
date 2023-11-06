import styles from '../styles/css.modules/roadmap-iten.module.css';

export default function RoadmapIten(props: {roadname:string}){
    return (
        <button className={styles.roadmap_iten}>
            {props.roadname}
        </button>
    )
}