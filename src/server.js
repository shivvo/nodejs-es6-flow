import http from 'http';
import express, {Application, Request, Response} from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('hello, world');
});

const server: http.Server = http.createServer(app);

const onError = (err: Error): void => {
  console.log(err);
};

const onListening = (): void => {
  const host = server.address().host;
  const port = server.address().port;
  
  console.log(`Listening on ${host}:${port}`);
};

server.on('error', onError);
server.on('listening', onListening);
server.listen(20000);
