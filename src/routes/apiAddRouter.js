import express from 'express';

import { Candidate } from '../../db/models';
import multerMod from '../middlewares/userMiddleware';

const apiAddRouter = express.Router();

apiAddRouter.post(
  '/',
  multerMod.fields([
    { name: 'img', maxCount: 1 },
    { name: 'pdf', maxCount: 1 },
  ]),

  async (req, res) => {
    try {
      console.log('req.file:', req.files);
      console.log('req.body:', req.body);

      if (!req.files) {
        return res.status(400).send({ message: 'Заполните все поля!' });
      }

      const searchEmail = await Candidate.findOne({ where: { email: req.body.email } });

      if (searchEmail) {
        return res.status(400).send({ message: 'Такой кандидат уже есть!' });
      }

      await Candidate.create({
        name: req.body.name,
        second_name: req.body.secondname,
        email: req.body.email,
        age: req.body.age,
        phone: req.body.phone,
        comments: req.body.comments,
        img: req.files.img[0].filename,
        pdf: req.files.pdf[0].filename,
        prof_id: req.body.vacantions,
        skills: req.body.experience,
      });
      res.sendStatus(200);
    } catch (e) {
      res.sendStatus(500);
      // console.log(e);
    }
  },
);

export default apiAddRouter;
