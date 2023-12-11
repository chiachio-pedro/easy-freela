import styles from "../styles/CandidateJob.module.css";

import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar/NavBar";
import authedAxiosClient from "@/components/clients/authedAxiosClient";
import { FormControl, FormLabel, Button, ButtonGroup, Stack, Center } from '@chakra-ui/react';
import { useRouter } from "next/router";
import { useState } from "react";

export default function CandidateJobPage() {
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [aboutMe, setAboutMe] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [resume, setResume] = useState("");
    const [github, setGithub] = useState("");

    const [user_id, setUserId] = useState("");

    const router = useRouter();
    const job_demand_id = router.query.demand_id;

    async function fetchData() {
        try {
            const id = localStorage.getItem("user_id") || "";
            const response = await authedAxiosClient.get("/demand/show-demand-by-id/" + job_demand_id);
            const data = response.data;
            setTitle(data.demand.title);
            setUserId(id)
          //console.log(data.demand);
        } catch (error) {
            console.error(error);
        }
    }
    fetchData();
    const handleSubmit = () => {
        const userJob = {
            user_id: user_id,
            job_demand_id: job_demand_id
        };

        authedAxiosClient.post("/demand/set-demand", userJob)
        window.alert("Condidatura enviada!");
        window.location.href = "/jobsfreelancer"
    };

    return (
        <>
            <main>
                <NavBar />
                <div className={styles.candidateJob_container}>
                    <h1 className={styles.title}>Me Candidatar</h1>

                    <div className={styles.form}>
                        <h3 className={styles.subtitle}>{title}</h3>
                        <form>
                            <div className={styles.info}>
                                <Center>
                                    <FormControl className={styles.centered_form}>
                                        <input
                                            id="name"
                                            type="name"
                                            className={styles.form_input}
                                            placeholder="Nome..."
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </FormControl>
                                </Center>

                                <Center>
                                    <FormControl className={styles.centered_form}>
                                        <textarea
                                            rows={4}
                                            className={styles.form_input}
                                            placeholder="Sobre mim..."
                                            value={aboutMe}
                                            onChange={(e) => setAboutMe(e.target.value)}
                                        />
                                    </FormControl>
                                </Center>

                                <Center>
                                    <FormControl className={styles.centered_form}>
                                        <input
                                            type="email"
                                            className={styles.form_input}
                                            placeholder="Email..."
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />

                                        <input
                                            type="tel"
                                            className={styles.form_input}
                                            placeholder="Telefone..."
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </FormControl>
                                </Center>

                                <Center>
                                    <FormControl className={styles.centered_form}>
                                        <input
                                            type="link"
                                            className={styles.form_input}
                                            placeholder="Portifólio..."
                                            value={resume}
                                            onChange={(e) => setResume(e.target.value)}
                                        />

                                        <input
                                            type="tel"
                                            className={styles.form_input}
                                            placeholder="LinkedIn..."
                                            value={linkedin}
                                            onChange={(e) => setLinkedin(e.target.value)}
                                        />

                                        <input
                                            type="tel"
                                            className={styles.form_input}
                                            placeholder="GitHub..."
                                            value={github}
                                            onChange={(e) => setGithub(e.target.value)}
                                        />
                                    </FormControl>
                                </Center>

                                <div className={styles.form_footer}>

                                    <Button
                                        onClick={handleSubmit}
                                        className={styles.button}
                                        variant="unstyled"
                                    >
                                        <p>Enviar Candidatura</p>
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </main>

        </>
    )
}