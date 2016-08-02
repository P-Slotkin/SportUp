const AppDispatcher = require('../dispatcher/dispatcher.js');
const ErrorConstants = require('../constants/error_constants.js');

const ErrorActions = {
  setErrors(form, errors) {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.SET_ERRORS,
      form: form,
      errors: errors
    });
  },

  clearErrors() {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS
    });
  }
};

module.exports = ErrorActions;
