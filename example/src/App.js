import React, { Component } from 'react';

import { ExampleComponent, Loader } from 'react-library-hello-world';

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text='Modern React component module' />
        <Loader loading='true' />
      </div>
    )
  }
}
