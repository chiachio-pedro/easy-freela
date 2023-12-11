import { NavBar } from "@/components/NavBar/NavBar";
import styles from "../styles/Roadmaps.module.css";

import { RoadmapItem } from "@/components/RoadmapItem";

export default function RoadmapsPage() {
  return (
    <>
      <NavBar />
      <div className={styles.roadmaps_page_container}>
        <div className={styles.roadmap_detais}>
          <h1 className={styles.title}>Roadmaps</h1>
          <p className={styles.text_content}>
            Praesent cursus bibendum nisl tempor efficitur. Pellentesque eget
            aliquet lorem. Praesent fringilla justo sit amet diam sollicitudin
            elementum. Mauris sed pharetra tellus. Suspendisse ullamcorper
            ultrices sem, ac cursus neque malesuada sit amet. Suspendisse
            suscipit dui velit, vel accumsan tellus tempus sed. Nulla facilisi.
            Mauris a dictum libero. Mauris magna orci, dictum nec justo quis,
            auctor semper orci. Integer vel condimentum mi.
          </p>
        </div>

        <div className={styles.roadmaps_wrapper}>
          <div className={styles.roadmap_road}>
            <h2 className={styles.road_title}>Trilhas baseadas em áreas</h2>
            <div className={styles.road_item}>
              <RoadmapItem roadName="Frontend" />
              <RoadmapItem roadName="Backend" />
              <RoadmapItem roadName="Fullstack" />
              <RoadmapItem roadName="DevOps" />
              <RoadmapItem roadName="Android" />
              <RoadmapItem roadName="Data Science" />
              <RoadmapItem roadName="QA" />
              <RoadmapItem roadName="UX Design" />
              <RoadmapItem roadName="Blockchain" />
              <RoadmapItem roadName="Cyber Security" />
              <RoadmapItem roadName="Databases" />
              <RoadmapItem roadName="AI" />
            </div>
          </div>

          <div className={styles.roadmap_road}>
            <h2 className={styles.road_title}>
              Trilhas baseadas em tecnologias
            </h2>
            <div className={styles.road_item}>
              <RoadmapItem roadName="React" />
              <RoadmapItem roadName="Angular" />
              <RoadmapItem roadName="Node.js" />
              <RoadmapItem roadName="SQL" />
              <RoadmapItem roadName="Java" />
              <RoadmapItem roadName="C#" />
              <RoadmapItem roadName="HTML e CSS" />
              <RoadmapItem roadName="PHP" />
              <RoadmapItem roadName="NoSQL" />
              <RoadmapItem roadName="Python" />
              <RoadmapItem roadName="JavaScript" />
              <RoadmapItem roadName="TypeScript" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
