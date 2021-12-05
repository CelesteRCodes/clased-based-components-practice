import classes from './User.module.css';

import {Component} from 'react';

// class based component
class User extends Component {
  componentWillUnmount() {
    console.log('User will mount')
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
};

// functional component
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
