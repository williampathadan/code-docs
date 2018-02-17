import {
  AUTHORIZE_USER
} from '../actions';

const initialState = {
  authorized: false,
};

export default (state = initialState, action) => {
  switch(action.type) {

    case AUTHORIZE_USER:
      console.log(AUTHORIZE_USER);
      return action.payload;
      
    default:
      return state;

  }
};
