import { useContext } from 'react';
import { Header } from '../../components/header/Header';
import { Button } from '../../components/button';

import logo from '../../imgs/logo.svg';
import { ThemeContext } from '../../utils/themeContext';

import './Home.css';
import './Home_mobile.css';

export const Home = ({ header }) => {
  const STYLES = useContext(ThemeContext);

  return (
    <>
      <Header header={header} buttons={[STYLES.home_header.btn_settings]} headerStyle={STYLES.home_header.header_style} />
      <div className="contentWrapper">
        <div className="content">
          <img className="img" src={logo} alt="logo" />
          <p className="message">
            Configure repository connection
            <br />
            and synchronization settings
          </p>
          <Button text="Open Settings" buttonSize="btn--m" buttonStyle="yellowButton" link="/settings" />
        </div>
      </div>
    </>
  );
};
