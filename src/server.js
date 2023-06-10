import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import path from 'path';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';

import candidateRouter from './routes/candidateRouter';
import apiCandRouter from './routes/apiCandRouter';

import addCandidate from './routes/addCandidateRouter';
import apiAddRouter from './routes/apiAddRouter';

import authRouter from './routes/authRouter';
import apiAuthRouter from './routes/apiAuthRouter';
import { authCheckRender, userInsession } from './middlewares/userMiddleware';

require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3000;
const app = express();
const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session.user;
  next();
});

app.use(userInsession);

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/api/auth', apiAuthRouter);

app.use('/new-candidate', authCheckRender, addCandidate); // Катя
app.use('/api/new-candidate', authCheckRender, apiAddRouter); // Катя

app.use('/candidates', authCheckRender, candidateRouter); // Евгений
app.use('/api/v1/candidates', authCheckRender, apiCandRouter); // Евгений

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
