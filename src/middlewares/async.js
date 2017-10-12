/*
 This async middleware is custom code. it does the following
 1. The axios call used in actions\index.js file returns a Promise in payload of the action returned
    axios.get('https://jsonplaceholder.typicode.com/users');
 2. And once the Promise is resolved, it returns a normal data as response
 3. The data is the user array list
*/
export default function({dispatch}){

  /*
  ES5 format
  return function(next){
      return function(action){
      console.log(action);

      next(action);
    }
}
  */
    return next=>action=>{
      console.log('inside async middleware');
      console.log('action:',action);
      // IF the payload does not exist in action or if the payload does not have the 'then' property. 'then' is the promise helper property
      // In round 1 of iteration, the payload is Promise
      // In round 2 of iteration, the payload is data (not promise)
      if(!action.payload || !action.payload.then){
        console.log('Payload is not Promise. So return next(action)')
        return next(action);
      }
    console.log('we have a promise in the payload of action ',action);

    // make sure the actions promise resolves(wait till request is complete)
    action.payload.then(function(response){
      //Create a new action with old type, but replace the promise with the 'response' data
      // The response contains the data (array of the user list)
      console.log('action.payload.then-> response:',response);
      // the new action contains type=fetch_users and payload=data(from response)
      const newAction={...action,payload:response};
      console.log('newAction:',newAction);
      // Dispath sends the new action to run through every middleware again. (next(action) will only move to next action)
      dispatch(newAction);
    });

    //  next(action); // Send this action to the next middleware. If not found then send to the reducers
    };
}
