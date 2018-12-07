import React from 'react';

export default class PublicPage extends React.Component<any, any> {
  constructor(props: {}) {
    super(props);
  }
  public render(): JSX.Element {
    return (<div>Hello, React Router!</div>);
  }
}
