import express, { Request, Response } from 'express';

const port = 3000;
const app = express();

app.get('/test', (req: Request, res: Response) => {
   return res.send("Olá NLW");
});

app.post('/test-post', (req: Request, res: Response) => {
   return res.send("Ola NLW Post");
});

app.listen(process.env.PORT || port, () => console.log(`Server is running at port ${port}`));
