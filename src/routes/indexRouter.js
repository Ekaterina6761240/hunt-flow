import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = {
    title: '{ Hunt Flow } | Speed up the recruiting process',
  };
  res.render('Layout', initState);
});

export default router;
