import {FETCH_USERS} from '../actions/types';



export default function(state=[],action){
  console.log('inside users reducer');
  console.log('action.type:',action.type);
  switch (action.type) {

    case FETCH_USERS:
      // To do the debugging at this point use the command 'debugger'
      //debugger
      console.log("action.payload:",action.payload);
    //  return [...state, ...action.payload]; // concat values from payload to state and return  (state - existing list of users, action.payload - new list of users)
      return [...state, ...action.payload.data]; // concat values from payload to state and return  (state - existing list of users, action.payload - new list of users)
  }
  return state;
}
