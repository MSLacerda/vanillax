/**
 * Vanillax
 * 
 * @author
 * Matheus Soares.
 * @desc
 * Redux is a predictable state container for JavaScript apps. 
 * Vanillax is a simple version of it made for vannilajs.
 *
 * */

(function (root, factory) {
    root.Vanillax = factory();
}(this, function () {
    /**
     * Redux main Object
     * 
     * Core components.
     */
    var VANILLAX = {};
    /**
     * Store creator
     * Store holds the reducer and state of app
     */
    (function () {

        /**
         * Obs. Is not working yet
         * 
         * @param {*} reducers 
         */
        VANILLAX.combineReducers = function (reducers) {
            return function (state = {}, action) {
                return Object.keys(reducers).reduce(function (nextState, key) {
                    nextState[key] = reducers[key](
                        state[key],
                        action
                    );
                    return nextState;
                }, {});
            };
        };

        /**
         * 
         * @param {*} reducer 
         * @param {*} preloadState 
         * @param {*} middlewares 
         */
        VANILLAX.createStore = function (reducer, preloadState, middlewares) {
            var _self = this;
            _self.middleware = [];
            _self.listeners = [];
            _self.currentState = preloadState;
            _self.reducer = reducer;

            if (middlewares != undefined) {
                _self.middlewares = middlewares.slice();
            }

            return {
                dispatch: function (action) {
                    _self.middlewares.map(function (middleware) {
                        middleware(_self.currentState, action);
                    });
                    _self.currentState = _self.reducer(_self.currentState, action);

                    _self.listeners.map(function (fn) {
                        fn();
                    });
                    return action;
                },
                getState: function () {
                    return _self.currentState;
                },
                subscribe: function(newFn) {
                    if (newFn != undefined) {
                        _self.listeners.push(newFn);
                    }else {
                        throw new Error('newFn is undefined');
                    }
                }
                
            }
        };
        
    }());
    return VANILLAX;
}))
