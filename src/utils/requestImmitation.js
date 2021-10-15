import { getDate, getFullDate } from './date';

const errorImitation = () => {
  console.log(getDate());
  return 'error';
};
const successImmitation = (state, handler) => {
  handler({ // сохраняю данные из формы
    repository: state.repository,
    command: state.command,
    branch: state.branch,
    status: 'ok',
    date: getDate(),
    fullDate: getFullDate(),
    hush: 136778, // временно
    num: 1368,
  });

  return 'ok';
};
export const requestImmitation = (state, handler, stateValue, setSubmitted) => {
  setTimeout(() => { // имитирую загрузку процесс клонирования репозитория
    // stateValue("requestAnswer", successImmitation(state, handler));
    // stateValue("requestAnswer", errorImitation())
    stateValue('sended', false);
    setSubmitted(true);
  }, 3000);
};
