import React from 'react';
import PropTypes from 'prop-types';
import './TeslaCounter.css';
// import TeslaNotice from "../TeslaNotice/TeslaNotice";

const TeslaCounter = ({ initValues, currentValue, increment, decrement }) => (
    <div className="tesla-counter">
        <p className="tesla-counter__title">{ initValues.title }</p>
        <div className="tesla-counter__container cf">
            <div className="tesla-counter__item">
                <p className="tesla-counter__number">
                    { currentValue }
                    <span>{ initValues.unit }</span>
                </p>
                <div className="tesla-counter__controls">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            increment(currentValue)}}
                        disabled={currentValue >= initValues.max}
                    >
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            decrement(currentValue)}}
                        disabled={currentValue <= initValues.min}
                    >
                    </button>
                </div>
            </div>
        </div>
    </div>
);

TeslaCounter.propTypes = {
    currentValue: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    initValues: PropTypes.object
}

const TeslaCounter2 = ({ initValues, currentValue, increment, decrement }) => (
    <div className="tesla-counter">
        <p className="tesla-counter__title" id="hidden">{ initValues.title }</p>
        <div className="tesla-counter__container cf">
            <div className="tesla-counter__item">
                <p className="tesla-counter__number">
                    { currentValue }
                    <span id="km"> km/h </span>
                </p>
                <div className="tesla-counter__controls">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            increment(currentValue)}}
                        disabled={currentValue >= 113}
                    >
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            decrement(currentValue)}}
                        disabled={currentValue <= 72}
                    >
                    </button>
                </div>
            </div>
        </div>
    </div>
);

TeslaCounter2.propTypes = {
    currentValue: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    initValues: PropTypes.object
}

const TeslaCounter3 = ({ initValues, currentValue, increment, decrement }) => (
    <div className="tesla-counter">
        <p className="tesla-counter__title" id="hidden">{ initValues.title }</p>
        <div className="tesla-counter__container cf">
            <div className="tesla-counter__item">
                <p className="tesla-counter__number">
                    { currentValue }
                    <span id="km"> f </span>
                </p>
                <div className="tesla-counter__controls">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            increment(currentValue)}}
                        disabled={currentValue >= 104}
                    >
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            decrement(currentValue)}}
                        disabled={currentValue <= 14}
                    >
                    </button>
                </div>
            </div>
        </div>
    </div>
);

TeslaCounter3.propTypes = {
    currentValue: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    initValues: PropTypes.object
}

export {
    TeslaCounter,
    TeslaCounter2,
    TeslaCounter3
}

// module.exports = {
//     TeslaCounter: TeslaCounter,
//     TeslaCounter2: TeslaCounter2,
//     TeslaCounter3: TeslaCounter3
// }

// const TeslaCounters = {
//     TeslaCounter,
//     TeslaCounter2,
//     TeslaCounter3
// }
//
// export default TeslaCounters;