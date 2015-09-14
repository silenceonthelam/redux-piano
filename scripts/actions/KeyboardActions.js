var AppDispatcher     = require('../AppDispatcher'),
    KeyboardConstants = require('../AppConstants');

var KeyboardActions = {
    recalcNumKeys: function() {
        AppDispatcher.dispatch({
            actionType: KeyboardConstants.KEYBOARD_RECALC_NUM_KEYS
        });
    }
};

module.exports = KeyboardActions;