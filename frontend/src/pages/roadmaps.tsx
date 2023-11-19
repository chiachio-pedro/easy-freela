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
                        <RoadmapIten roadname="Frontend" roadlink='frontend'/>
                        <RoadmapIten roadname="Backend" roadlink='backend'/>
                        <RoadmapIten roadname="Fullstack" roadlink='full-stack'/>
                        <RoadmapIten roadname="DevOps" roadlink='devops'/>
                        <RoadmapIten roadname="Android" roadlink='android'/>
                        <RoadmapIten roadname="AI & Data Science" roadlink='ai-data-scientist'/>
                        <RoadmapIten roadname="QA" roadlink='qa'/>
                        <RoadmapIten roadname="UX Design" roadlink='ux-design'/>
                        <RoadmapIten roadname="Blockchain" roadlink='blockchain'/>
                        <RoadmapIten roadname="Cyber Security" roadlink='cyber-security'/>
                        <RoadmapIten roadname="Game Development" roadlink='game-developer'/>
                        <RoadmapIten roadname="Software Architecture" roadlink='software-architect'/>
                    </div>

                </div>

                <div className={styles.roadmap_road}>

                    <h2 className={styles.road_title}>Trilhas baseadas em tecnologias</h2>
                    <div className={styles.road_iten}>
                        <RoadmapIten roadname="React" roadlink='react'/>
                        <RoadmapIten roadname="Angular" roadlink='angular'/>
                        <RoadmapIten roadname="Vue" roadlink='vue'/>
                        <RoadmapIten roadname="Node.js" roadlink='nodejs'/>
                        <RoadmapIten roadname="SQL" roadlink='sql'/>
                        <RoadmapIten roadname="Java" roadlink='java'/>
                        <RoadmapIten roadname="Rust" roadlink='rust'/>
                        <RoadmapIten roadname="Docker" roadlink='docker'/>
                        <RoadmapIten roadname="MongoDB" roadlink='mongodb'/>
                        <RoadmapIten roadname="Python" roadlink='python'/>
                        <RoadmapIten roadname="JavaScript" roadlink='javascript'/>
                        <RoadmapIten roadname="TypeScript" roadlink='typescript'/>
                    </div>

                </div>

            </div>

        </div>

    )
}