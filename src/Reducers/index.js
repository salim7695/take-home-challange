import { combineReducers } from 'redux'

import appReducer from './appReducer'

const combinedReducer = combineReducers({ appReducer: appReducer })

const rootReducer = (state, action) => {
    return combinedReducer(state, action)
}

export default rootReducer
