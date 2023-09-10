import { Request, Response } from 'express'
import authService from '../services/authService'

export async function signUp(req: Request, res: Response): Promise<void> {

	try {

		const { name, email, password, accountType } = req.body
		const token = await authService.signUp(name, email, password, accountType)
		res.json({ token })

	} catch (error) {

		res.status(400).json({ error })

	}
  
}
