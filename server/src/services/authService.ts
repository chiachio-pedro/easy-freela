import authRepository from '../repositories/authRepository'
import passwordHash from '../utils/passwordHash'
import { makeError } from '../middlewares/errorHandler'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config()

async function signUp(

	name: string,
	email: string,
	password: string,
	accountType: string
  
) {
	const user = await authRepository.findUserByEmail(email)
	if (!user) {
		const passwordHashed = await passwordHash.generatePassword(password)

		if (passwordHashed) {
			const newUser = authRepository.createUser(
				name,
				email,
				passwordHashed,
				accountType
			)
			return newUser
		}
	}
	if (user) {
		throw makeError({ message: 'Email já cadastrado no sistema', status: 400 })
	}
}
export async function login(email: string, password: string) {
	if (!email || !password) {
		throw makeError({ message: 'Email e senha são obrigatórios', status: 400 })
	}
	const user = await authRepository.findUserByEmail(email)

	if (!user) {
		throw makeError({ message: 'Email inválido', status: 400 })
	}

	if (user) {
		const isValid = await passwordHash.validateUser(password, user.password)

		if (isValid) {
			// generate token
			Reflect.deleteProperty(user, 'password')
			const token = jwt.sign(
				{ userId: user.id },
				String(process.env.SECRET_KEY),
				{
					expiresIn: '10h',
				}
			)
			return { token }
		} else {
			throw makeError({ message: 'Senha inválida', status: 400 })
		}
	}
}
export default { signUp, login }
