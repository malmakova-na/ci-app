export const formSubmited = (formData) => ({
  type: 'FORM_SUBMITED',
  ...formData,
});

export const downloadData = (data) => ({
  type: 'DOWNLOAD_DATA',
  settings: data,
  submitted: true,
});
