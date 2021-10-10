import {Fragment} from 'react';
import {Button} from '../button';
export const ToolBar = ({buttons}) => {
    return (
        <Fragment>{buttons.map(button => 
            <Button key={button.text} text={button.text} onClick={button.onClick}
                    type={button.type} buttonSize={button.size} buttonStyle={button.style}
                    icon={button.icon} link={button.link}
            />)}
        </Fragment>
    );
}