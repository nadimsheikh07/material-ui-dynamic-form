export const formData = {
    controls: [
        {
            id: 'first-name',
            name: 'first_name',
            label: 'First Name',
            type: 'text',
            helperText: 'Please provide first name',
            defaultValue: '',
            isRequired: true
        },
        {
            id: 'last-name',
            name: 'last_name',
            label: 'Last Name',
            type: 'text',
            helperText: 'Please provide last name',
            defaultValue: '',
            isRequired: true
        },
        {
            id: 'phone',
            name: 'phone',
            label: 'Phone',
            type: 'number',
            helperText: 'Please provide phone number',
            defaultValue: '',
            isRequired: true
        },
        {
            id: 'password',
            name: 'password',
            label: 'Password',
            type: 'password',
            helperText: 'Please provide password',
            defaultValue: '',
            isRequired: true
        },
        {
            id: 'address',
            name: 'address',
            label: 'address',
            type: 'multiline',
            helperText: 'Please provide address',
            defaultValue: '',
            isRequired: true
        },
    ],
    layout: {
        spacing: 6,
        xs: 12,
        sm: 12,
        md: 6,
        lg: 6,
        xl: 4,
    },
    buttons: {        
        cancel: true,
    }
}