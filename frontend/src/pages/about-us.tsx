import styles from "../styles/AboutUs.module.css";

import { NavBar } from "@/components/NavBar/NavBar";
import WorkerCard from "@/components/WorkerCard";
import Rosseau from "../../public/images/JJRosseau-portrait.jpg";
import Hobbes from "../../public/images/ThomasHobbes-portrait.webp";
import Locke from "../../public/images/JohnLocke-portrait.jpeg";

export default function AboutUsPage() {
  return (
    <>
      <NavBar />
      <div className={styles.aboutUs_container}>
        <div className={styles.aboutUs_content}>
          <div className={styles.whoAreWe}>
            <h1 className={styles.title}>Quem Somos?</h1>
            <p>
              Praesent cursus bibendum nisl tempor efficitur. Pellentesque eget
              aliquet lorem. Praesent fringilla justo sit amet diam sollicitudin
              elementum. Mauris sed pharetra tellus. Suspendisse ullamcorper
              ultrices sem, ac cursus neque malesuada sit amet. Suspendisse
              suscipit dui velit, vel accumsan tellus tempus sed. Nulla
              facilisi. Mauris a dictum libero. Mauris magna orci, dictum nec
              justo quis, auctor semper orci. Integer vel condimentum mi.
            </p>
          </div>

          <div className={styles.howDoWeWork}>
            <h1 className={styles.title}>Como funcionamos?</h1>
            <p>
              Praesent cursus bibendum nisl tempor efficitur. Pellentesque eget
              aliquet lorem. Praesent fringilla justo sit amet diam sollicitudin
              elementum.
            </p>
            <p>
              Mauris sed pharetra tellus. Suspendisse ullamcorper ultrices sem,
              ac cursus neque malesuada sit amet. Suspendisse suscipit dui
              velit, vel accumsan tellus tempus sed.
            </p>
          </div>
        </div>

        <div className={styles.aboutOurWorkers_content}>
          <h1 className={styles.subtitle}>
            Conheça alguns de nossos funcionários
          </h1>
          <div className={styles.workersCards}>
            <WorkerCard
              portrait={Locke}
              name="John Locke"
              description="Tech lead desde 2019 e um dos primeiros funcionários da Easy Freela"
            />
            <WorkerCard
              portrait={Rosseau}
              name="Jean J. Rousseau"
              description="Desenvolvedor Fullstack Sênior desde 2022."
            />
            <WorkerCard
              portrait={Hobbes}
              name="Thomas Hobbes"
              description="CTO desde 2019 e co-fundador da Easy Freela."
            />
          </div>
        </div>
      </div>
    </>
  );
}
