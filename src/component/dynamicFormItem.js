import React, { Component } from 'react';
import RenderTextField from './fileds/renderTextField'
import RenderPasswordField from './fileds/renderPasswordField'

class DynamicFormItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { type, onChange } = this.props

        switch (type) {
            case 'number':
                return <RenderTextField {...this.props} onChange={onChange} type="number" />;
            case 'multiline':
                return <RenderTextField {...this.props} onChange={onChange} multiline />;
            case 'password':
                return <RenderPasswordField {...this.props} onChange={onChange} />;
            case 'checkbox':
                return '';
            case 'textarea':
                return '';
            case 'date':
                return '';
            case 'datetime':
                return '';
            case 'time':
                return '';
            case 'select':
                return '';
            case 'multiselect':
                return '';
            default:
                return <RenderTextField {...this.props} onChange={onChange} />;
        }
    }
}

export default DynamicFormItem;