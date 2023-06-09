import express from 'express';
import { Candidate, Profession } from '../../db/models';

const vacancy = express.Router();

vacancy.get('/', (req, res) => {
  const initState = {
    title: '{ Hunt Flow } | Все вакансии',
  };
  res.render('Layout', initState);
});

vacancy.get('/:id', async (req, res) => {
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

vacancy.put('/:id', async (req, res) => {
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

vacancy.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Candidate.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
});

export default vacancy;
