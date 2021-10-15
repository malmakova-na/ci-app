import { useState } from 'react';

export const useSettings = () => {
  const [submitted, setSubmitted] = useState(false);
  const [state, setState] = useState({
    repository: '',
    command: 'npm ci npm run build',
    branch: 'master |',
    formValid: false,
    repositoryValid: false,
    commandValid: true,
    formErrors: { repository: null, command: null },
    sended: false,
    requestAnswer: '',
    time: 10,
  });
  const stateValue = (name, value) => {
    const newState = state;
    state[name] = value;
    setState(newState);
  };

  const clearInputs = (e) => {
    e.preventDefault();

    stateValue('repository', '');
    stateValue('command', '');
    stateValue('branch', '');
    stateValue('commandValid', false);
    stateValue('formErrors', { repository: null, command: null });
    setSubmitted(true);
  };
  const clearInput = (name) => {
    stateValue(name, '');
    if (name !== 'brunch') {
      stateValue(`${name}` + 'Valid', false);
      stateValue('formValid', false);
    }
    setSubmitted(true);
  };
  const clearRepository = (e) => {
    e.preventDefault();
    clearInput('repository');
  };
  const clearCommand = (e) => {
    e.preventDefault();
    clearInput('command');
  };
  const clearBrunch = (e) => {
    e.preventDefault();
    console.log('brunch', e.target.name);
    clearInput('brunch');
  };
  return [state, submitted, setSubmitted,
    stateValue, clearInputs, clearInput,
    clearRepository, clearCommand, clearBrunch];
};
