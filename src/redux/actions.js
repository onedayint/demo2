import { actions } from './action-types'
export const sendRequestAction = (data) => ({type:actions.REQUEST, data:data})