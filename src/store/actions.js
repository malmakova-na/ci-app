export const formSubmited = (formData) => {
    return {
        type: 'FORM_SUBMITED',
        ...formData
    }    
}

export const downloadData = (data) => {
    return {
        type: 'DOWNLOAD_DATA',
        settings: data,
        submitted: true
    }
}

