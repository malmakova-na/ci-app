import { Fragment } from 'react';
import { Button } from '../button';
import './Field.css';

export const Field = ({
  header, placeholder, mode, styleHeader, sizefield, name, handler, value, handlerDelete, label, valid, tabIndex
}) => {
  const SIZES = { 'field--s': 'input--s' };
  const error = valid ? '' : 'field_error';
  return (
    <Fragment>
      <label className={`${mode} ${styleHeader} ${label} label`}>{header}</label>
      <div className={`field ${sizefield}  ${error}`} tabIndex={tabIndex}>
        <input onChange={handler} name={name} className={`input-field ${SIZES[sizefield]}`} value={value} placeholder={placeholder} outline="none" />
        <Button mode={false} onClick={handlerDelete} type="little-close" buttonSize="btn--xxs" buttonStyle="noBodyButton" />
      </div>
    </Fragment>
  );
};
