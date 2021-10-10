import { Fragment, useEffect, useState  } from "react";
import {Header} from "../../components/header/Header";
import {Field} from "../../components/field/Field";

import "../Settings/Settings.css";
import "../Settings/Settings_mobile.css"

import {Button} from "../../components/button";
import {FormErrors} from "../../components/errors/Error";
import {validateField} from "./validateField";

import {getDate, getFullDate} from "../../utils/date";
import {requestImmitation} from "../../utils/requestImmitation";
import { useSettings } from "./useSettings";

export const Settings = ({header, handler}) => {
    const  [ state, submitted, setSubmitted, 
            stateValue, clearInputs, clearInput, 
            clearRepository, clearCommand, clearBrunch ] = useSettings();
  
    const [timer, setTimer] = useState(10);

    useEffect(()=>{
        setSubmitted(false);
    }, [submitted, state]);

    const onSubmit =(e) => {
        e.preventDefault();
        requestImmitation(state, handler, stateValue, setSubmitted);
        stateValue("sended", true);
        setSubmitted(true);
    };
    

    const handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        stateValue(name, value)  
        validateField(name, value, stateValue, state);
        setSubmitted(true)
    };
    const handleTimerInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setTimer(value)
        setSubmitted(true)
    };

    const requestResult = ["ok", ""].includes(state.requestAnswer) ? null: <div>Not Sended</div>;
    return(
        <Fragment>
            <Header header = {header} buttons={[]}/>
            <div className="form-wrapper">
                <h2 className="form-name">Settings</h2>
                <div className="form-description">Configure repository connection and synchronization settings.</div>
                <FormErrors formErrors={state.formErrors} />                
                <form className="fields" onSubmit={onSubmit}>
                    <Field handler={handleUserInput} handlerDelete={clearRepository} name="repository"
                        value={state.repository} header="Github repository" mode="required" 
                        placeholder="use-name/repo-name"/>
                    <Field handlerDelete={clearCommand} handler={handleUserInput} name="command" 
                        value={state.command} header="Build Command" mode="required" />
                    <Field handler={handleUserInput} handlerDelete={clearBrunch} name="branch" 
                        value={state.branch} header="Main branch"/>
                    <div className="setting-time">
                        Synchronize every <input type="number" min="0" onChange={handleTimerInput} className="input-time" value={timer} name="timer"/> minutes
                    </div>
                    <div className="form-buttons">
                        <Button mode={!state.formValid || state.sended} type="default" text="Save" buttonSize="btn--xs--3" buttonStyle="yellowButton" link="/history"/>
                        <Button mode={false || state.sended} onClick={clearInputs} type="default" text="Cancel" buttonSize="btn--xs" buttonStyle="greyButton"/>
                    </div>
                </form>
                {requestResult}
            </div>  
        </Fragment>
    );
};