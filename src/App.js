import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import MyAppBar from './appBar';
import DynamicForm from './component/dynamicForm';
import { formData } from './component/form';

function App() {
  return (
    <React.Fragment>
      <MyAppBar />
      <br />
      <CssBaseline />
      <Container>
        <DynamicForm formData={formData} />
      </Container>
    </React.Fragment>
  );
}

export default App;
