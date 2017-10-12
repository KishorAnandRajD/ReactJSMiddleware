import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class UserList extends Component{

componentWillMount(){
  // Call the action creator method
  console.log("inside componentWillMount");
  console.log("this.props.usersprop:",this.props.usersprop);
  this.props.fetchUsers();
}

renderUser(user){
  console.log("inside renderUser");
  /* This was for the static user list in actions
  return (
    <div className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">Cheese Factory</p>
        <a className="btn btn-primary">Email</a>
    </div>
  );
  */
  return (
    <div className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company.name}</p>
        <a className="btn btn-primary" href={user.website}>Website</a>
    </div>
  );
}

  render()  {
    console.log("inside render");
    return(
        <div className="user-list">
            {this.props.usersprop.map(this.renderUser)}
        </div>
    );
  }
}

function mapStateToProps(state){
  console.log("inside mapStateToProps:state.users->",state.users);
  return {usersprop:state.users};
}

export default connect (mapStateToProps,actions)(UserList);
