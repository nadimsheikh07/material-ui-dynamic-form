import React, { Component } from 'react';
import RenderTextField from './fileds/renderTextField'

class DynamicFormItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { type, onChange } = this.props

        switch (type) {
            case 'number':
                return '';
            case 'password':
                return '';
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