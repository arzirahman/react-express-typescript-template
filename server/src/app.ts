import express from 'express';

const appRouter = express.Router();

appRouter.use(express.json());

appRouter.get('/hello', (req, res) => {
    return res.send('hello');
});

export default appRouter;