import React, { Component } from 'react';
import DynamicFormFooter from './dynamicFormFooter';
import DynamicFormItem from './dynamicFormItem';
import Grid from '@material-ui/core/Grid';



class DynamicForm extends Component {
  constructor(props) {
    super(props)
  }

  onValueChanged = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
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
          <DynamicFormFooter {...buttons} />
        </form>
      </React.Fragment>
    );
  }
}


export default DynamicForm;