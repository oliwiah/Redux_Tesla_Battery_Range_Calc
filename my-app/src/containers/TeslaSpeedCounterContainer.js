import { TeslaCounter, TeslaCounter2 } from '../components/TeslaCounter/TeslaCounter';
import { connect } from 'react-redux';
import { speedUp, speedDown } from '../actions'
import { counterDefaultVal } from '../constants/counterDefaultVal';

const mapStateToProps = (state) => {
    return {
        currentValue: state.config.speed,
        initValues: counterDefaultVal.speed
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment:(value) => {
            dispatch(speedUp(value))
        },
        decrement:(value) => {
            dispatch(speedDown(value))
        }
    }
}

const TeslaSpeedCounterContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaCounter);
const TeslaSpeedCounterContainer2 = connect(mapStateToProps, mapDispatchToProps)(TeslaCounter2);

export {
    TeslaSpeedCounterContainer,
    TeslaSpeedCounterContainer2
}