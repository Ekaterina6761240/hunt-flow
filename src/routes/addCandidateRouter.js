import express from 'express';
import { Profession } from '../../db/models';

const addCandidate = express.Router();

addCandidate.get('/', async (req, res) => {
  const vacantions = await Profession.findAll();
  const initState = { vacantions };
  res.render('Layout', initState);
});

export default addCandidate;
