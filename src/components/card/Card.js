import './Card.css';
import ok_icon from '../../icons/ok.svg';
import wrong_icon from '../../icons/error.svg';
import calendar_icon from '../../icons/calendar.svg';
import timer_icon from '../../icons/timer.svg';
import clock_icon from  '../../icons/clock.svg';
import icon_branch from '../../icons/commit.svg';//
import icon_user from '../../icons/user.svg';
export const Card=({data}) => {

    const STATUS_TO_STYLE = {
        "ok": {
            src: ok_icon,
            color: "status_ok"
        },
        "error": {
            src: wrong_icon,
            color: "status_error"
        },
        "pending": {
            src: clock_icon,
            color: "status_pending"
        }
    }
    
    return (
        <div className="card">
           <img className="card__icon " src={STATUS_TO_STYLE[data.status].src}/>
            <div className="card__main-section">
                <div className="info">
                    <div className="info__item">
                        <span className={`status status_size ${STATUS_TO_STYLE[data.status].color}`}>#{data.id}</span>
                        <span>{data.action}</span>
                    </div>
                    <div className="info__item info__item_media-data">
                        <div className="git-info">
                            <img className="git-info__icon" src={icon_branch}/>
                            <span className="git-info__item">{data.brunch}</span>
                            <span className="git-info__item">{data.hash}</span>
                        </div>
                        <div className="user">
                            <img className="user__icon" src={icon_user}/>
                            <span className="user__name" >{data.user}</span>
                        </div>
                    </div>
                </div>
                <div className="date-calendar">
                    <div className="date">
                        <img className="date__icon" src={calendar_icon}/>
                        <span className="date__info">{data.date}</span>
                    </div>
                    <div className="date">
                        <img className="date__icon" src={timer_icon}/>
                        <span className="date__info">{data.time}</span>
                    </div>
                </div>
            </div> 
            
        </div>
    );
};