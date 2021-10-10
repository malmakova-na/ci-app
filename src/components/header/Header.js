import {ToolBar} from './HeaderTool'
import './Header.css'
export const Header = ({header, headerStyle, buttons}) => {
  
  return<div className="header-wrapper header-wrapper_mobile  header-wrapper-full ">
          <h1 className={`header ${headerStyle}`}>{header}</h1>
          <div className="btn-wrapper">
            <ToolBar buttons={buttons}/>
          </div>
        </div>
};