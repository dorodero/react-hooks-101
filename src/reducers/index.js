import { combineReducers } from 'redux';

import events from './events';
import operationLogs from './oparationLogs';

export default combineReducers({ events, operationLogs })