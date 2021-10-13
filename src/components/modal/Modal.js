import {Field} from '../field/Field';
import {Button} from '../button';
import '../modal/Modal.css'
import { useState } from 'react';
export const Modal = ({mode, close}) => {
    const [inputModal, setInput] = useState("");

    const clearInput = (e) => {
        e.preventDefault();
        setInput("");
    };
    const handlerModalInput = (e) => {
        setInput(e.target.value);
    };
    
    return (
        <div className="modal-wrapper">
            <div className="modal">
                <h2 className="modal__header">New build</h2>    
                <div className="modal__field">
                    <Field handler={handlerModalInput} label="label_modal" valid={true}handlerDelete={clearInput}  value={inputModal} placeholder="Commit hush" styleHeader="initial" sizefield="field--s" header="Enter the commit hash which you want to build."></Field>
                </div>
                <div className="modal__buttons">
                    <Button text="Run build" type="default" buttonSize="btn--xm" buttonStyle="yellowButton" onClick={close}/>
                    <Button text="Cancel" type="default" buttonSize="btn--xs--1" buttonStyle="greyButton" onClick={close}/>
                </div>
            </div>
        </div>
    );
};