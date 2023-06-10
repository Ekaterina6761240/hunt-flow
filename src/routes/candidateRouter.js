import express from 'express';
import { Candidate, Profession, Status } from '../../db/models';

const candidateRouter = express.Router();

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

candidateRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const allProfessions = await Profession.findAll();
  const oneCandidate = await Candidate.findByPk(id, {
    include: [Profession, Status],
  });
  const allVacancy = await Profession.findAll();
  const allStatus = await Status.findAll();

  const initState = {
    title: `{ Hunt Flow } | - Редактировать ${oneCandidate.name} ${oneCandidate.second_name}  `,
  };

  initState.candidate = oneCandidate;
  initState.allVacancy = allVacancy;
  initState.allProfessions = allProfessions;
  initState.allStatus = allStatus;

  res.render('Layout', initState);
});

candidateRouter.put('/:id', async (req, res) => {
  const { name, second_name, email, phone, age, skills, img, pdf, comments } = req.body;

 

  const { id } = req.params;

  let professionFromForm = req.body.professionAdd;
  let statusFromForm = req.body.statusNow;

  if (req.body.profession) {
    professionFromForm = req.body.profession;
  }

  if (req.body.statusChange) {
    statusFromForm = req.body.statusChange;
  }

  const profId = await Profession.findOne({
    where: {
      profession: professionFromForm,
    },
  });
  const prof_id = profId.id;

  const statusId = await Status.findOne({
    where: {
      status: statusFromForm,
    },
  });

  const status_id = statusId.id;

  await Candidate.update(
    { name, email, second_name, age, img, pdf, comments, phone, skills, prof_id, status_id },
    { where: { id: req.params.id } },
  );

  const candidate = await Candidate.findByPk(id, {
    include: [Profession, Status],
  });

  // отправляем candidatA
  res.json(candidate);
});

candidateRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Candidate.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
});

export default candidateRouter;
