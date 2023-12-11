import styles from "../styles/RoadmapItem.module.css";

type RoadmapItemProps = {
  roadName: string;
};

export function RoadmapItem({ roadName }: RoadmapItemProps) {
  return <button className={styles.roadmap_item}>{roadName}</button>;
}
