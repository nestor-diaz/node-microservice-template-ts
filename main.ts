import 'reflect-metadata';
import './src/types';
import { useContainer } from 'routing-controllers';
import { Container } from 'typedi';

useContainer(Container);

import { Microservice } from './src/Microservice';
export default new Microservice();
