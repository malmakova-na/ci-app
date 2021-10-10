import {Header} from "../../components/header/Header";
import { Fragment, useState} from "react";
import {Card} from '../../components/card/Card';
import {Button} from '../../components/button';
//import { ThemeContext } from "../../utils/themeContext";
import '../History/History.css';
import '../History/History_mobile.css';

import recivedData from '../../moks/dataMock.json';
import run_btn_icon from '../../icons/play.svg';
import settings_btn_icon from '../../icons/settings.svg'
export const History = ({header, open}) => {
    const STYLES = {
        btn_run: {
            text: "Run build",
            type: "main",
            style: "button_position-r",
            size: "btn--xm--1",
            icon: <img src={run_btn_icon}></img>,
            onClick: open
        },
        btn_settings: {
            text: "",
            type: "main",
            icon:  <img src={settings_btn_icon}></img>,
            size: "btn--xs--2",
            style: "greyButton",
            link: "/settings",

        },
    };

    const [cardNums, setCardNums] = useState(9);
    function show(num, item) {
        console.log("show arr", item.filter((el, i) => i < num ).length)
        return item.filter((el, i) => i < num )
    }
    const showMore = () => {
        setCardNums(cardNums + 9)
    }

    return (
        <Fragment>
            <Header header={header} 
                buttons={[STYLES.btn_run,STYLES.btn_settings]} 
                headerStyle="black"
            />
            <div className="history-wrapper history-wrapper_media">
            {show(cardNums, recivedData).map(item => <Card data={item} key={item.hash}/>)}
                {cardNums >= recivedData.length ? null : <Button onClick={showMore} text="Show More" buttonStyle="greyButton" buttonSize="btn--m--1"/>}
            </div>
           
        </Fragment>
    );
};
/*
{show(cardNums, recivedData).map(item => <Card data={item} key={item.hash}/>)}
                {cardNums >= recivedData.length ? null : <Button onClick={showMore} text="Show More" buttonStyle="greyButton" buttonSize="btn--m--1"/>}
*/
// {recivedData.map(item => <Card data={item} key={item.hash}/>)}