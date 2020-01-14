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
            id: 'last-name2',
            name: 'last_name',
            label: 'Last Name',
            type: 'number',
            helperText: 'Please provide last name',
            defaultValue: '',
            isRequired: true
        }, {
            id: 'last-name3',
            name: 'last_name',
            label: 'Last Name',
            type: 'text',
            helperText: 'Please provide last name',
            defaultValue: '',
            isRequired: true
        },
    ],
    layout: {
        spacing: 6,
        xs: 12,
        sm: 12,        
        md: 6,
        lg: 12,
        xl: 4,
    },
    buttons: {
        save: true,
        clear: true,
        cancel: false,
    }
}