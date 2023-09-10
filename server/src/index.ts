import express, { Application, Response, Request } from "express";
import authRoutes from "./routes/authRoute";
import * as dotenv from "dotenv";

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {

  res.send("Olá, mundo!");

});

const port = process.env.PORT || 8080;

app.listen(port, () => {

  console.log(`Servidor rodando na porta ${port}`);
  
});
