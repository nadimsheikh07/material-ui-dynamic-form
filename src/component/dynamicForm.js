import React, { Component } from 'react';
import DynamicFormFooter from './dynamicFormFooter';
import DynamicFormItem from './dynamicFormItem';
import Grid from '@material-ui/core/Grid';

const initialState = {

};

class DynamicForm extends Component {
  constructor(props) {
    super(props)
    this.state = initialState;
  }

  onValueChanged = (event) => {
    console.log(event.target)
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  onCancel = (event) => {
    event.preventDefault();
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  }

  render() {
    const { controls, buttons, layout } = this.props.formData
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <Grid container spacing={layout.spacing}>

            {controls.map((data) => (
              <Grid item xs={layout.xs} sm={layout.sm} md={layout.md} lg={layout.lg} xl={layout.xl} key={data.id}>
                <DynamicFormItem  {...data} onChange={this.onValueChanged} />
              </Grid>
            ))}

          </Grid>
          <DynamicFormFooter {...buttons} onCancel={this.onCancel} />
        </form>
      </React.Fragment>
    );
  }
}


export default DynamicForm;