import { Router } from 'express';
import { redirect } from 'react-router-dom';

const authRouter = Router();

authRouter.get('/signin', (req, res) => {
  if (req.session.user) {
    return res.redirect('/candidates');
  }

  res.render('Layout', {});
});

authRouter.get('/signup', (req, res) => {
  if (req.session.user) {
    return res.redirect('/candidates');
  }
  res.render('Layout', {});
});

export default authRouter;
