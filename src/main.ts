import 'reflect-metadata';
import './types';
import { useContainer } from 'routing-controllers';
import { Container } from 'typedi';

useContainer(Container);

import { Microservice } from './config/Microservice';
export default new Microservice();
