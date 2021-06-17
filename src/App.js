import React from 'react'
import Counter from './Counter';
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'


const reducer = (state = {count: 0}, action) => {
    switch(action.type) {
        case 'increase':
            return {count: state.count + 1}
        case 'decrease':
            return {count: state.count - 1}
        default:
            return state;
    }
}

const store = createStore(reducer);


const mapStateToProps = (state) => {
    return {
        val: state.count,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncreaseClick: () => dispatch({ type: 'increase' })
    }
}

const WrapperShow = connect(mapStateToProps, mapDispatchToProps)(Counter)

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <WrapperShow />
            </Provider>
        </div>
    )
}

export default App;