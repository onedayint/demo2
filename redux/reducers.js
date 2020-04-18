import { RESPONSE, SUCCESS } from './action-types'
export  function fetchData(state="init", action) {
    switch(action.type){
        case RESPONSE:
            if (action.data.status === SUCCESS){
                return action.data.data.total_count
            }
        default:
        return state
    }
}