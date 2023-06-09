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
  const oneCandidate = await Candidate.findByPk(id, {
    include: Profession,
  });
  const allVacancy = await Profession.findAll();
  const initState = {
    title: `{ Hunt Flow } | - Редактировать ${oneCandidate.name} ${oneCandidate.second_name}  `,
  };

  initState.candidate = oneCandidate;
  initState.allVacancy = allVacancy;

  res.render('Layout', initState);
});

candidateRouter.put('/:id', async (req, res) => {
  const {
    name,
    second_name,
    email,
    phone,
    age,
    skills,
    professionAdd,
    profession,
    img,
    pdf,
    comments,
  } = req.body;

  console.log('-->', req.body);

  const { id } = req.params;

  let professionFromForm = req.body.professionAdd;

  if (req.body.profession) {
    professionFromForm = req.body.profession;
  }

  const profId = await Profession.findOne({
    where: {
      profession: professionFromForm,
    },
  });
  const prof_id = profId.id;
  console.log('-->const prof_id', prof_id);
  await Candidate.update(
    { name, email, second_name, age, img, pdf, comments, phone, skills, prof_id },
    { where: { id: req.params.id } },
  );

  const candidate = await Candidate.findByPk(id, {
    include: Profession,
  });
  console.log('candidate-->', candidate);
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
