import { Fragment, useState } from 'react';
import { Header } from '../../components/header/Header';
import { Card } from '../../components/card/Card';
import { Button } from '../../components/button';
import './History.css';
import './History_mobile.css';
import { connect } from 'react-redux';
import run_btn_icon from '../../icons/play.svg';
import settings_btn_icon from '../../icons/settings.svg';

const History = ({
  header, open, settings, repository, loading, modal,
}) => {
  const STYLES = {
    btn_run: {
      text: 'Run build',
      type: 'main',
      style: 'button_position-r',
      size: 'btn--xm--1',
      icon: <img src={run_btn_icon} className="button-icon_side_left" />,
      onClick: open,
    },
    btn_settings: {
      text: '',
      type: 'main',
      icon: <img className="button-icon" src={settings_btn_icon} />,
      size: 'btn--xs--2',
      style: 'greyButton',
      link: '/settings',

    },
  };

  const [cardNums, setCardNums] = useState(9);
  function show(num, item) {
    return item.filter((el, i) => i < num);
  }
  const showMore = () => {
    setCardNums(cardNums + 9);
  };

  return (
    <>
      {modal}
      <Header
        header={repository}
        buttons={[STYLES.btn_run, STYLES.btn_settings]}
        headerStyle="black"
      />
      <div className="history-wrapper history-wrapper_scroll ">
        {show(cardNums, settings).map((item) => <Card data={item} key={item.hash} />)}
        {cardNums >= settings.length ? null : <Button onClick={showMore} text="Show More" buttonStyle="greyButton" buttonSize="btn--m--1" />}
      </div>

    </>
  );
};
const mapStateToProps = ({ settings, repository, loading }) => ({ settings, repository, loading });

export default connect(mapStateToProps)(History);
