import { ToolBar } from './HeaderTool';
import './Header.css';

export const Header = ({ header, headerStyle, buttons }) => (
  <header className="header">
    <h1 className={`header_name ${headerStyle}`}>{header}</h1>
    <div className="btn-wrapper">
      <ToolBar buttons={buttons} />
    </div>
  </header>
);
