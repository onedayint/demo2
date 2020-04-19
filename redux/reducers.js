import { actions } from './action-types'
export  function fetchData(state=[], action) {
    switch(action.type){
        case actions.SUCCESS:
            return action.data.items
        default:
        return state
    }
}