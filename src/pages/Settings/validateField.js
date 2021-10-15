export const validateField = (fieldName, value, setState, state) => {
  const newState = state;
  newState[fieldName] = value;
  switch (fieldName) {
    case 'repository':
      newState.repositoryValid = !/\s/.test(value);
      newState.formErrors.repository = !!newState.repositoryValid;
      break;
    case 'command':
      newState.commandValid = !/^\s/.test(value);
      newState.formErrors.command = !!newState.commandValid;
      break;
    default:
      break;
  }
  newState.formValid = !!(newState.repositoryValid && newState.commandValid);
  setState(newState);
};
