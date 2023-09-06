import express, { Request, Response } from 'express';

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send('Olá, mundo!')
  })

  const port = 8080
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})