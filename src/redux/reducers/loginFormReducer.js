import { actionTypes } from "redux-form";

const initialState = {
  view : {
    status: null,
    data: {
      title: 'ORIGINAL TITLE',
      field: 'ZIZOU PRESIDENT',
    },
  },
  edit : {
    status: null,
    data: null,
    changed: null,
  }
};

export const newForm = {...state.data };
newForm[actionTypes.fieldName] = action.fieldValue;

function viewReducer(state = initiualState.view, action) {
  switch (action.type) {
    case 'EDIT_FORM_SUCCESS':
      return {
        ...state,
        status: 'EDIT_FORM_SUCCESS',
        data: action.form
      }
    default:
      return state
  }
}

