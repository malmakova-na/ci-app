export const validateField = (fieldName, value, setState, state) => {
    let newState = state;
    newState[fieldName] = value;
    switch(fieldName) {
        case 'repository':
          newState.repositoryValid = value.trim().length !== 0;
          newState.formErrors.repository = newState.repositoryValid ? true : false;
          break;
        case 'command':
          newState.commandValid = value.trim().length !== 0;
          newState.formErrors.command = newState.commandValid ? true: false;
          break;
        default:
          break;
      }
      newState.formValid = newState.repositoryValid && newState.commandValid ? true : false;
      setState(newState);
};