import React, { useContext, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';

import { Home } from './pages/Home/Home';
import { Footer } from './components/footer/Footer';
import Settings from './pages/Settings/Settings';
import History from './pages/History/History';
import { ThemeContext } from './utils/themeContext';
import { Modal } from './components/modal/Modal';

function App({ settings }) {
  const ctx = useContext(ThemeContext);
  const [modalWindow, setModalWindow] = useState(false);

  const openModalWindow = () => {
    setModalWindow(true);
  };
  const closeModalWindow = () => {
    setModalWindow(false);
  };

  useEffect(() => {
  }, [settings, modalWindow]);

  return (
    <>
      {modalWindow ? <Modal mode="" close={closeModalWindow} /> : null}
      <div className="container">
        <Switch>
          <Route
            path="/"
            exact
            render={() => (settings.length === 0
              ? <Home header="School CI Server" />
              : <History open={openModalWindow} />)}
          />
          <Route
            path="/history"
            exact
            render={() => (
              <ThemeContext.Provider value={ctx}>
                <History open={openModalWindow} />
              </ThemeContext.Provider>
            )}
          />
          <Route
            path="/home"
            exact
            render={() => (
              <ThemeContext.Provider value={ctx}>
                <Home header="School CI Server" />
              </ThemeContext.Provider>
            )}
          />
          <Route
            path="/settings"
            exact
            render={() => <Settings header="School CI Server" />}
          />
        </Switch>
      </div>
      <Footer copyRight="Malmakova Namina" links={['Support', 'Learning', 'Русская Версия']} />
    </>
  );
}
const mapStateToProps = ({ settings }) => ({ settings });

export default connect(mapStateToProps)(App);
