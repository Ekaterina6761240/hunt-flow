import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const apiAuthRouter = express.Router();

apiAuthRouter.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'не все заполнил' });
  }

  const searchEmail = await User.findOne({
    where: {
      email,
    },
  });
  if (searchEmail) {
    return res.status(400).json({ message: 'уже есть такая почта' });
  }

  // погнали создавать юзера

  const hashPass = await bcrypt.hash(password, 3);

  const newUser = await User.create({
    name,
    email,
    password: hashPass,
  });

  req.session.user = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
  };

  res.sendStatus(200);
});

apiAuthRouter.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    return res.status(400).json({ message: 'не все заполнили' }); // не завершабщая операция
  }
  const currentUser = await User.findOne({
    where: { email },
  });
  if (!currentUser || !(await bcrypt.compare(password, currentUser.password))) {
    return res.status(401).json({ message: 'нет такого email  ' });
  }

  req.session.user = {
    id: currentUser.id,
    name: currentUser.name,
    email: currentUser.email,
  };
  res.sendStatus(200);
});

//выход
apiAuthRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.sendStatus(200);
});
export default apiAuthRouter;
