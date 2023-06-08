import express from 'express';
import fs from 'fs';
// import sharp from 'sharp';
import { Candidate, Profession } from '../../db/models';
import multerMod from '../midlewar/multerMid';

const apiAddRouter = express.Router();

apiAddRouter.post('/new-candidate', async (req, res) => {
  // multerMod.single('pdf')
  try {
    const { name, secondname, email, phone, comments, img, experience, age, vacantions } = req.body;
    // console.log(req.file);
    // if (!req.file) {
    //   return res.status(400).send({ message: 'Заполните все поля!' });
    // }
    // const fileNamePdf = `${Date.now()}.pdf`;

    // await fs.writeFile(`../../public/pdf/${fileNamePdf}`);

    // console.log('=======', req.file.filename);
    // console.log(req.file);
    const searchEmail = await Candidate.findOne({ where: { email: req.body.email } });

    if (searchEmail) {
      return res.status(400).send({ message: 'Такой кандидат уже есть!' });
    }

    await Candidate.create({
      name,
      secondname,
      email,
      phone,
      comments,
      img,
      // pdf,
      skills: experience,
      age,
      prof_id: vacantions,

      // name: req.body.name,
      // second_name: req.body.secondname,
      // email: req.body.email,
      // age: req.body.age,
      // phone: req.body.phone,
      // comments: req.body.comments,
      // // img: req.body.img,
      // // pdf: fileNamePdf,
      // prof_id: req.body.vacantions,
      // skills: req.body.experience,
    });
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
  }
});

export default apiAddRouter;
