function viewReducer(state = initialState.view, action) {
  switch (action.type) {
    case constants.EDIT_FORM_SUCCESS:
      return {
        ...state,
        status: constants.EDIT_FORM_SUCCESS,
        data: action.form,
      };
    default:
      return state;
  }
}
