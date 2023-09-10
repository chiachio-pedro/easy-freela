import bcrypt from 'bcrypt'
import * as dotenv from 'dotenv'
dotenv.config()

const saltRounds = Number(process.env.SALT_ROUNDS)
async function generatePassword(password: string) {

	const passwordHash = await bcrypt.hash(password, saltRounds)
	return passwordHash


}

export default {

	generatePassword
  
}