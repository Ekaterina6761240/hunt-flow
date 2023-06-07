import express from 'express';

const vacancy = express.Router();

vacancy.get('/', (req, res) => {
  const initState = {
    title: '{ Hunt Flow } | Все вакансии',
  };
  res.render('Layout', initState);
});

export default vacancy;
