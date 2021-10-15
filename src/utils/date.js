const getMonth = (month) => {
  let fMonth = '';
  switch (month) {
    case 0: fMonth = 'января'; break;
    case 1: fMonth = 'февраля'; break;
    case 2: fMonth = 'марта'; break;
    case 3: fMonth = 'апреля'; break;
    case 4: fMonth = 'мае'; break;
    case 5: fMonth = 'июня'; break;
    case 6: fMonth = 'июля'; break;
    case 7: fMonth = 'августа'; break;
    case 8: fMonth = 'сентября'; break;
    case 9: fMonth = 'октября'; break;
    case 10: fMonth = 'ноября'; break;
    case 11: fMonth = 'декабря'; break;
  }
  return fMonth;
};
const getForm = (value) => (value < 10 ? `0${value}` : value);
const date = new Date();
const hours = getForm(date.getHours());
const minutes = getForm(date.getMinutes());
const month = getMonth(date.getMonth());
const day = date.getDay();

export const getFullDate = () => date;
export const getDate = () => `${day} ${month}, ${hours}:${minutes}`;
