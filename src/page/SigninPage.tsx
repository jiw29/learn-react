import React from 'react';
import { Redirect } from 'react-router-dom';
export default class SiginPage extends React.Component<any, any> {
  constructor(props: {}) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      loading: false,
      isLogin: false,
      name: '',
      password: '',
    };
  }

  public handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setTimeout(() => {
      this.setState({ redirectToReferrer: true });
    }, 1000);
  }
  public handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  }
  public handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  }
  public render(): JSX.Element {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) { return <Redirect to={from} />; }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>用户名：</label>
          <input type="text" name="username" id="username" onChange={this.handleUsernameChange} />
          <label>密码：</label>
          <input type="text" name="password" id="password" onChange={this.handlePasswordChange} />
          <button type="submit">登录吧 骚年</button>
        </form>
      </div>
    );
  }
}
