const compose = (...funcs) => {
    if (funcs.length === 0) return () => {};
    if (funcs.length === 1) return funcs[0];
    return funcs.reduce((a, b) => {
        return (...args) => {
            a(b(...args))
        }
    })
}

const applyMiddleware = (...middlewares) => {
    return (createStore) => (reducer, initState, enhancer) => {
        const store = createStore(reducer, initState);
        let dispatch = store.dispatch;
        const middlewareAPI = {
            getState: store.getState,
            dispatch: action => dispatch(action)
        }
        const chain = middlewares.map(middleware => middleware(middlewareAPI))
        dispatch = compose(...chain)(store.dispatch);
        return {
            ...store,
            dispatch,
        }
    }
}

export default applyMiddleware;