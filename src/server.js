// @flow
import http from 'http';
import express, {Application, Request, Response} from 'express';
import HelloWorldRouter from './HelloWorldRouter';
import API from './API';

const api: API = new API('', [], [HelloWorldRouter]);

const server: http.Server = http.createServer(api.app);

const onError = (err: Error): void => {
  console.log(err);
};

const onListening = (): void => {
  const host = server.address().address;
  const port = server.address().port;
  
  console.log(`Listening on ${host}:${port}`);
};

server.on('error', onError);
server.on('listening', onListening);
server.listen(20000);
