import { makeError } from '../middlewares/errorHandler'
import demandRepository from '../repositories/demandRepository'

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
){
	//verificação de tipo de conta 
	const accountType = 'contractor'
	if (accountType !== 'contractor') {
		throw makeError({
			message: 'Somente usuários do tipo "contractor" podem criar demandas.',
			status: 403
		})
	}


	demandRepository.createDemand(title, description, skills, invoice, link, dead_line)
    
}

async function showDemand(){
	const demands = demandRepository.showDemand()
	return demands
}

async function showDemandById(id: number) {
	// eslint-disable-next-line no-useless-catch
	try {
		const demand = await demandRepository.showDemandById(id)
		return demand
	} catch (error) {
		throw error
	}
}

async function updateDemand(id: number, fieldsToUpdate: FieldsToUpdate) {
	// eslint-disable-next-line no-useless-catch
	try {
		await demandRepository.updateDemand(id, fieldsToUpdate)
	}catch (error) {
		throw error
	}
}

async function removeDemand(id: number) {
	// eslint-disable-next-line no-useless-catch
	try {
		const deletedDemand = await demandRepository.removeDemand(id)
		return deletedDemand
	} catch (error) {
		throw error
	}
}
  
export default { createDemand, showDemand, updateDemand, showDemandById, removeDemand }