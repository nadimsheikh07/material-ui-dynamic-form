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
    ],
    buttons: {
        save: true,
        clear: true,
        cancel: true,
    }
}