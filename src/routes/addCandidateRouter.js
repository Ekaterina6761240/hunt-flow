import express from 'express';
import { Profession } from '../../db/models';

const addCandidate = express.Router();

addCandidate.get('/new-candidate', async (req, res) => {
  const vacantions = await Profession.findAll();
  // console.log(vacantions);
  const initState = { vacantions };
  res.render('Layout', initState);
});

export default addCandidate;
