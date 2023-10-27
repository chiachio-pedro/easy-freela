import { makeError } from '../middlewares/errorHandler'
import demandRepository from '../repositories/demandRepository'

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

export default { createDemand }