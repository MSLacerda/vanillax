(function (root) {

    /**
     * 
     * this is a demo application to test vanillax
     * 
     */
    var vanillax = root.Vanillax;
    var actions = root.AppActions;
    var store = {};

    var increment = actions.ACTIONS.increment();
    var decrement = actions.ACTIONS.decrement();

    // Defining reducer of the app
    var reducer = function (appState, action) {
        switch (action.type) {
            case actions.CONSTANTS.INCREMENT:
                appState.value++;

                return appState;
            
            case actions.CONSTANTS.DECREMENT:
                appState.value--;

                return appState;
        }
    }

    store = vanillax.createStore(reducer, {value: 0}, []);
    

    console.log('initial state -> ', store.getState());

    console.log('dispatching -> ', increment);
    store.dispatch(increment);
    console.log('new state -> ', store.getState());

    console.log('dispatching -> ', decrement);
    store.dispatch(decrement);
    console.log('new state -> ', store.getState());

}(this))