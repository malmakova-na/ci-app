import  React  from  "react";
// Context has been created
// Provider
import settings_btn_icon from '../icons/settings.svg';
import run_btn_icon from '../icons/play.svg';
import ok_icon from '../icons/ok.svg';
import wrong_icon from '../icons/error.svg';
import calendar_icon from '../icons/calendar.svg';
import time_icon from '../icons/timer.svg';
import commit_icon from '../icons/commit.svg';
import user_icon from '../icons/user.svg';
const STYLES = {
    history_header: {
        header_style: "black",
        btn_run: {
            text: "Run build",
            type: "main",
            style: "greyButton",
            size: "btn--s",
            icon: <img src={run_btn_icon}></img>
        },
        btn_settings: {
            text: "",
            type: "main",
            icon:  <img src={settings_btn_icon}></img>,
            size: "btn--xs--2",
            style: "greyButton"
        },
    },
    home_header: {
        header_style:"grey",
        btn_settings: {
            text: "Settings",
            type: "main",
            icon:  <img src={settings_btn_icon} className="button-icon_side_left"></img>,
            size: "btn--s",
            style: "greyButton",
            link: "/settings"
        }
    },
    history_card: {
        default_icon: {
            calendar_icon: <img src={calendar_icon}/>,
            time_icon: <img src={time_icon}/>,
            commit_icon: <img src={commit_icon}/>,
            user_icon: <img src={user_icon}/>,
        },
        
        ok: {
            icon: <img src={ok_icon}/>,
            style: "green",
        },
        wrong: {
            icon: <img src={wrong_icon}/>,
            style: "red"
        }
    }

}
const ThemeContext = React.createContext(STYLES);
export {ThemeContext};
