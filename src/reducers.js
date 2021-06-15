// import {combineReducers} from 'redux'
import combineReducers from "./combineReducers";
const chatReducers = (state = '', action) => {
    switch(action.type) {
        case 'chat':
            return 'chat';
        case 'slience':
            return 'slience';
        default:
            return state;
    }
}

const counterReducers = (state = 0, action) => {
    switch(action.type) {
        case 'ADD':
            return state + 1;
        case 'DEC':
            return state - 1;
        default:
            return state;
    }
}

// const reducers = (state = {}, action) => {
//     return {
//         counter: counterReducers(state.counter, action),
//         chat: chatReducers(state.chat, action),
//     }
// }

const reducers = combineReducers({
    counter: counterReducers,
    chat: chatReducers,
})

export default reducers;