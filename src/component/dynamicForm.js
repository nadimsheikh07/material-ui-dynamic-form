import React, { Component } from 'react';
import RenderTextField from './fileds/renderTextField'
import DynamicFormFooter from './dynamicFormFooter';



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
          {controls.map((data) => {
            switch (data.type) {
              case 'text':
                return <RenderTextField key={data.id} {...data} onChange={this.onValueChanged.bind(this)} />;
              default:
                return '';
            }
          })}


          <DynamicFormFooter {...buttons} />
        </form>
      </React.Fragment>
    );
  }
}


export default DynamicForm;