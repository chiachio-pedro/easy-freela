import styles from "../styles/CreateJob.module.css";

import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar/NavBar";
import { FormControl, FormLabel, Button, ButtonGroup, Stack } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import axios from "axios";
import authedAxiosClient from "@/components/clients/authedAxiosClient"
import { useRouter } from "next/router";

export default function CreateJobPage() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [price, setPrice] = useState("");
    const [dead_line, setDeadLine] = useState("");
    const [user_id, setUserId] = useState("");

    const handleSubmit = async () => {
        const userId = localStorage.getItem("user_id") || "";
        setUserId(userId);

        const jobData = {
            title,
            description,
            email,
            phone,
            price,
            dead_line,
            user_id
        };

        if (!title || !description || !email || !phone || !price || !dead_line) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        authedAxiosClient.post("/demand/insert", jobData)
            .then(response => {
                // Manipular a resposta
                console.log("Nova demanda criada:", response.data);
            })
            .catch(error => {
                // Lidar com erros
                console.error("Erro na requisição:", error);
            });
        alert("Oportunidade criada com sucesso!");
        //window.location.href = "/createjob";
    }

    return (
        <>
            <main>
                <NavBar />
                <div className={styles.createJob_container}>
                    <div className={styles.banner}>
                        <h1 className={styles.title}>Novo Projeto</h1>
                        <p>
                            Praesent cursus bibendum nisl tempor efficitur. Pellentesque eget
                            aliquet lorem. Praesent fringilla justo sit amet diam sollicitudin
                            elementum. Mauris sed pharetra tellus.
                        </p>
                        <h2 className={styles.road_line} />
                    </div>

                    <div className={styles.form}>
                        <div className={styles.form_left}>
                            <h1 className={styles.title}>Cadastrar</h1>
                        </div>
                        <FormControl>
                            <input
                                id="id"
                                type="title"
                                className={styles.form_input}
                                placeholder="Título do Projeto..."
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />

                            <textarea
                                rows={4}
                                className={styles.form_input}
                                placeholder="Descrição do Projeto..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </FormControl>

                        <div className={styles.form_row}>
                            <div className={styles.form_additional1}>
                                <FormControl>
                                    <input
                                        type="email"
                                        className={styles.form_input}
                                        placeholder="E-mail..."
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </FormControl>
                            </div>

                            <div className={styles.form_additional1}>
                                <FormControl>
                                    <input
                                        type="tel"
                                        className={styles.form_input}
                                        placeholder="Telefone..."
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </FormControl>
                            </div>
                        </div>

                        <div className={styles.form_footer}>
                            <div className={styles.form_additional2}>
                                <FormControl>
                                    <input
                                        type="number"
                                        className={styles.form_input}
                                        placeholder="Valor..."
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </FormControl>
                            </div>

                            <div className={styles.form_additional2}>
                                <FormControl>
                                    <input
                                        type="date"
                                        className={styles.form_input}
                                        placeholder="Prazo de entrega"
                                        value={dead_line}
                                        onChange={(e) => setDeadLine(e.target.value)}
                                    />
                                </FormControl>
                            </div>
                        </div>
                        <Stack spacing={4} align='right'>
                            <Button
                                onClick={() => {
                                    return router.push({
                                        pathname: "/candidatejob"
                                    })
                                }

                                }
                                colorScheme='teal'
                                size='xs'
                            >
                                Criar Projeto
                            </Button>
                        </Stack>

                    </div>
                </div>
            </main >
            <Footer />
        </>
    )
}