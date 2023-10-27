import knex from 'knex'
import config from '../../knexfile'

const db = knex(config)
interface FieldsToUpdate {
	title?: string;
	description?: string;
	skills?: string;
	invoice?: boolean;
	link?: string;
	dead_line?: Date | null;
	demand_id?: number | null;
  }

async function createDemand(
	title: string,
	description: string,
	skills: string,
	invoice: boolean,
	link: string,
	dead_line: Date
) {
	try {
		await db('job_demands').insert({
			title,
			description,
			skills,
			invoice,
			link,
			dead_line,
		})
	} catch (error) {
		console.error(error)
	}
}

async function getUserType(email: string) {
	try {
		db('users').where('account_type', email).first()
	} catch (error) {
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

async function showDemandById(id: number) {
	// eslint-disable-next-line no-useless-catch
	try {
		const demand = await db('job_demands').where('id', id).first()
		return demand
	} catch (error) {
		throw error
	}
}

async function updateDemand(id: number, fieldsToUpdate: FieldsToUpdate) {
	// eslint-disable-next-line no-useless-catch
	try {
		const updateData = {
			...fieldsToUpdate,
		}
		await db('job_demands').where('id', id).update(updateData)
	} catch (error) {
		throw error
	}
}

export default { createDemand, getUserType, showDemand, updateDemand, showDemandById}
