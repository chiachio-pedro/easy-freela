import RoadmapIten from '@/components/roadmap-iten';
import styles from '../styles/css.modules/roadmaps.module.css';

export default function Roadmaps(){
    return (
        <div className={styles.roadmaps_page_container}>

            <div className={styles.roadmap_detais}>

                <h1 className={styles.title}>Roadmaps</h1>
                <p className={styles.text_content}>Praesent cursus bibendum nisl tempor efficitur. Pellentesque eget aliquet lorem. Praesent fringilla justo sit amet diam sollicitudin elementum. Mauris sed pharetra tellus. Suspendisse ullamcorper ultrices sem, ac cursus neque malesuada sit amet. Suspendisse suscipit dui velit, vel accumsan tellus tempus sed. Nulla facilisi. Mauris a dictum libero. Mauris magna orci, dictum nec justo quis, auctor semper orci. Integer vel condimentum mi.</p>

            </div>

            <div className={styles.roadmaps_wrapper}>

                <div className={styles.roadmap_road}>

                    <h2 className={styles.road_title}>Trilhas baseadas em áreas</h2>
                    <div className={styles.road_iten}>
                        <RoadmapIten roadname="Frontend" />
                        <RoadmapIten roadname="Backend" />
                        <RoadmapIten roadname="Fullstack" />
                        <RoadmapIten roadname="DevOps" />
                        <RoadmapIten roadname="Android" />
                        <RoadmapIten roadname="Data Science" />
                        <RoadmapIten roadname="QA" />
                        <RoadmapIten roadname="UX Design" />
                        <RoadmapIten roadname="Blockchain" />
                        <RoadmapIten roadname="Cyber Security" />
                        <RoadmapIten roadname="Databases" />
                        <RoadmapIten roadname="AI" />
                    </div>

                </div>

                <div className={styles.roadmap_road}>

                    <h2 className={styles.road_title}>Trilhas baseadas em tecnologias</h2>
                    <div className={styles.road_iten}>
                        <RoadmapIten roadname="React" />
                        <RoadmapIten roadname="Angular" />
                        <RoadmapIten roadname="Node.js" />
                        <RoadmapIten roadname="SQL" />
                        <RoadmapIten roadname="Java" />
                        <RoadmapIten roadname="C#" />
                        <RoadmapIten roadname="HTML e CSS" />
                        <RoadmapIten roadname="PHP" />
                        <RoadmapIten roadname="NoSQL" />
                        <RoadmapIten roadname="Python" />
                        <RoadmapIten roadname="JavaScript" />
                        <RoadmapIten roadname="TypeScript" />
                    </div>

                </div>

            </div>

        </div>

    )
}