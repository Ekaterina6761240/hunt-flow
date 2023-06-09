import { Router } from 'express';
import { Candidate, Profession, Status } from '../../db/models';

const { Op } = require('sequelize');

const candidateRouter = Router();

// Ручка - отправляет всех кандидатов по клику на 'Все'
candidateRouter.post('/', async (req, res) => {
  try {
    const allCandidates = await Candidate.findAll({ include: Profession });
    res.json(allCandidates);
  } catch (error) {
    console.error('Произошла ошибка при получении данных:', error);
    res.status(500).send('Произошла ошибка при получении данных');
  }
});

// Ручка - отправляет всех кандидатов по клику на 'Отказ'
candidateRouter.post('/refusal', async (req, res) => {
  try {
    const statCandidates = await Candidate.findAll({
      where: { status_id: 7 },
      include: [{ model: Status }, { model: Profession }],
    });
    res.json(statCandidates);
  } catch (error) {
    console.error('Произошла ошибка при получении данных:', error);
    res.status(500).send('Произошла ошибка при получении данных');
  }
});

// Ручка - отправляет всех кандидатов по клику на 'Новые'
candidateRouter.post('/news', async (req, res) => {
  try {
    const currentDate = new Date();
    const startDate = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
    const allNewCandidates = await Candidate.findAll({
      where: {
        createdAt: {
          [Op.lt]: currentDate,
          [Op.gt]: startDate,
        },
        status_id: 1,
      },
      include: [{ model: Status }, { model: Profession }],
    });
    res.json(allNewCandidates);
  } catch (error) {
    console.error('Произошла ошибка при получении данных:', error);
    res.status(500).send('Произошла ошибка при получении данных');
  }
});

// Ручка - отправляет всех кандидатов по клику на определенную профессию
candidateRouter.post('/:profId', async (req, res) => {
  try {
    const { profId } = req.params;
    const profCandidates = await Candidate.findAll({
      where: { prof_id: profId },
      include: {
        model: Profession,
      },
    });
    res.json(profCandidates);
  } catch (error) {
    console.error('Произошла ошибка при получении данных:', error);
    res.status(500).send('Произошла ошибка при получении данных');
  }
});

export default candidateRouter;
