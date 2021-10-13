import { Fragment, useEffect, useState  } from "react";
import {Header} from "../../components/header/Header";
import {Field} from "../../components/field/Field";

import "../Settings/Settings.css";
import "../Settings/Settings_mobile.css"

import {Button} from "../../components/button";
import {FormErrors} from "../../components/errors/Error";
import {validateField} from "./validateField";

import data from "../../moks/dataMock.json";
import {getDate, getFullDate} from "../../utils/date";
import {requestImmitation} from "../../utils/requestImmitation";
import { useSettings } from "./useSettings";

import { useHistory } from "react-router-dom";

import { connect } from 'react-redux';
import { formSubmited, downloadData} from '../../store/actions';
const Settings = ({header/*, handler*/, formSubmited, downloadData}) => {
    const  [ state, submitted, setSubmitted, 
            stateValue, clearInputs, clearInput, 
            clearRepository, clearCommand, clearBrunch ] = useSettings();
  
    const [timer, setTimer] = useState(10);
    const [load, setLoading] = useState(false);
    let history = useHistory();
    useEffect(()=>{
        setSubmitted(false);
    }, [submitted, state]);


    const onSubmit =(e) => {
        e.preventDefault();
        setLoading(true)
        setTimeout(()=> {//имитирую загрузку процесс клонирования репозитория
            if(state.formValid) {
                formSubmited({//сохраняю данные из формы
                    repository: state.repository,
                    command: state.command,
                    branch: state.branch,
                    time: timer
                });
                downloadData(data);
                setSubmitted(true);
                setLoading(false);
                history.push('/');
            } else {
                //err
            }
            
        }, 2000);
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
    const getMod =() => {
        if(state.formValid && load){
            console.log(true)
            return true
        } 
        console.log(false)
        return false;
    }
    //console.log(state.formErrors["repository"], state.formErrors.repository === null || state.formErrors.repository=== true  )
    const isValidStyle = (value) => {
        console.log(state.formErrors[value] === null || state.formErrors[value]=== true);
        console.log("repa", state.repositoryValid)
        console.log("com",state.commandValid)
        return state.formErrors[value] === null || state.formErrors[value]=== true;
    }
    const requestResult = ["ok", ""].includes(state.requestAnswer) ? null: <div>Not Sended</div>;
    console.log(state.repository, state.command, state.formValid)
    return(
        <Fragment>
            <Header header = {header} buttons={[]}/>
            <div className="form-wrapper">
                <h2 className="form-name">Settings</h2>
                <div className="form-description">Configure repository connection and synchronization settings.</div>        
                <form className="fields" >
                    <Field handler={handleUserInput} handlerDelete={clearRepository} name="repository"
                        value={state.repository} header="Github repository" mode="required" 
                        placeholder="use-name/repo-name" valid={isValidStyle("repository")}/>
                    <Field handlerDelete={clearCommand} handler={handleUserInput} name="command" 
                        value={state.command} header="Build Command" mode="required"  valid={isValidStyle("command")}/>
                    <Field handler={handleUserInput} handlerDelete={clearBrunch} name="branch" 
                        value={state.branch} header="Main branch" valid={true}/>
                    <div className="setting-time">
                        Synchronize every <input type="number" min="0" onChange={handleTimerInput} className="input-time" value={timer} name="timer"/> minutes
                    </div>
                    <div className="form-buttons">
                        <Button onClick={onSubmit} mode={!state.formValid || load===true } type="default" text="Save" buttonSize="btn--xs--3" buttonStyle="yellowButton" link="/history"/>
                        <Button mode={false || load===true} onClick={clearInputs} type="default" text="Cancel" buttonSize="btn--xs" buttonStyle="greyButton"/>
                    </div>
                </form>
                {requestResult}
            </div>  
        </Fragment>
    );
};
//!state.formValid || load===true false || load===true
//<FormErrors formErrors={state.formErrors} /> 
const mapStateToProps = (state) => {
    return { state };
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        formSubmited: (inputs) => dispatch(formSubmited(inputs)),
        downloadData: (data) => dispatch(downloadData(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);