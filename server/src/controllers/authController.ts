import { Request, Response } from "express";
import authService from "../services/authService";

export async function signUp(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, password, accountType } = req.body;

    await authService.signUp(name, email, password, accountType);
    res.status(200).json({ message: "Cadastro efetuado com sucesso!" });
  } catch (error) {
    res.status(400).json({ error });
  }
}

export async function login(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;
    const session = await authService.login(email, password);
    res
      .status(200)
      .json({ session: session, message: "Login efetuado com sucesso!" });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
}
