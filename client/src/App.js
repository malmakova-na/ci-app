import React, { useContext, useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Fragment } from 'react';


import {Home} from './pages/Home/Home.js';
import {Footer} from './components/footer/Footer';
import {Settings} from './pages/Settings/Settings';
import {History} from './pages/History/History';
import {ThemeContext} from './utils/themeContext';
import {Modal} from './components/modal/Modal';

function App() {
  const ctx = useContext(ThemeContext);
  const [settings, setSettings]= useState([]);
  const [modalWindow, setModalWindow] = useState(false);
  
  const openModalWindow = () => {
    setModalWindow(true);
  }
  const closeModalWindow = () => {
    setModalWindow(false);
  }
  const onSubmit = (data) => {
    const newSettings = [...settings, data];
    setSettings(newSettings);
  }


  useEffect(()=> {
  }, [settings, modalWindow]);

  return (
    <Fragment>
      {modalWindow?<Modal mode="" close={closeModalWindow}/>:""}
      <div className="container">
     <Switch>
        <Route
          path="/"
          exact={true}
          render={() => settings.length === 0  ?
            <Redirect to="home"/>:
            <Redirect to="history"/>         
          }
        />
        <Route
         path="/history"
         exact={true}
          render={()=><ThemeContext.Provider value={ctx}>
            <History header="philip1967/my-awesome-repo" open={openModalWindow} />
          </ThemeContext.Provider>}
        />
        <Route
          path="/home"
          exact={true}
          render={() => <ThemeContext.Provider value={ctx}>
             <Home header="School CI Server"/>
             </ThemeContext.Provider>
            }
        />
        <Route
          path="/settings"
          exact={true}
          render={() =>
              <Settings handler={onSubmit} header="School CI Server"/>
          }
        />

      </Switch>
    </div>
    <Footer/>
    </Fragment>
    
    
  );
}

export default App;