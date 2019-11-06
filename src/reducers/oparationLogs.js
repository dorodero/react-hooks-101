import { ADD_OPARATION_LOG, DELETE_ALL_OPARATION_LOGS } from '../actions';

const oparationLogs = (state = [], action) => {
    switch(action.type) {
        case ADD_OPARATION_LOG:
            const operationLog = {
                description: action.description,
                operatedAt: action.operatedAt
            }
            return [operationLog, ...state]
        case DELETE_ALL_OPARATION_LOGS:
            return []
        default:
            return state
    }
}

export default oparationLogs