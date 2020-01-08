import React, { Component } from 'react';
import DynamicFormFooter from './dynamicFormFooter';
import DynamicFormItem from './dynamicFormItem';



class DynamicForm extends Component {
  constructor(props) {
    super(props)
  }

  onValueChanged = (event) => {
    console.log('onValueChanged', event)
  }

  render() {
    const { controls, buttons } = this.props.formData

    return (
      <React.Fragment>
        <form>
          {controls.map((data) => (
            <DynamicFormItem key={data.id} {...data} onChange={this.onValueChanged} />
          ))}
          <DynamicFormFooter {...buttons} />
        </form>
      </React.Fragment>
    );
  }
}


export default DynamicForm;