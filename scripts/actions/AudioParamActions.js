var AppDispatcher       = require('../AppDispatcher'),
    AudioParamConstants = require('../AppConstants');

var AudioParamActions = {
    updateValue: function(val, id) {
        AppDispatcher.dispatch({
            actionType: AudioParamConstants.AUDIO_PARAM_UPDATE_VALUE,
            id: id,
            val: val
        });
    }
};

module.exports = AudioParamActions;