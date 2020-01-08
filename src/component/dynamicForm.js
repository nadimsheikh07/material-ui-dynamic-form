import React, { Component } from 'react';
import DynamicFormFooter from './dynamicFormFooter';
import DynamicFormItem from './dynamicFormItem';
import Grid from '@material-ui/core/Grid';



class DynamicForm extends Component {
  constructor(props) {
    super(props)
  }

  onValueChanged = (event) => {
    console.log('onValueChanged', event.target.value)
  }

  render() {
    const { controls, buttons, layout } = this.props.formData
    console.log(layout)

    return (
      <React.Fragment>
        <form>
          <Grid container spacing={layout.spacing}>

            {controls.map((data) => (
              <Grid item  xs={layout.xs} sm={layout.sm} md={layout.md} lg={layout.lg} xl={layout.xl} key={data.id}>
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