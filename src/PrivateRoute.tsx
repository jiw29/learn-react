import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class PrivateRoute extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: true,
      isAuthenticated: false,
    };
  }
  public componentDidMount = () => {
    console.log('PrivateRoute');
    setTimeout(() => {
      this.setState({
        isAuthenticated: false,
        loading: false,
      });
    }, 1000);
  }
  public render = (): JSX.Element => {
    const { component: Component, ...rest } = this.props;
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return (
      <Route
        {...rest}
        render={(props) => (this.state.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location },
            }}
          />
        ))
        }
      />
    );

  }
}
