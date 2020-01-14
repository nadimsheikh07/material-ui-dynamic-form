import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import MyAppBar from './appBar';
import DynamicForm from './component/dynamicForm';
import { formData } from './component/form';

class App extends Component {

  onSubmit = (event) => {
    console.log(event)
  }

  render() {
    return (
      <React.Fragment>
        <MyAppBar />
        <br />
        <CssBaseline />
        <Container>
          <DynamicForm formData={formData} onSubmit={this.onSubmit} />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
