import { Fragment, useEffect, useState } from 'react';
import { Header } from '../../components/header/Header';
import { Field } from '../../components/field/Field';

import './Settings.css';
import './Settings_mobile.css';

import { Button } from '../../components/button';
import { validateField } from './validateField';
import data from '../../moks/dataMock.json';
import { useSettings } from './useSettings';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { formSubmited, downloadData } from '../../store/actions';

const Settings = ({ header, formSubmited, downloadData }) => {
  const history = useHistory();

  const [state, submitted, setSubmitted,
    stateValue, clearInputs, clearInput,
    clearRepository, clearCommand, clearBrunch] = useSettings();

  const [load, setLoading] = useState(false);

  useEffect(() => {
    setSubmitted(false);
  }, [submitted, state]);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (state.formValid) {
        formSubmited({
          repository: state.repository,
          command: state.command,
          branch: state.branch,
          time: state.time,
        });
        downloadData(data);
        setSubmitted(true);
        setLoading(false);
        history.push('/');
      } else {
        // err
      }
    }, 2000);
  };

  const handleUserInput = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    stateValue(name, value);
    validateField(name, value, stateValue, state);
    setSubmitted(true);
  };
  const handleTimeInput = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    stateValue(name, value);
    setSubmitted(true);
  };
  const isValidStyle = (value) => state.formErrors[value] === null || state.formErrors[value] === true;
  //const requestResult = ['ok', ''].includes(state.requestAnswer) ? null : <div>Not Sended</div>;
  return (
    <>
      <Header header={header} buttons={[]} />
      <div className="form-wrapper">
        <h2 className="form-name">Settings</h2>
        <div className="form-description">
          Configure repository connection and synchronization settings.
        </div>
        <form className="fields">
          <Field
            tabIndex="0"
            handler={handleUserInput}
            handlerDelete={clearRepository}
            name="repository"
            value={state.repository}
            header="Github repository"
            mode="required"
            placeholder="use-name/repo-name"
            valid={isValidStyle('repository')}
          />
          <Field
          tabIndex="1"
            handlerDelete={clearCommand}
            handler={handleUserInput}
            name="command"
            value={state.command}
            header="Build Command"
            mode="required"
            valid={isValidStyle('command')}
          />
          <Field
            handler={handleUserInput}
            handlerDelete={clearBrunch}
            name="branch"
            value={state.branch}
            header="Main branch"
            valid
          />
          <div className="setting-time">
            Synchronize every
            <input
              type="number"
              min="0"
              onChange={handleTimeInput}
              className="input-time"
              value={state.time}
              name="time"
            />
            minutes
          </div>
          <div className="form-buttons">
            <Button
              onClick={onSubmit}
              mode={!state.formValid || load === true}
              type="default"
              text="Save"
              buttonSize="btn--xs--3"
              buttonStyle="yellowButton"
              link="/history"
            />
            <Button
              mode={false || load === true}
              onClick={clearInputs}
              type="default"
              text="Cancel"
              buttonSize="btn--xs"
              buttonStyle="greyButton"
            />
          </div>
        </form>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => ({
  formSubmited: (inputs) => dispatch(formSubmited(inputs)),
  downloadData: (data) => dispatch(downloadData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
