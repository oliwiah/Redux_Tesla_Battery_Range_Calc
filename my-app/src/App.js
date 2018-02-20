// import TeslaBattery from './containers/TeslaBattery/TeslaBattery';

import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TeslaCarContainer from './containers/TeslaCarContainer';
import TeslaStatsContainer from './containers/TeslaStatsContainer';
import { TeslaSpeedCounterContainer, TeslaSpeedCounterContainer2 } from './containers/TeslaSpeedCounterContainer';
import { TeslaTempCounterContainer3, TeslaTempCounterContainer4 } from './containers/TeslaTempCounterContainer';
import TeslaClimateContainer from './containers/TeslaClimateContainer';
import TeslaWheelsContainer from './containers/TeslaWheelsContainer';
import TeslaNotice from './components/TeslaNotice/TeslaNotice';
import Header from './components/Header/Header';
import './App.css';
import appReducer from './reducers/teslaRangeApp';

const store = createStore(appReducer);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <div className="App">
            <Header />
            <div className="wrapper">
                <form className="tesla-battery">
                    <h1 className="fade-in-animation">Range Per Charge</h1>
                    <TeslaCarContainer />
                    <TeslaStatsContainer />
                    <div className="tesla-controls cf tesla-controls-animation">
                        <div className="tesla-center-div-main">
                            <div className="tesla-center-div-in">
                                <TeslaSpeedCounterContainer />
                                <TeslaSpeedCounterContainer2 />
                                <TeslaClimateContainer />
                                <TeslaTempCounterContainer3 />
                                <TeslaTempCounterContainer4 />
                            </div>
                        </div>
                    </div>
                    <div className="tesla-controls cf tesla-controls-animation">
                        <div className="tesla-center-div-main">
                            <TeslaWheelsContainer />
                        </div>
                    </div>
                    <TeslaNotice />
                </form>
            </div>
        </div>
        </Provider>

    );
  }
}

export default App;
