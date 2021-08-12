import './HelloWorld.scss';

// import React, { useState } from 'react';

// const HelloWorld = (props) => {

//   const [isLogin, setLogin] = useState(false);

//   const showAlert = (text="show alert") => {
//     alert(text);
//   }

//   const clickBtnLogin = () => {
//     showAlert('Login');
//     setLogin(true);
//   }
//   const clickBtnLogout = () => {
//     showAlert('Logut');
//     setLogin(false);
//   } 

//   let button;
//   if (isLogin) {
//     button = <button onClick={clickBtnLogout}>Exit</button>;
//   } else {
//     button = <button onClick={clickBtnLogin}>Login</button>;
//   }

//   return (
//     <div className="container-hello">
//       {props.text}<br></br>
//       {button}
//     </div>
//   );
// };

// export default HelloWorld;

import React, { Component } from 'react'

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    }

    // this.clickBtnLogin = this.clickBtnLogin.bind(this);
    // this.clickBtnLogout = this.clickBtnLogout.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
  }
  clickBtn(message, isLogin) {
    alert(message);
    this.setState({ isLogin });
  }
  // clickBtnLogin() {
  //   alert('login');
  //   this.setState({
  //     isLogin: true,
  //   });
  // }
  // clickBtnLogout() {
  //   alert('logout');
  //   this.setState({
  //     isLogin: false,
  //   });
  // }

  render() {
    // let button;
    // if(this.state.isLogin) {
    //   button = <button onClick={this.clickBtn.bind(this, 'logout', false)}>Exit</button>;
    // } else {
    //   button = <button onClick={this.clickBtn.bind(this, 'login', true)}>Login</button>;
    // }
    return (
      <div className="container-hello">
        {this.props.text}
        {/* {button} */}
        {
          this.state.isLogin
          ?  <button onClick={this.clickBtn.bind(this, 'logout', false)}>Exit</button>
          :  <button onClick={this.clickBtn.bind(this, 'login', true)}>Login</button>
        }
      </div>
    )
  }
}
