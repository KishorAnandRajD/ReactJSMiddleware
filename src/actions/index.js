import {FETCH_USERS} from './types';
import axios from 'axios';

// Constant values for users
export function fetchUsers(){
  console.log("inside actions index file fetchUsers function");
// Static users available in https://jsonplaceholder.typicode.com/users
// Axios promise request. The return contains Promise.
  const axiosrequest=axios.get('https://jsonplaceholder.typicode.com/users');
  console.log("After axiosrequest call axiosrequest:",axiosrequest);
  // the payload value returned(axiosrequest) is a Promise from the URL
  return{
    type:FETCH_USERS,
    payload: axiosrequest
  };

}
