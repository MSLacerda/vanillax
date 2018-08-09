;(function (root, factory) {

    root.AppActions = factory();

}(this, function () {
    
    var CONSTANTS = {
        INCREMENT: 'INCREMENT',
        DECREMENT: 'DECREMENT'
    }

    var ACTIONS_CREATOR = {
        increment: function() {
            return {
                type: CONSTANTS.INCREMENT
            }
        },
        decrement: function() {
            return {
                type: CONSTANTS.DECREMENT
            }
        }
    }

    return {CONSTANTS: CONSTANTS, ACTIONS: ACTIONS_CREATOR};
}))