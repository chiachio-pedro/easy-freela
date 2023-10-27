import knex from 'knex'
import config from '../../knexfile'


const db = knex(config)

async function createDemand(
	title: string,
	description: string,
	skills: string,
	invoice: boolean,
	link: string,
	dead_line: Date,
){
	try{
		await db('job_demands').insert({
			title,
			description,
			skills,
			invoice,
			link,
			dead_line
		})

	}catch(error){
		console.error(error)
	}
}

async function getUserType(email: string){
	try{
		db('users').where('account_type', email).first()
	}catch(error){
		console.error(error)
	}
}

async function showDemand() {
	try {
		const demands = await db('job_demands').select('*')
		return demands
	} catch (error) {
		console.error(error)
	}
}

export default { createDemand, getUserType, showDemand }