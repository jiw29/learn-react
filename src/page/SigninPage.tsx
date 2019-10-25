import React from 'react';
import { Redirect } from 'react-router-dom';
import Form from '../packages/Form/Form';
import TextField from '../packages/Form/TextField';

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
    console.log(e);
    // setTimeout(() => {
    //   this.setState({ redirectToReferrer: true });
    // }, 1000);
  }
  public handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  }
  public handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  }
  public render(): JSX.Element {
    const { from } = this.props.location.state || { from: { pathname: '/' }};
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) { return <Redirect to={from} /> }
    return (
      <Form onSubmit={this.handleSubmit}>
        <TextField
          label="用户名"
          type="text"
          name="username"
          id="username"
          rules={[
            { type: 'string', required: true, trigger: 'blur', msg: '' }
          ]}
        />
        <TextField
          label="密码"
          type="password"
          name="password"
          id="password"
        />
        <button type="submit">登录</button>
      </Form>
    );
  }
}
