
import { combineReducers } from 'redux'

const isAuthenticated = ( state = false, action )=>{
    switch(action.type){
        case 'AUTH':
            return action.reddit;
        default:
            return state
    }
}

const currency = ( state = "ALL", action )=>{
    switch(action.type){
	case 'CURRENCY':
	    return action.reddit
	default:
	    return state
    }
}

const auth = combineReducers({
    currency,
    isAuthenticated
})

export default auth
