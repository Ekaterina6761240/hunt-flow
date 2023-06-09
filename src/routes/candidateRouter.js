import { Router } from 'express';
import { Candidate, Profession, Status } from '../../db/models';

const candidateRouter = Router();

// Ручка для отображения всех кандидатов
candidateRouter.get('/', async (req, res) => {
  try {
    const allCandidates = await Candidate.findAll({ include: Profession });
    const allProfessions = await Profession.findAll();
    const allStatuses = await Status.findAll();
    const initState = { allCandidates, allProfessions, allStatuses };
    res.render('Layout', initState);
  } catch (error) {
    console.error('Произошла ошибка при получении данных:', error);
    res.status(500).send('Произошла ошибка при получении данных');
  }
});

export default candidateRouter;
