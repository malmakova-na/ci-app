import React, { useContext, useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Fragment } from 'react';

import {connect} from 'react-redux';

import {Home} from './pages/Home/Home.js';
import {Footer} from './components/footer/Footer';
import Settings from './pages/Settings/Settings';
import History from './pages/History/History';
import {ThemeContext} from './utils/themeContext';
import {Modal} from './components/modal/Modal';

function App({settings}) {
  const ctx = useContext(ThemeContext);
  const [modalWindow, setModalWindow] = useState(false);
  
  const openModalWindow = () => {
    setModalWindow(true);
  }
  const closeModalWindow = () => {
    setModalWindow(false);
  }

  useEffect(()=> {
  }, [settings, modalWindow]);

  return (
    <Fragment>
      {modalWindow? <Modal mode="" close={closeModalWindow}/>:null}
      <div className="container">
     <Switch>
        <Route
          path="/"
          exact={true}
          render={() => settings.length === 0  ?
            <Home header="School CI Server"/>:
            <History open={openModalWindow} />         
          }
        />
        <Route
         path="/history"
         exact={true}
          render={()=><ThemeContext.Provider value={ctx}>
            <History open={openModalWindow} />
          </ThemeContext.Provider>}
        />
        <Route
          path="/home"
          exact={true}
          render={() => <ThemeContext.Provider value={ctx}>
             <Home header="School CI Server"/>
             </ThemeContext.Provider>}
        />
        <Route
          path="/settings"
          exact={true}
          render={() =>
              <Settings header="School CI Server"/>
          }
        />
      </Switch>
    </div>
    <Footer/>
    </Fragment>
  );
}
const mapStateToProps = ({settings}) => {
  return {settings};
}

export default connect(mapStateToProps)(App)